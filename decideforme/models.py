from django.db import models
from django.utils import timezone


class Answer(models.Model):
    answer = models.CharField("answer", max_length=250)
    date_entered = models.DateField(default=timezone.now, editable=False)

    def __str__(self):
        return self.pk
