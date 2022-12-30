from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import JsonResponse
import json
from .models import *
# Create your views here.
def home(request):
    return render(request,"index.html")
# def count(request):

#     result = request.GET.get('lcount', None)
#     data = {
#             "success"
#     }
#     return JsonResponse(data)

def count(request):

    data_from_post = json.load(request)['post_data'] #Get data from POST request
    print(data_from_post)
    idd="1"
    if lc.objects.filter(idd=idd).exists():
        muser=lc.objects.get(idd=idd)
        muser.lcount=data_from_post
        muser.save()
    else:
        muser=lc(idd=idd,lcount=data_from_post)
        muser.save()
    
    data = {
            'my_data':data_from_post,
        }
    return JsonResponse(data)

def dcount(request):

    data_from_post = json.load(request)['post_data'] #Get data from POST request
    print(data_from_post)
    idd="1"
    if dlc.objects.filter(idd=idd).exists():
        muser=dlc.objects.get(idd=idd)
        muser.dlcount=data_from_post
        muser.save()
    else:
        muser=dlc(idd=idd,dlcount=data_from_post)
        muser.save()
    
    data = {
            'my_data':data_from_post,
        }
    return JsonResponse(data)

def lgcount(request):
    idd="1"
    if lc.objects.filter(idd=idd).exists():
        muser=lc.objects.get(idd=idd)
        dataa=muser.lcount
        print(dataa)
    else:
       dataa="0"
    data = {
            'my_data':dataa
    }
    return JsonResponse(data)

def dgcount(request):
    idd="1"
    if dlc.objects.filter(idd=idd).exists():
        muser=dlc.objects.get(idd=idd)
        dataa=muser.dlcount

    else:
       dataa="0"
    data = {
            'my_data':dataa
    }
    return JsonResponse(data)