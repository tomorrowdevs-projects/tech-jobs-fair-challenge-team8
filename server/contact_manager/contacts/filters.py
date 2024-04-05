from django.db.models import Q
from rest_framework import filters


class ContactSearchFilterBackend(filters.BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        search_query = request.query_params.get('search')

        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) |
                Q(surname__icontains=search_query) |
                Q(company__icontains=search_query) |
                Q(job_position__icontains=search_query) |
                Q(address__icontains=search_query) |
                Q(city__icontains=search_query) |
                Q(zip_code__icontains=search_query) |
                Q(country__icontains=search_query)
            )

        return queryset
