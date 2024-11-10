from django.urls import path, include
from rest_framework import routers
from .views import BlogViewSet, inicio

# Configuración del router para la API de blogs
router = routers.DefaultRouter()
router.register(r'blogs', BlogViewSet)  # Registro de la API de blogs

urlpatterns = [
    path('', inicio, name='inicio'),  # Ruta principal
    path('api/', include(router.urls)),  # Incluye todas las rutas de la API registradas en el router
]
