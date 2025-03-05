"""
URL configuration for mr_wiggles project.
"""

from django.contrib import admin
from django.urls import path
from kennel_app.views import (
    hello_world,
)  # Adjust "your_app" to the actual app name where hello_world is defined
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("hello/", hello_world),
    path("auth/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
