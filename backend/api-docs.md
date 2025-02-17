Here are example GET and POST requests along with their corresponding responses for each API endpoint:

### **1. Signup Endpoint (`POST /signup/`)**
#### **Request**
```json
{
    "real_name": "John Doe",
    "uname": "johndoe",
    "phone_no": "1234567890",
    "pwd": "securepassword",
    "age": "25",
    "org_name": "Helping Hands"
}
```
#### **Response (Success - 201 Created)**
```json
{
    "id": "67b2ac9e8e0081918b47eebcbea8b381",
    "uname": "johndoe"
}
```
#### **Response (Failure - 400 Bad Request)**
```json
{
    "error": "User already exists."
}
```

---

### **2. Login Endpoint (`POST /login/`)**
#### **Request**
```json
{
    "uname": "johndoe",
    "pwd": "securepassword"
}
```
#### **Response (Success - 200 OK)**
```json
{
    "message": "Login successful",
    "u_id": "67b2ac9e8e0081918b47eebcbea8b381",
    "uname": "johndoe"
}
```
#### **Response (Failure - 401 Unauthorized)**
```json
{
    "error": "Invalid credentials."
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "User does not exist."
}
```

---

### **3. Upload Chat History (`POST /upload_chat_history/`)**
#### **Request**
```json
{
    "uname": "johndoe",
    "chats": [
        {
            "sender": "ai",
            "message_content": "Hello, I'm feeling suicidal. My dog died.",
            "timestamp": "2025-02-17T09:30:00.000Z"
        },
        {
            "sender": "user",
            "message_content": "Oh no, that's horrible. When did this happen?",
            "timestamp": "2025-02-17T09:31:15.000Z"
        }
    ],
    "created_at": "2025-02-17T09:30:00.000Z"
}
```
#### **Response (Success - 201 Created)**
```json
{
    "message": "Chat session uploaded successfully",
    "session_id": "67b29bafb948833a1c05703a"
}
```
#### **Response (Failure - 400 Bad Request)**
```json
{
    "error": "Username is required"
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "Trainee username not found"
}
```

---

### **4. Access All Chat History (`GET /access_chat_history_all/`)**
#### **Request**
```json
{
    "uname": "johndoe"
}
```
#### **Response (Success - 200 OK)**
```json
{
    "chat_sessions": [
        {
            "session_id": "67b29bafb948833a1c05703a",
            "trainee": "johndoe",
            "chats": [
                {
                    "sender": "ai",
                    "message_content": "Hello, I'm feeling suicidal. My dog died.",
                    "timestamp": "2025-02-17T09:30:00.000Z"
                }
            ],
            "created_at": "2025-02-17T09:30:00.000Z"
        }
    ]
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "No chat history found for this user"
}
```

---

### **5. Access Single Chat Session (`GET /access_chat_history_single/`)**
#### **Request**
```json
{
    "uname": "johndoe",
    "sess_id": "67b29bafb948833a1c05703a"
}
```
#### **Response (Success - 200 OK)**
```json
{
    "session_id": "67b29bafb948833a1c05703a",
    "trainee": "johndoe",
    "chats": [
        {
            "sender": "ai",
            "message_content": "Hello, I'm feeling suicidal. My dog died.",
            "timestamp": "2025-02-17T09:30:00.000Z"
        }
    ],
    "created_at": "2025-02-17T09:30:00.000Z"
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "Chat session not found"
}
```

---

### **6. Access Single Session Scores (`GET /access_scores_single/`)**
#### **Request**
```json
{
    "uname": "johndoe",
    "session_id": "67b29bafb948833a1c05703a"
}
```
#### **Response (Success - 200 OK)**
```json
{
    "session_id": "67b29bafb948833a1c05703a",
    "rapport_building": 4,
    "risk_assess": 5,
    "safety_planning": 3,
    "crisis_descalation": 5,
    "resource_ref": 4
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "Scores not found for this session"
}
```

---

### **7. Access All Session Scores (`GET /access_scores_all/`)**
#### **Request**
```json
{
    "uname": "johndoe"
}
```
#### **Response (Success - 200 OK)**
```json
{
    "scores": [
        {
            "session_id": "67b29bafb948833a1c05703a",
            "rapport_building": 4,
            "risk_assess": 5,
            "safety_planning": 3,
            "crisis_descalation": 5,
            "resource_ref": 4
        }
    ]
}
```
#### **Response (Failure - 404 Not Found)**
```json
{
    "error": "No scores found for this user"
}
```

---

### **8. Upload Scores (`POST /upload_scores/`)**
#### **Request**
```json
{
    "uname": "johndoe",
    "session_id": "67b29bafb948833a1c05703a",
    "rapport_building": 4,
    "risk_assess": 5,
    "safety_planning": 3,
    "crisis_descalation": 5,
    "resource_ref": 4
}
```
#### **Response (Success - 201 Created)**
```json
{
    "message": "Scores uploaded successfully",
    "inserted_id": "67b2ac9e8e0081918b47eebcbea8b381"
}
```
#### **Response (Failure - 400 Bad Request)**
```json
{
    "error": "All score fields are required"
}
```
#### **Response (Failure - 500 Internal Server Error)**
```json
{
    "error": "Failed to upload scores"
}
```