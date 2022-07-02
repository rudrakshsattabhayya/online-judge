from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Tag(models.Model):
    tag_name = models.CharField(max_length=40, default="default")

    def __str__(self):
        return self.tag_name


class ProblemDescription(models.Model):
    prob_statment = models.TextField(max_length=1000, blank=True)
    prob_solution = models.TextField(max_length=10000, blank=True)

    def __str__(self):
        return self.prob_statment[:40]+"..."


class TestCase(models.Model):
    inputs = models.TextField(max_length=1000)
    outputs = models.TextField(max_length=1000)

    def __str__(self):
        return self.inputs

class Problem(models.Model):
    prob_name = models.CharField(max_length=100)
    difficulty = models.IntegerField(default=800)
    accepted_submissions = models.IntegerField(default=0)
    totalsubmissions = models.IntegerField(default=0)
    test_cases = models.OneToOneField(TestCase, on_delete=models.CASCADE, null=True)
    problem_desc = models.OneToOneField(ProblemDescription, on_delete=models.CASCADE, null=True)
    tags = models.ManyToManyField(Tag, related_name="tags", default="default")

    def __str__(self):
        return self.prob_name
    
    class Meta:
        verbose_name_plural = "Problems"

