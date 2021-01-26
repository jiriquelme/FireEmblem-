from django.shortcuts import render

# Create your views here.
def lista_publicaciones(request):
    return render(request, 'blog/lista_publicaciones.html', {})
