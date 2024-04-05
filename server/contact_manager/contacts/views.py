from rest_framework import generics
from .models import Contact, ContactInfo
from .serializers import ContactSerializer
from .filters import ContactSearchFilterBackend


class ContactListCreateAPIView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_class = ContactSearchFilterBackend

class ContactRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

