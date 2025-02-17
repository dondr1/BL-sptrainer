# example_run.py
import mongoengine
import os
from api.models import Trainee, ChatMessage, ChatSession  # Ensure these models are defined as provided earlier
from dotenv import load_dotenv

load_dotenv("backend/.env")
MONGO_PWD = os.getenv('MONGODB_KEY_HDARJI')
MONGO_HOST = os.getenv('MONGODB_HOSTNAME')
MONGO_UNAME = os.getenv('MONGODB_USERNAME')

# Connect to MongoDB using your connection string (replace placeholders with actual values)
mongoengine.connect(
    db='suicide-prevention-app',
    host=f'mongodb+srv://{MONGO_UNAME}:{MONGO_PWD}@{MONGO_HOST}/suicide-prevention-app?retryWrites=true&w=majority'
)

# --- Step 1: Create a Trainer ---
trainee = Trainee(
    real_name="Alice Smith",
    uname="alice",
    hash_pwd="hashed_password_here",  # In practice, hash the password properly
    phone_no="+1 1234556799",
    age=28,
    org_name="Prevention Org"
)
trainee.save() 
print("Created Trainer:")
print(f"ID: {trainee.id}, Username: {trainee.uname}\n")

# --- Step 2: Create a ChatSession for the Trainer ---
session = ChatSession(trainee=trainee)
session.save()
print("Created ChatSession:")
print(f"Session ID (auto-generated): {session.id}, Trainer: {session.trainee.uname}\n")


# --- Step 3: Create and Add ChatMessages ---
msg1 = ChatMessage(sender="ai", message_content="Hello, how are you feeling today?")
msg2 = ChatMessage(sender="alice", message_content="I'm feeling a bit anxious.")
msg3 = ChatMessage(sender="ai", message_content="I'm sorry to hear that. Would you like some tips?")

# Append messages to the session (preserving the order)
session.chats.append(msg1)
session.chats.append(msg2)
session.chats.append(msg3)
session.save()

print("Chat messages added to the session.\n")

# --- Step 4: Retrieve and Display the Chat Session ---
retrieved_session = ChatSession.objects(id=session.id).first()

if retrieved_session:
    print("Retrieved ChatSession:")
    print(f"Session ID: {retrieved_session.id}")
    print(f"Trainer: {retrieved_session.trainee.uname}")
    print("Chat History:")
    for chat in retrieved_session.chats:
        # Format the timestamp as needed; here we simply print the default representation
        print(f"{chat.sender} ({chat.timestamp}): {chat.message_content}")
else:
    print("ChatSession not found.")

t = Trainee(real_name="Test", uname="testuser", phone_no="+1 1111111111", hash_pwd="hash", age=25, org_name="Org")
t.save()
print(t.id)
