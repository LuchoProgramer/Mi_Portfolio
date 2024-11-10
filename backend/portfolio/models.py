from django.db import models

class Blog(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    fecha_publicacion = models.DateField(auto_now_add=True)
    autor = models.CharField(max_length=100, default="Luis Viteri")  # Puedes modificar el valor predeterminado
    imagen = models.ImageField(upload_to='blogs/', blank=True, null=True)  # Imagen opcional para el blog
    categorias = models.CharField(max_length=200, blank=True)  # Categorías separadas por comas

    def __str__(self):
        return self.titulo
