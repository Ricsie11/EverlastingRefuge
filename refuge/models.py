from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.conf import settings

# Create your models here.
class CustomUser (AbstractUser):
    phone_number = PhoneNumberField(blank=True)
    email = models.EmailField(unique=True, blank=False)
    group = models.ForeignKey(
        'Group',
        on_delete = models.SET_NULL,
        null=True,
        blank=True,
        related_name="members"
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["username"]


    def __str__(self):
        return self.username
    

class Group(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.SET_NULL,
        null = True,
        related_name = 'groups_created'
    )
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name


class HouseFellowship(models.Model):
    fellowship_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    fellowship_leader_name = models.CharField(max_length=200)
    leader_contact = PhoneNumberField(blank=False)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete= models.SET_NULL,
        null = True,
        related_name = "house_fellowship_centers"
    )
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.fellowship_name + "at" + self.location