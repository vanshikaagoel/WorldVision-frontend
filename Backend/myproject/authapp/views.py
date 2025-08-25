from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
from django.contrib.auth.models import User
import json
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from .utils import create_jwt, verify_jwt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

        username = data.get('username') 
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Username and password required'}, status=400)

        user = authenticate(username=username, password=password)

    if user is not None:
        token = create_jwt(user.id)
        return JsonResponse({
            'message': 'Login successful',
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'token': token
        })
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid request'}, status=400)   


@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        if not username or not password or not email:
            return JsonResponse({'error': 'Username, password, and email are required'}, status=400)

        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({'error': 'Invalid email address'}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already in use'}, status=400)

        
        user = User.objects.create_user(username=username, password=password, email=email)

        return JsonResponse({
            'message': 'User created successfully',
            'username': user.username,
            'email': user.email
        })

    return JsonResponse({'error': 'Invalid request'}, status=400)


@require_GET  # Only allow GET requests
def protected_view(request):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return JsonResponse({'error': 'Authorization header missing or invalid'}, status=401)

    token = auth_header.split(' ')[1]

    payload = verify_jwt(token)
    if not payload:
        return JsonResponse({'error': 'Invalid or expired token'}, status=401)

    return JsonResponse({'message': f'Hello User {payload.get("id")}, this is a protected route!'})
