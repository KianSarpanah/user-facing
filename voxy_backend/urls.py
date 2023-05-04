
from django.contrib import admin
from django.urls import path, include, re_path
from voxy_backend.apps.core import urls as core_urls
from django.views.generic import TemplateView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/core/", include(core_urls)),
    re_path(r"^.*$", TemplateView.as_view(template_name="base.html")),
]
