from enum import Enum
from django.db import models

class PriorityTypes(Enum):
  LOW = "low"
  MEDIUM = "medium"
  HIGH = "high"
  
  @classmethod
  def choices(classObj):
    return [(key.value, key.name) for key in classObj]

class StatusTypes(Enum):
  BACKLOG = "backlog"
  READY_TO_DO = "ready to do"
  ON_GOING = "on going"
  REVIEW = "review"
  CLOSED = "closed"
  
  @classmethod
  def choices(classObj):
    return [(key.value, key.name) for key in classObj]

# Create your models here.
class Todo(models.Model):
  title = models.CharField(max_length=120, blank=False, default='')
  description = models.TextField(max_length=1500, blank=False, default='')
  priority = models.CharField(max_length=120, choices=PriorityTypes.choices(), default=PriorityTypes.LOW)
  status = models.CharField(max_length=120, choices=StatusTypes.choices(), default=StatusTypes.BACKLOG)
  is_completed = models.BooleanField(default=False)

def _str_(self):
  return self.title