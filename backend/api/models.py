from django.db import models
from mongoengine import Document, StringField, IntField, ListField
import bcrypt

class User(Document):
    username = StringField(required = "True", max_length=50, unique=True)
    email = StringField(required = "True", unique=True)
    password_hash = StringField(required = True)
    scores = ListField(IntField(), default=[])

    def set_password(self, passsword):
        salt = bcrypt.gensalt()
        self.password_hash = bcrypt.hashwp(passsword.encode("utf-8"), salt).decode("utf-8")

    def add_score(self, score):
        self.scores.append(score)
