from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_data, name="api"),
    path('add', views.add_data, name="add_data")
]