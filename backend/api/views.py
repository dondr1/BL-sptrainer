from django.shortcuts import render
import json
import bcrypt
from .models import User

def signup(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data["username"]
            email = data["email"]
            password = data["password"]

            if User.objects(username=username).first():
                return jsonResponse({"error" : "Username already taken"}, status = 400)
            
            if User.objects(email=email).first():
                return JsonResponse({"error": "Email already registered"}, status=400)

            user = User(username=username, email=email)
            user.set_password(password)
            #user.save()

            return JsonResponse({"message": "User registered successfully"}, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
        
def login(request):
    """Authenticates a user"""
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data["username"]
            password = data["password"]

            user = User.objects(username=username).first()
            if not user or not user.check_password(password):
                return JsonResponse({"error": "Invalid username or password"}, status=401)

            return JsonResponse({"message": "Login successful", "username": username}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
        