from django.shortcuts import render


def store(request):
    context = {}
    return render(request, 'store1/store.html', context)
    
def cart(request):
    context = {}
    return render(request, 'store1/cart.html', context)

def checkout(request):
    context = {}
    return render(request, 'store1/checkout.html', context)
