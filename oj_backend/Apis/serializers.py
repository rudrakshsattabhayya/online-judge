from rest_framework import serializers
from .models import Problem, Tag


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