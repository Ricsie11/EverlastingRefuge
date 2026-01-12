from rest_framework import serializers
from .models import CustomUser, Group, HouseFellowship


# ============================
# USER REGISTRATION SERIALIZER
# ============================
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "email", "phone_number", "group"]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class HouseFellowshipSerializers(serializers.ModelSerializer):
    class Meta:
        model = HouseFellowship
        fields = '__all__'