from rest_framework import generics, status
from rest_framework.exceptions import PermissionDenied
from rest_framework import permissions

from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .serializers import *
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


class PollDetailView(generics.RetrieveUpdateAPIView):
    """
       get:
       Return single event instance.

       put:
       Update single event instance.
       """
    queryset = Poll.objects.all()
    serializer_class = PollRetrieveUpdateSerializer
    permission_classes = (permissions.IsAuthenticated, PollOwner,)


class MyPollListView(generics.ListAPIView):
    """
    Return list of created polls filtered by user
    """
    serializer_class = PollRetrieveUpdateSerializer
    permission_classes = (permissions.IsAuthenticated, PollOwner,)

    def get_queryset(self):
        return Poll.objects.filter(user=self.request.user)


@api_view(["POST"])
def notify_user(request, event_id):
    """
    Checking whether event exists or not, then notifying users
    """
    get_object_or_404(Event, pk=event_id)

    serializer = UserNotificationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    serializer.notify(event_id)

    return Response(
        {"message": "Members are successfully notified"},
        status=status.HTTP_200_OK
    )
