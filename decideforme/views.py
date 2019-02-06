from django.views.generic import TemplateView
from .serializers import AnswerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Answer

import random


class HomeView(TemplateView):
    template_name = 'base.html'


class AnswerAPIView(APIView):
    def get(self, request):
        total = Answer.objects.count()

        # Randomly get a response from the table
        r = random.randint(1, total)

        response = {
            'answer': Answer.objects.get(pk=r).answer,
            'errors': "",
        }

        return Response(response, status=status.HTTP_200_OK)

    def post(self, request, format='application/json'):
        data = request.data["data"]
        response = {
            "error": ""
        }

        if type(data) == list:
            for x in data:
                Answer.objects.create(answer=x)

            response["total_loaded"] = len(data)

            return Response(response, status=status.HTTP_201_CREATED)

        response["error"] = "No suitable format found for loading"

        return Response(response, status=status.HTTP_400_BAD_REQUEST)
