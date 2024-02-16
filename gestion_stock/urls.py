# Dans apps/gestion_stock/urls.py

from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
        
    path('sign-up',views.sign_up,name='sign-up'),
    path('sign-in',views.sign_in,name='sign-in'),
    
    path('produits/', views.liste_produits, name='liste_produits'),
    path('produits/ajouter/', views.ajouter_produit, name='ajouter_produit'),
    path('produits/modifier/<int:produit_id>/', views.modifier_produit, name='modifier_produit'),
    path('produits/supprimer/<int:produit_id>/', views.supprimer_produit, name='supprimer_produit'),
    
    path('achat/', views.index_achat, name='index_achat'),
    path('commandes_achat/', views.commandes_achat, name='commandes_achat'),

    path('fournisseurs/',views.fournisseurs,name="fournisseurs"),
    
    path('accounts/login/',views.sign_in,name="login")
    
]
