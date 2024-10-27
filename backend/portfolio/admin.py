from django.contrib import admin
from .models import Proyecto

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'descripcion', 'enlace')
    search_fields = ('titulo', 'descripcion')
