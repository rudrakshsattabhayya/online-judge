from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse

class CmpFileView(APIView):
    def post(self, request):
        # print(request.data)
        f1 = open(request.data["outputfile"], "r")  
        f2 = open(request.data["useroutputfile"], "r")  
        ans = True
        i = 0
        test_case = 0

        file1 = f1.read().split("\n")
        file2 = f2.read().split("\n")
        lines1 = len(file1)
        lines2 = len(file2)
        lines = min(lines1, lines2)

        while i<lines:
            l1 = file1[i]
            l2 = file2[i]
            if l1 == l2 and l1[0:7] == "#Output":
                test_case = l1[7:]
            elif l1 != l2:
                ans = False
                break
            i+=1

        if lines1 != lines2:
            if lines1>lines2 and file1[lines][0:7] == "#Output":
                test_case = file1[lines][7:]
            elif lines1<lines2 and file2[lines][0:7] == "#Output":
                test_case = file2[lines][7:]

        f1.close()                                       
        f2.close() 

        if ans == True:
            return JsonResponse({"verdict": "Accepted"})
        else:
            return JsonResponse({"verdict": "Rejected", "wrong ans": test_case})