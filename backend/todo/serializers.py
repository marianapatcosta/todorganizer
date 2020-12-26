from rest_framework import serializers
from .models import Todo

''' class Priorities:
  types = {
    1: "low",
    2: "medium",
    3: "high"
  }

class Statuses: 
  types = {
    "backlog": 1,
    "ready to do": 2,
    "on going": 3,
    "review": 4,
    "closed": 5
  } '''

class TodoSerializer(serializers.ModelSerializer):

  ''' priority = serializers.SerializerMethodField();
  status = serializers.SerializerMethodField(); '''

  class Meta:
    model = Todo
    fields = ('id', 'title', 'description', 'priority', 'status', 'is_completed')

  ''' def get_priority(self, obj):
    print(666, obj, obj.priority)
    if obj.priority == 1: 
        return "low"
    elif obj.priority == 2: 
        return "medium";
    elif obj.priority == 3:
        return "high"

  def get_status(self, obj):
    print(7777, obj.status)
    if obj.status == 1: 
        return "backlog"
    elif obj.status == 2: 
        return "ready to do";
    elif obj.status == 3:
        return "on going"
    elif obj.status == 4: 
        return "review";
    elif obj.status == 5:
        return "closed" '''
   
   
   

