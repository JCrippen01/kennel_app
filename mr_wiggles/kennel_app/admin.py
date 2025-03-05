from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    # Display role in the admin list view
    list_display = ("username", "email", "first_name", "last_name", "role", "is_staff")
    # You can also customize the fieldsets for editing if needed.
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("role",)}),)


admin.site.register(CustomUser, CustomUserAdmin)
