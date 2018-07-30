from django.conf.urls import include, url

from .api import LoginAPI

urlpatterns = [
    url("^auth/login/$", LoginAPI.as_view()),
]
