from rest_framework_mongoengine.serializers import DocumentSerializer
from .models import Trainee, ChatMessage, ChatSession

class TraineeSerializer(DocumentSerializer):
    class Meta:
        model = Trainee
        fields = '__all__'

class ChatMessageSerializer(DocumentSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'

class ChatSessionSerializer(DocumentSerializer):
    class Meta:
        model = ChatSession
        fields = '__all__'

