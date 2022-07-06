from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .serializers import ListProblemsSerializers, TagsSerializers, ShowProblemDescSerializers, UserSerializers
from .models import Problem, Tag, ProblemDescription, TestCase, User

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

    def post(self, request):
        pass


class CreateProblemView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        data = request.data

        prob_desc = ProblemDescription(prob_statement=data["prob_statement"], prob_solution=data["prob_solution"])
        prob_desc.save()
        test_case = TestCase(inputs=data["input"], outputs=data["output"])
        test_case.save()

        problem = Problem(prob_name=data["prob_name"], difficulty=data["difficulty"], accepted_submissions=data["accepted_submissions"], totalsubmissions=data["total_submissions"])
        problem.save()
        problem.prob_desc = prob_desc
        problem.test_case = test_case

        tagslist = data["tags"]
        tags_queryset = Tag.objects.all()
        for tag in tagslist:
            x = tags_queryset.filter(tag_name=tag)
            y=x
            if(not x):
                y = Tag(tag_name=tag)
                y.save()
            else:
                y=x[0]
            
            problem.tags.add(y)

        problem.save()
        return JsonResponse({"status": status.HTTP_201_CREATED, "QuestionId": problem.id})


class SignInView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        data = request.data
        name = data["name"]
        email = data["email"]
        picture = data["picture"]

        user = User.objects.filter(name=name, email=email)
        
        if(not user):
            new_user = User(name=name, email=email, picture=picture)
            new_user.save()
            return JsonResponse({"user": "created","name": name, "email": email, "picture": picture})
        else:
            return JsonResponse({"user": "found","name": name, "email": email, "picture": picture})

