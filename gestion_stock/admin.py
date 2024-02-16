from django.contrib import admin
from .models import Produit, Fournisseur, CategorieProduit

admin.site.register(Produit)
admin.site.register(Fournisseur)
admin.site.register(CategorieProduit)
