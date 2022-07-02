from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .serializers import ListProblemsSerializers, TagsSerializers, ShowProblemDescSerializers
from .models import Problem, Tag

# Create your views here.

def consist(a, b):
    a_set = set(a)
    b_set = set(b)

    if (a_set & b_set == a_set):
        return True
    else:
        return False



class ListProblemsView(APIView):
    def get(self, request):
        filter_tags = request.query_params["tags"].split(",")
        fupperlim = request.query_params["uplim"]
        flowerlim = request.query_params["lowlim"]
        all_probs = Problem.objects.all()
        temp = all_probs.filter(difficulty__lte=fupperlim, difficulty__gte=flowerlim)
        filtered_probs = []
        for prob in temp:
            tags = prob.tags.all()
            size = tags.count()
            tagslist = [tag.tag_name for tag in tags]
            if consist(filter_tags, tagslist):
                filtered_probs.append(prob)
                
        ser_data = ListProblemsSerializers(filtered_probs, many=True)
        return JsonResponse({"response": ser_data.data, "status": status.HTTP_200_OK})

    def post(self, request):
        pass


class ShowProblemView(APIView):
    def get(self, request):
        qid = request.query_params["id"]
        problem = Problem.objects.filter(id=qid)
        if(not problem):
            return JsonResponse({"status":status.HTTP_404_NOT_FOUND})
        
        ser_data = ShowProblemDescSerializers(problem[0])
        return JsonResponse({"response": ser_data.data})

    def post(self, request):
        pass


class ListTagsView(APIView):
    def get(self, request):
        available_tags = Tag.objects.all()
        ser_data = TagsSerializers(available_tags, many=True)
        return JsonResponse({"response": ser_data.data, "status": status.HTTP_200_OK})


