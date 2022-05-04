from django.urls import path,include,re_path
from .views import (
    home,
    about,
    custom_error_view
)

#Main
urlpatterns = [
    path('',home,name='home'),
    path('about/',about,name='about'),
    re_path(r'^$',custom_error_view,name='500'),
]