from rest_framework import viewsets
from .models import Proyecto
from .serializers import ProyectoSerializer
from django.shortcuts import render


class ProyectoViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gestionar los proyectos.
    Permite las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
    """
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer


def inicio(request):
    return render(request, 'portfolio/inicio.html')