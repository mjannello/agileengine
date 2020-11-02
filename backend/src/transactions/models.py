from django.db import models


class Transaction(models.Model):
    id = models.IntegerField(primary_key=True)
    amount = models.IntegerField()
    type = models.CharField(max_length=255)
    date = models.DateTimeField()



