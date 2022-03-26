from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from django.core.mail import send_mail, EmailMessage, BadHeaderError

def index(request):
    return "Hello world!!!"


# Create your views here.
@api_view(['POST'])
def say_hello(request):

    print("email")
    print(request.data)


    try:
        send_mail(
            'Subject here',
            request.data['subiect'],
            'drive.vasi@gmail.com',
            ['coroama.vasile1@gmail.com'],
            fail_silently=False,
        )
    except BadHeaderError:
        print("Bad")

    return JsonResponse("API_BASE_POINT", safe=False)


@api_view(['POST'])
def postRequest(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        print(serializer)
    return Response(serializer.data)

