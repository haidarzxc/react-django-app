from django.conf.urls import include, url

from .api import LoginAPI, UserAPI

urlpatterns = [
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
]
