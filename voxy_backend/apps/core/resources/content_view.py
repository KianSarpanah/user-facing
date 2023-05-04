from django.shortcuts import render
import logging

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.settings import api_settings

# Logger
logger = logging.getLogger(__name__)


class WordCountView(APIView):
    permission_classes = api_settings.DEFAULT_PERMISSION_CLASSES

    def post(self, request, format=None):
        text = request.data.get('text')
        word_count = len(text.split())
        return Response({'word_count': word_count})