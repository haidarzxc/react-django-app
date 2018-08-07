from rest_framework import viewsets, permissions, generics
from .serializers import (LoginUserSerializer,UserSerializer)
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth.models import User
from rest_framework import status

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        print("----------------> ",self.request.user)
        return self.request.user



class LogoutAPI(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        user=User.objects.get(username=request.user)
        AuthToken.objects.filter(user=user).delete()
        return Response(status=status.HTTP_200_OK)
