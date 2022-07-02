from django.contrib import admin
from .models import Problem, Tag, TestCase, ProblemDescription
# Register your models here.

admin.site.register(Problem)
admin.site.register(Tag)
admin.site.register(TestCase)
admin.site.register(ProblemDescription)