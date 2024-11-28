import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DocumentProcessing: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/process_document', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Document Processing Page</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload & Get Summary'}
      </button>
      {summary && <p><strong>Summary:</strong> {summary}</p>}
      <Link to="/">Go to Home</Link> <br />
      <Link to="/dashboard/transcribe">Go to Transcribe</Link>
    </div>
  );
};

export default DocumentProcessing;