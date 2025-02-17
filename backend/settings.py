import os
import mongoengine
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from the .env file in the project root (BL-sptrainer)
load_dotenv(BASE_DIR := Path(__file__).resolve().parent.parent)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "your-default-secret-key")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv("DEBUG", "True") == "True"

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Application definition
INSTALLED_APPS = [
    # Your local apps (use valid Python module names, avoid hyphens)
    'api',  # our API app
    # Django built-in apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third-party apps
    'rest_framework',
    'rest_framework_mongoengine'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # Look for templates in a "templates" folder at the project root (BL-sptrainer/templates)
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Since we're not using Django's ORM (only MongoEngine), we set a dummy database.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.dummy'
    }
}

# -----------------------------
# MongoEngine Configuration
# -----------------------------
# Environment variables from .env:
#   MONGODB_KEY_HDARJI, MONGODB_HOSTNAME, MONGODB_USERNAME, and optionally MONGODB_DB
# settings.py (modified)
import os
from pymongo import MongoClient
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# MongoDB Configuration
MONGO_CONFIG = {
    'host': os.getenv('MONGODB_HOSTNAME'),
    'username': os.getenv('MONGODB_USERNAME'),
    'password': os.getenv('MONGODB_KEY_HDARJI'),
    'authSource': 'admin',
    'authMechanism': 'SCRAM-SHA-256',
    'tls': True,
    'tlsAllowInvalidCertificates': True  # Remove in production
}

# Create MongoDB connection
try:
    client = MongoClient(
        f"mongodb+srv://{MONGO_CONFIG['username']}:{MONGO_CONFIG['password']}@{MONGO_CONFIG['host']}/?retryWrites=true&w=majority",
        tls=MONGO_CONFIG['tls'],
        tlsAllowInvalidCertificates=MONGO_CONFIG['tlsAllowInvalidCertificates']
    )
    db = client[os.getenv('MONGODB_DB', 'suicide-prevention-app')]
    print("Successfully connected to MongoDB!")
except Exception as e:
    print(f"MongoDB connection error: {str(e)}")
    raise

# Remove MongoEngine and dummy database config



# -----------------------------
# Password validation
# -----------------------------
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# -----------------------------
# Internationalization
# -----------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = os.getenv("TIME_ZONE", "UTC")
USE_I18N = True
USE_TZ = True

# -----------------------------
# Static files (CSS, JavaScript, Images)
# -----------------------------
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
