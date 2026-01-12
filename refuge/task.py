from celery import shared_task
from .models import Group, AttendanceQR
from datetime import date


@shared_task
def generate_weekly_qr_codes():
    today = date.today()
    for group in Group.objects.all():
        if not AttendanceQR.objects.filter(group=group, created_at=today).exist():
            AttendanceQR.objects.create(group=group)