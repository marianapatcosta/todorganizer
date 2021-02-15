from django.shortcuts import render
from rest_framework import viewsets, filters, generics, status
from rest_framework.decorators import action  
from rest_framework.response import Response  
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated, DjangoModelPermissions   
from .serializers import TodoSerializer, UsersSerializer     
from .models import Todo
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

class CreateListMixin:
  # Allows creation in bulk, by overriding get_serialize method, checking if body is a list 
  def get_serializer(self, *args, **kwargs):
      if isinstance(kwargs.get('data', {}), list):
          kwargs['many'] = True
      return super().get_serializer(*args, **kwargs)

class Priorities:
  types = {
    "low": 1,
    "medium": 2,
    "high": 3
  }

class Statuses: 
  types = {
    "backlog": 1,
    "ready to do": 2,
    "on going": 3,
    "review": 4,
    "closed": 5
  }

class TodoView(CreateListMixin, viewsets.ModelViewSet):  
  # to customize permissions according to view
  permission_classes = (IsAuthenticated, )
  serializer_class = TodoSerializer         
  queryset = Todo.objects.all() 

  # to get 'ordering' filter from query parameters
  filter_backends = [filters.OrderingFilter, filters.SearchFilter]
  ''' ordering_fields = ['title', 'description', 'priority', 'status', 'is_completed'] '''
  search_fields = ['title', 'description']
  
  #queryset.update(priority=Priorities.types[F("priority")])

  ''' def get_queryset(self):
    todos =  Todo.objects.all()
    for todo in todos:
      todo.priority = "hello"
    return todos
 '''

  def get_queryset(self):
    return Todo.objects.filter(owner=self.request.user.id)

  def perform_create(self, serializer):
    if type(serializer.validated_data) == list:
        for item in serializer.validated_data:
            item.update({'priority': Priorities.types[item['priority']]})
            item.update({'status': Statuses.types[item['status']]})
            item.update({'owner': self.request.user})
        serializer.save()
    else:
      serializer.save(owner = self.request.user, priority = Priorities.types[serializer.validated_data['priority']], status = Statuses.types[serializer.validated_data['status']])

  def perform_update(self, serializer):
    serializer.save(priority = Priorities.types[serializer.validated_data['priority']], status = Statuses.types[serializer.validated_data['status']])

# delete all ToDos
  @action(methods=['delete'], detail=False)
  def delete(self, request):
      Todo.objects.all().delete()
      return Response()          

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = (AllowAny, )
    
    def create(self, request, *args, **kwargs):
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      self.perform_create(serializer)
      headers = self.get_success_headers(serializer.data)
      token, created = Token.objects.get_or_create(user=serializer.instance)
      return Response({'token': token.key, 'user_id': serializer.instance.pk, 'username': serializer.instance.username}, 
      status=status.HTTP_201_CREATED)

class CustomAuthToken(ObtainAuthToken):
  permission_classes = (AllowAny, )

  def post(self, request, *args, **kwargs):
    serializer = self.serializer_class(data=request.data, context={'request': request})
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, created = Token.objects.get_or_create(user=user)
    return Response({
        'token': token.key,
        'user_id': user.pk,
        'username': user.username
    })