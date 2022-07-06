from django.urls import path
from . import views

urlpatterns = [
    path("list-problems", views.ListProblemsView.as_view()),
    path("show-problem", views.ShowProblemView.as_view()),
    path("list-tags", views.ListTagsView.as_view()),
    path('create-problem', views.CreateProblemView.as_view()),
    path('sign-in', views.SignInView.as_view()),
]