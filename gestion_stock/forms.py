from django import forms
from .models import Produit

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class ProduitForm(forms.ModelForm):
    class Meta:
        model = Produit
        fields = ['nom', 'description', 'prix', 'quantite_disponible', 'fournisseur', 'categorie']
        widgets = {
            'nom': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'prix': forms.NumberInput(attrs={'class': 'form-control'}),
            'quantite_disponible': forms.NumberInput(attrs={'class': 'form-control'}),
            'fournisseur': forms.Select(attrs={'class': 'form-control'}),
            'categorie': forms.Select(attrs={'class': 'form-control'}),
        }



class SignInForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)

class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']