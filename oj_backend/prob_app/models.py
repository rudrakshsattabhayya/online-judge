from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Tag(models.Model):
    tag_name = models.CharField(max_length=40)

    def __str__(self):
        return self.tag_name


class ProblemDescription(models.Model):
    prob_statment = models.CharField(max_length=1000)
    prob_solution = models.CharField(max_length=10000)

    def __str__(self):
        return self.prob_statment[:40]+"..."


class TestCase(models.Model):
    inputs = models.TextField(max_length=1000)
    outputs = models.TextField(max_length=1000)

    def __str__(self):
        return self.inputs

class Problem(models.Model):
    prob_name = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=10)
    accepted_submissions = models.IntegerField(default=0)
    totalsubmissions = models.IntegerField(default=0)
    # tags = models.ForeignKey(Tag, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.prob_name
    
    class Meta:
        verbose_name_plural = "Problems"

