from django.urls import path, include
from rest_framework import routers
from .views import ProyectoViewSet, inicio

router = routers.DefaultRouter()
router.register(r'proyectos', ProyectoViewSet)

urlpatterns = [
    path('', inicio, name='inicio'),
    path('api/', include(router.urls)),
]
