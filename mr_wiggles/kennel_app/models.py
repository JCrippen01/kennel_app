from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    # Add any additional fields if needed
    pass


# Register the new user model
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

admin.site.register(get_user_model(), UserAdmin)
