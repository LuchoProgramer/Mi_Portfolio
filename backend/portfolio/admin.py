from django.contrib import admin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'fecha_publicacion', 'autor')
    search_fields = ('titulo', 'contenido', 'categorias')
