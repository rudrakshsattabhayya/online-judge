from django.urls import path
from . import views
from . import cmp_file_view

urlpatterns = [
    path("list-problems", views.ListProblemsView.as_view()),
    path("show-problem", views.ShowProblemView.as_view()),
    path("list-tags", views.ListTagsView.as_view()),

    #User API's
    path('sign-in', views.SignInView.as_view()),
    path('submit-problem',views.SubmitProblemView.as_view()),

    #Admin API's
    path('create-problem', views.CreateProblemView.as_view()),

    #Docker API's
    path('get-verdict', cmp_file_view.CmpFileView.as_view()),
]