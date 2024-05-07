from rest_framework.response import Response
from rest_framework.decorators import api_view
from myapp.models import Movies
from .serializers import *

@api_view(['GET'])
def get_data(request):
    movies =    Movies.objects.all()
    serialized_users = MovieSerializer(movies, many=True)
    return Response(serialized_users.data)

@api_view(['POST'])
def add_data(request):
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response()