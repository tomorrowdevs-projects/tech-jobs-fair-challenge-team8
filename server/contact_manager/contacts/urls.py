from django.urls import path
from .views import ContactListCreateAPIView, ContactRetrieveUpdateAPIView

urlpatterns = [
    path('contacts/', ContactListCreateAPIView.as_view(), name='contact-list'),
    path('contacts/<int:pk>/', ContactRetrieveUpdateAPIView.as_view(), name='contact-detail'),
]
