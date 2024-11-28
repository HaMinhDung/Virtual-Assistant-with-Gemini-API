import google.generativeai as genai
import os
import speech_recognition as sr

os.environ["API_KEY"] = "AIzaSyAhuxSrWShqIKQUbptlrfIUnfsIg1XADv0"
genai.configure(api_key=os.environ["API_KEY"])

generation_configuration = {
    "temperature": 0.7,
    "top_p": 1,
    "top_k": 1,
}

safetySettings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE" 
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE" 
    },
]

model = genai.GenerativeModel("gemini-1.5-flash-8b", 
                            generation_config=generation_configuration, 
                            safety_settings=safetySettings)

def start_conversation(file_path):
    print("Uploading...")
    sample_file = genai.upload_file(file_path)
    return model.generate_content([f"Let's discuss the content of this file: {sample_file}"])

# Example usage
# response = start_conversation("path/to/your/file.pdf")
# print(response.text) 


