from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .serializers import ListProblemsSerializers, TagsSerializers, ShowProblemDescSerializers, UserSerializers, UserSerializerForAuth
from .models import Problem, Tag, ProblemDescription, TestCase, User, CodeFile, OutputFile, UserSubmission
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import os, filecmp

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

    def post(self, request):
        pass


# User API's
class SignInView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        data = request.data
        name = data["name"]
        email = data["email"]
        picture = data["picture"]

        user = User.objects.filter(name=name, email=email).first()

        userStatus = "forHttpcode"
        if(not user):
            new_user = User(name=name, email=email, picture=picture)
            new_user.save()
            userStatus = status.HTTP_201_CREATED
        else:
            user.picture = picture
            user.save()
            userStatus = status.HTTP_200_OK

        return JsonResponse({"status":userStatus})

class SubmitProblemView(APIView):
    def get(self, request):
        pass
    
    def post(self, request):
        #Remember file name should be unique
        email = request.data["email"]
        codefile = request.FILES["cppfile"]
        submitTime = request.data["submitTime"]
        problemId = request.data["problemId"]

        codeFilequery = CodeFile(file=codefile, time=submitTime)
        codeFilequery.save()

        problem = Problem.objects.filter(id=problemId).first()

        commonpath = "C:/Users/rudra/Desktop/WebDevelopment/online-judge/oj_backend/Uploads/"
        codefilepath = str(codeFilequery.file)
        inputfilepath = str(problem.test_cases.inputs)
        outputfilepath = f"{commonpath}{str(problem.test_cases.outputs)}"
        
        x = codefilepath.split(".cpp")[0]
        x = x.split("submissions/")[1]

        useroutputpath = f"{commonpath}user_outputs/{x}.txt"
        
        os.system(f"g++ {commonpath}{codefilepath}")
        os.system(f"a.exe < {commonpath}{inputfilepath} > {useroutputpath}")

        verdict = "verdict"
        problem.totalsubmissions = problem.totalsubmissions + 1
        if(filecmp.cmp(outputfilepath, useroutputpath, shallow=False)):
            verdict = "Accepted"
            problem.accepted_submissions = problem.accepted_submissions+1
        else:
            verdict = "Rejected"

        problem.save()
        
        userSubmissionquery = UserSubmission()
        userSubmissionquery.save()
        userSubmissionquery.problem.add(problem)
        userSubmissionquery.submission.add(codeFilequery)
        userSubmissionquery.save()

        user = User.objects.filter(email=email).first()
        user.submissions.add(userSubmissionquery)
        user.save()

        ser_data = UserSerializers(user)

        return JsonResponse({"data": ser_data.data, "verdict": verdict})
        


class ChangeUserNameView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        #Remember no spaces
        new_user_name = request.data["new_user_name"]
        email = request.data["email"]
        user = User.objects.filter(email=email).first()
        user.username = new_user_name
        user.save()
        
        ser_data = UserSerializers(user)
        return JsonResponse({"data": ser_data.data})
        


#Admin API's

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

        tagslist = data["tags"].split(",")
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
        return JsonResponse({"QuestionId": problem.id})







class UserAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializerForAuth

    def get_object(self):
        return self.request.user