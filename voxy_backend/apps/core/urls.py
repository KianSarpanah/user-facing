
from django.urls import path
from .resources.content_view import WordCountView


urlpatterns = [
    path('word_count/', WordCountView.as_view(), name="word_count"),
]