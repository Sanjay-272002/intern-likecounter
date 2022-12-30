from django.db import models

# Create your models here.

class lc(models.Model):
    idd=models.IntegerField()
    lcount=models.CharField(max_length=10)
class dlc(models.Model):
    idd=models.IntegerField()
    dlcount=models.CharField(max_length=20)

