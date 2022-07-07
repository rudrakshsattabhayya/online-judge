from dataclasses import field
from rest_framework import serializers
from .models import Problem, Tag, User, UserSubmission, User, CodeFile, OutputFile


class TagsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class ShowProblemDescSerializers(serializers.ModelSerializer):
    tags = TagsSerializers(many=True)
    
    class Meta:
        model = Problem
        fields = '__all__'

class ListProblemsSerializers(serializers.ModelSerializer):
    tags = TagsSerializers(many=True)

    class Meta:
        model = Problem
        exclude = ['problem_desc', 'test_cases']

class ProblemNameSerializers(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model: Problem

class UserSubmissionSerializers(serializers.ModelSerializer):
    problem = ProblemNameSerializers(many=True) 
    class Meta:
        model: UserSubmission
        fields = ["problem"]

class UserSerializers(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'