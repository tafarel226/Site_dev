from django.shortcuts import render, redirect
from .forms import ProduitForm, SignInForm, SignUpForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required





# @login_required
def index(request):
    return render(request,'index.html')


def sign_in(request):
    if request.method == 'POST':
        form = SignInForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('')  # Rediriger vers la page d'accueil après la connexion
            else:
                form.add_error(None, 'Identifiant ou mot de passe incorrect.')
    else:
        form = SignInForm()
    return render(request, 'auth/sign_in.html', {'form': form})




def sign_up(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username=username, password=password)
            login(request, user)
            return redirect('home')  # Rediriger vers la page d'accueil après l'inscription
    else:
        form = SignUpForm()
    return render(request, 'auth/sign_up.html', {'form': form})

@login_required
def liste_produits(request):
    
    if request.user.is_authenticated:
        print("L'utilisateur est connecté:", request.user.username)
    else:
        print("L'utilisateur n'est pas connecté")
    return render(request,'produits/liste_produits.html')

def ajouter_produit(request):
    
    if request.method=='POST':
        form = ProduitForm(request.POST)
        if form.is_valid():
            form.save()
    else :
        form = ProduitForm()     
        
    return render(request,'produits/ajouter_produit.html',{'form':form})




def modifier_produit(request):
    return render(request,'produits/liste_produits.html')

def supprimer_produit(request):
    return render(request,'produits/liste_produits.html')

def index_achat(request):
    return render(request,'achat/index_achat.html')

def commandes_achat(request):
    return render(request,'achat/commandes_achat.html')


def fournisseurs(request):
    return render(request,'fournisseurs/index.html')
