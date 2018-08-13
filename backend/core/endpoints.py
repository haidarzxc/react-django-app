from django.conf.urls import include, url

from .api import LoginAPI, UserAPI,LogoutAPI

urlpatterns = [
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^auth/logout/$", LogoutAPI.as_view()),
]
