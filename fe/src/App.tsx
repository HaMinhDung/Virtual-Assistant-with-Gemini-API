import React, { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const response = await fetch("http://127.0.0.1:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();

    setChatHistory([...chatHistory, { user: message, bot: data.response }]);
    setMessage("");
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div style={{ marginBottom: "20px", maxHeight: "400px", overflowY: "scroll" }}>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p><strong>You:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default App;
