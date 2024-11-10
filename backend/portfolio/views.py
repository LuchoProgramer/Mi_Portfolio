from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer
from django.shortcuts import render

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-fecha_publicacion')
    serializer_class = BlogSerializer



def inicio(request):
    return render(request, 'portfolio/inicio.html')