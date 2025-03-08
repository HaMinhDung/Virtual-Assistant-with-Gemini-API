### **Virtual-Assistant-with-Gemini-API**  

The **Voice-Controlled AI Assistant** integrates Google’s generative AI to respond to spoken queries. Using speech recognition for voice input, it generates intelligent responses, converts them to speech with gTTS, and plays them back using Playsound v1.2.2 for seamless interaction. It serves as a conversational AI tool for voice-activated applications.  

---

### **1. Backend (Python)**  
- Install the required dependencies.  
- Run the command:  
  ```bash
  python server.py
  ```  
  to start the backend server.  

---

### **2. Frontend (React)**  
- Install Node.js.  
- Run:  
  ```bash
  npm install
  ```  
  to install the necessary libraries.  
- Start the frontend by running:  
  ```bash
  npm start
  ```  
  This will open the homepage interface where users can chat with the chatbot.  

#### **Key Pages:**  
- **Document Upload & Summarization:**  
  `http://localhost:3000/dashboard/Document_processing`  
- **Audio Upload & Transcription:**  
  `http://localhost:3000/dashboard/Transcribe`  
