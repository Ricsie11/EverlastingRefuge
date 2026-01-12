from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.conf import settings
import uuid
from django.utils import timezone


# Create your models here.
class CustomUser (AbstractUser):
    role = models.CharField(
        max_length=20,
        choices=[('USER', 'User'), ('ADMIN', 'Admin'), ('SUPERUSER', 'Superuser')],
        default='USER'
    )
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
    name = models.CharField(max_length=100)
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
    

class AttendanceQR(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    is_active = models.BooleanField(dafault=True)


    def is_valid(self):
        return self.is_active and timezone.now() <= self.expires_at
    
    def __str__(self):
        return f'QR for {self.group.name}'


class Attendance(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    qr_session = models.ForeignKey(AttendanceQR, on_delete=models.CASCADE)
    scanned_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = ("user", "qr_session")

    def __str__(self):
        return f"{self.user.email} - {self.scanned_at}"