from django.urls import path
from .views import index
from . import views

app_name = 'dappsconnect'
urlpatterns = [
    path('',  views.index, name="index")
]
