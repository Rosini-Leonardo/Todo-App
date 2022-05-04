from django.shortcuts import redirect,render

# All endpoints depends on main.html, that's caused by 
# react-router-dom that manage all of them.

#------|
# Base |
#------|

def home(request):
    return render(request,'main.html')

def about(request):
    return render(request,'main.html')

#-------|
# Error |
#-------|

def custom_error_view(request, exception=None):
    return render(request, "errors/500.html", {})