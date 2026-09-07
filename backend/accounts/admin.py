from django.contrib import admin
from .models import UserProfile

admin.site.register(UserProfile)






# from django.contrib import admin
# from .models import UserProfile


# @admin.register(UserProfile)
# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ("user", "phone", "city", "preferred_language")