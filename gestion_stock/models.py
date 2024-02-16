from django.db import models

# Create your models here.


class Produit(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    quantite_disponible = models.PositiveIntegerField(default=0)
    fournisseur = models.ForeignKey('Fournisseur', on_delete=models.SET_NULL, null=True, blank=True)
    categorie = models.ForeignKey('CategorieProduit', on_delete=models.SET_NULL, null=True, blank=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_mise_a_jour = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nom
    
# Create models produit.
    
class Fournisseur(models.Model):
    nom = models.CharField(max_length=100)
    adresse = models.TextField(blank=True)
    telephone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.nom
    

class CategorieProduit(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.nom
    

