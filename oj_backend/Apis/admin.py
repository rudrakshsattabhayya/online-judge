from django.contrib import admin
from .models import Problem, Tag, TestCase, ProblemDescription, User, UserSubmission
# Register your models here.

admin.site.register(Problem)
admin.site.register(Tag)
admin.site.register(TestCase)
admin.site.register(ProblemDescription)
admin.site.register(User)
admin.site.register(UserSubmission)