from celery import shared_task
from django.utils import timezone
from .models import Group, AttendanceQR
from datetime import timedelta
import uuid


@shared_task
def generate_weekly_qr_codes():
    """
    Automatically generates a QR code for each group.
    Intended to run every Sunday morning.
    """
    now = timezone.now()
    expires_at = now + timedelta(hours=8)

    for group in Group.objects.all():

        # Deactivate previous QRs
        AttendanceQR.objects.filter(
            group=group,
            is_active=True
        ).update(is_active=False)

        # Create new QR session
        AttendanceQR.objects.create(
            group=group,
            token=str(uuid.uuid4()),
            is_active=True,
            expires_at=expires_at
        )

    return "Weekly QR codes generated successfully"