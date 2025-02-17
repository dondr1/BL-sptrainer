"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import (signup, login, access_chat_history_all, access_scores_all, 
        access_scores_single, upload_chat_history, access_chat_history_single, upload_scores)

urlpatterns = [
    path('signup/', signup, name = "signup"),
    path('login/', login, name = "login"),
    path('access-scores-single/', access_scores_single, name='access_scores_single'),
    path('access-scores-all/', access_scores_all, name='access_scores_all'),
    path('upload-scores/', upload_scores, name='upload_scores'),
    path('access-chat-history-single/', access_chat_history_single, name='access_chat_history_single'),
    path('access-chat-history-all/', access_chat_history_all, name='access_chat_history_all'),
    path('upload-chat-history/', upload_chat_history, name='upload_chat_history')
]
