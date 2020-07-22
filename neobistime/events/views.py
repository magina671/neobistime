from rest_framework import generics, status
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
from .serializers import *
from rest_framework import permissions
from .permissions import *


class PlaceListCreateView(generics.ListCreateAPIView):
    """
    get:
    Return list of place objects.

    post:
    Create new place instance.
    """
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = (permissions.IsAuthenticated,)


class EventListCreateView(generics.ListCreateAPIView):
    """
    get:
    Return a list of all existing events.

    post:
    Create a new event instance.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            return serializer.save(owner=self.request.user)
        else:
            raise PermissionDenied('Авторизуйтесь в системе для добавления ивентов!')


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    Return single event instance.

    put:
    Update single event instance.

    delete:
    Delete single event instance.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = (EventOwner,)


class PollCreateView(generics.CreateAPIView):
    """
    post:
    Create poll
    """
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            return serializer.save(user=self.request.user)
        else:
            raise PermissionDenied('Авторизуйтесь в системе для ответов на опросник!')
