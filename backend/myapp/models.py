from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    pass

class Movies(models.Model):
    name = models.CharField(max_length=200)