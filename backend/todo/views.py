from django.shortcuts import render
from rest_framework import viewsets, filters  
from rest_framework.decorators import action  
from rest_framework.response import Response      
from .serializers import TodoSerializer      
from .models import Todo 
from django.db.models import F

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
  def perform_create(self, serializer):
    if type(serializer.validated_data) == list:
        for item in serializer.validated_data:
            item.update({'priority': Priorities.types[item['priority']]})
            item.update({'status': Statuses.types[item['status']]})
        serializer.save()
    else:
      serializer.save(priority = Priorities.types[serializer.validated_data['priority']], status = Statuses.types[serializer.validated_data['status']])

  def perform_update(self, serializer):
    serializer.save(priority = Priorities.types[serializer.validated_data['priority']], status = Statuses.types[serializer.validated_data['status']])

# delete all ToDos
  @action(methods=['delete'], detail=False)
  def delete(self, request):
      Todo.objects.all().delete()
      return Response()          