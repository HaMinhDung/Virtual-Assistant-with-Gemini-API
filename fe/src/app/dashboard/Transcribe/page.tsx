import React, { useState } from "react";

const Transcribe: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [context, setContext] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("context", context);

    try {
      const response = await fetch("http://127.0.0.1:5000/transcribe", {
        method: "POST",
        body: formData,
      });

      // Kiểm tra nếu phản hồi là file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "transcription.txt"; // Tên file tải xuống
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>Audio Transcription</h1>
      <input type="file" onChange={handleFileChange} accept="audio/*" />
      <textarea
        placeholder="Optional context..."
        value={context}
        onChange={(e) => setContext(e.target.value)}
      ></textarea>
      <button onClick={handleUpload}>Upload & Transcribe</button>
    </div>
  );
};

export default Transcribe;
  