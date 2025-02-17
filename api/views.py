from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from bson import ObjectId
from backend.settings import db  # Import the db connection
from datetime import datetime
import bcrypt

@api_view(['POST'])
def signup(request):
    print(request.data)
    pwd = request.data.get('pwd')
    print(pwd)
    salt = bcrypt.gensalt()
    hash_pwd = bcrypt.hashpw(pwd.encode('utf-8'), salt)

    try:
        trainee_data = {
            'real_name': request.data.get('real_name'),
            'uname': request.data.get('uname'),
            'phone_no': request.data.get('phone_no'),
            'hash_pwd': hash_pwd.decode('utf-8'),  # Should be hashed properly
            'age': int(request.data.get('age')),
            'org_name': request.data.get('org_name'),
            'created_at': datetime.now(),
            'chat_sessions': []
        }

        # Insert directly into collection
        existing_trainee = db.trainees.find_one({"uname": request.data.get('uname')})
        if existing_trainee is None:
            result = db.trainees.insert_one(trainee_data)
            return JsonResponse({
                'id': str(result.inserted_id),
                'uname': trainee_data['uname']
            }, status=status.HTTP_201_CREATED)
        else:
            print("User already exists.")
            return JsonResponse({
                'uname': trainee_data['uname']
            }, status=status.HTTP_404_BAD_REQUEST)

    except Exception as e:
        return JsonResponse(
            {'error': str(e)}, 
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
def login(request):
    pwd = request.data.get('pwd')
    uname = request.data.get('uname')

    try:
        # check if user exists
        existing_trainee = db.trainees.find_one({"uname": uname})
        # print(existing_trainee.id)
        if existing_trainee is None:
            print("User does not exist.")
            return JsonResponse({
                'error': 'User does not exist.'
            }, status=status.HTTP_404_NOT_FOUND)
        else:
            # match hash_pwd
            stored_hash_pwd = existing_trainee['hash_pwd']
            print(stored_hash_pwd.encode('utf-8'))
            print(pwd.encode('utf-8'))
            
            # authenticate
            if bcrypt.checkpw(pwd.encode('utf8'), stored_hash_pwd.encode('utf-8')):
                return JsonResponse({
                    'message': 'Login successful',
                    'u_id': str(existing_trainee['_id']),
                    'uname': uname
                }, status=status.HTTP_200_OK)
            else:
                return JsonResponse({
                    'error': 'Invalid credentials.'
                }, status=status.HTTP_401_UNAUTHORIZED)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return JsonResponse({
            'error': 'An error occurred during login'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

def insert_chat_session(data):
    # Convert trainee ID to ObjectId
    data['trainee'] = ObjectId(data['trainee'])
    
    # Convert timestamp strings to datetime objects
    for chat in data['chats']:
        chat['timestamp'] = datetime.fromisoformat(chat['timestamp'].replace('Z', '+00:00'))
    
    data['created_at'] = datetime.fromisoformat(data['created_at'].replace('Z', '+00:00'))
    
    # Insert the data into the database
    result = db.ChatSessions.insert_one(data)
    
    return result.inserted_id

@api_view(['POST'])
def upload_chat_history(request):
    try:
        data = request.data
        inserted_id = insert_chat_session(data)
        
        return JsonResponse({
            'message': 'Chat session uploaded successfully',
            'session_id': str(inserted_id)
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    

@api_view(['GET'])
def access_chat_history_all(request):
    uname = request.data.get('uname')
    if not uname:
        return JsonResponse({'error': 'Username is required'}, status=400)

    try:
        # First, find the trainee's ObjectId from the Trainees collection
        trainee = db.trainees.find_one({'uname': uname})
        if not trainee:
            return JsonResponse({'error': 'Trainee not found'}, status=404)

        trainee_obj_id = trainee['_id']

        # Now use the trainee's ObjectId to find chat sessions
        chat_sessions = list(db.ChatSessions.find({'trainee': trainee_obj_id}))

        if not chat_sessions:
            return JsonResponse({'error': 'No chat history found for this user'}, status=404)

        # Format the response
        response_data = []
        for session in chat_sessions:
            formatted_session = {
                'session_id': str(session['_id']),
                'trainee': uname,
                'chats': session.get('chats', []),
                'created_at': session['created_at'].isoformat() + 'Z'
            }
            
            for chat in formatted_session['chats']:
                chat['timestamp'] = chat['timestamp'].isoformat() + 'Z'
            
            response_data.append(formatted_session)

        return JsonResponse({'chat_sessions': response_data}, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def access_chat_history_single(request):
    uname = request.data.get('uname')
    sess_id = request.data.get('sess_id')

    if not uname or not sess_id:
        return JsonResponse({'error': 'Username and session ID are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Find the trainee's ObjectId
        trainee = db.trainees.find_one({'uname': uname})
        if not trainee:
            return JsonResponse({'error': 'Trainee not found'}, status=status.HTTP_404_NOT_FOUND)

        trainee_obj_id = trainee['_id']

        # Find the specific chat session
        chat_session = db.ChatSessions.find_one({
            '_id': ObjectId(sess_id),
            'trainee': trainee_obj_id
        })

        if not chat_session:
            return JsonResponse({'error': 'Chat session not found'}, status=status.HTTP_404_NOT_FOUND)

        # Format the response
        response_data = {
            'session_id': str(chat_session['_id']),
            'trainee': uname,
            'chats': chat_session.get('chats', []),
            'created_at': chat_session['created_at'].isoformat() + 'Z'
        }

        # Format timestamps in chats
        for chat in response_data['chats']:
            chat['timestamp'] = chat['timestamp'].isoformat() + 'Z'

        return JsonResponse(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def access_scores_single(request):
    uname = request.data.get('uname')
    session_id = request.data.get('session_id')

    if not uname or not session_id:
        return JsonResponse({'error': 'Username and session ID are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = db.trainees.find_one({'uname': uname})
        if not user:
            return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        scores = db.SessionScores.find_one({
            'user_id': user['_id'],
            'session_id': ObjectId(session_id)
        })

        if not scores:
            return JsonResponse({'error': 'Scores not found for this session'}, status=status.HTTP_404_NOT_FOUND)

        response_data = {
            'session_id': str(scores['session_id']),
            'rapport_building': scores['rapport_building'],
            'risk_assess': scores['risk_assess'],
            'safety_planning': scores['safety_planning'],
            'crisis_descalation': scores['crisis_descalation'],
            'resource_ref': scores['resource_ref']
        }

        return JsonResponse(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def access_scores_all(request):
    uname = request.data.get('uname')

    if not uname:
        return JsonResponse({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = db.trainees.find_one({'uname': uname})
        if not user:
            return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        all_scores = list(db.SessionScores.find({'user_id': user['_id']}))

        if not all_scores:
            return JsonResponse({'error': 'No scores found for this user'}, status=status.HTTP_404_NOT_FOUND)

        response_data = [{
            'session_id': str(scores['session_id']),
            'rapport_building': scores['rapport_building'],
            'risk_assess': scores['risk_assess'],
            'safety_planning': scores['safety_planning'],
            'crisis_descalation': scores['crisis_descalation'],
            'resource_ref': scores['resource_ref']
        } for scores in all_scores]

        return JsonResponse({'scores': response_data}, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def upload_scores(request):
    uname = request.data.get('uname')
    session_id = request.data.get('session_id')
    
    if not uname or not session_id:
        return JsonResponse({'error': 'Username and session ID are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = db.trainees.find_one({'uname': uname})
        if not user:
            return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        scores_doc = {
            'user_id': user['_id'],
            'session_id': ObjectId(session_id),
            'rapport_building': request.data.get('rapport_building'),
            'risk_assess': request.data.get('risk_assess'),
            'safety_planning': request.data.get('safety_planning'),
            'crisis_descalation': request.data.get('crisis_descalation'),
            'resource_ref': request.data.get('resource_ref')
        }

        # Validate that all required scores are provided
        if any(score is None for score in scores_doc.values()):
            return JsonResponse({'error': 'All score fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        result = db.SessionScores.insert_one(scores_doc)

        if result.inserted_id:
            return JsonResponse({
                'message': 'Scores uploaded successfully',
                'inserted_id': str(result.inserted_id)
            }, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error': 'Failed to upload scores'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
