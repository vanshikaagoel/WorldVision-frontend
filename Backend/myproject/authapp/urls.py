from django.urls import path
from .views import  signup_view,protected_view  # Import both views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('signup/', signup_view),
     path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT Login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
    path('protected/', protected_view),
]
