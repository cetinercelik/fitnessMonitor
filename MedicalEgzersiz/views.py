from datetime import datetime

from django.contrib.auth.decorators import login_required
from django.db.models import Count
from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.
from registration.models import Corporate, Trainer, Personal
from registration.views import user_checking
from settings.models import homemodel, ImagePost, About, FitnessMonitor, Founder, Philosophy, Corporate_solve, Pricing, \
    Sub_Pricing, Blog, Team, SocialMedia


@login_required
def home(request):
    user = request.user
    user_control_data = user_checking(user.id)
    if user_control_data['corporate_c']:
        return redirect(to='corporate-home')
    elif user_control_data['trainer_c']:
        return redirect(to='trainer-home')
    else:
        return redirect(to='personal-home')


def homepage(request):
    template = 'home/homepages/index.html'
    corporate_data=Corporate.objects.all()
    trainer_data=Trainer.objects.all()
    personal_data=Personal.objects.all()
    home_data = homemodel.objects.all()
    about_data = About.objects.all()
    images_data = ImagePost.objects.all()
    fitnessmonitor_data = FitnessMonitor.objects.all()
    founder_data = Founder.objects.all()
    philosophy_data = Philosophy.objects.all()
    corporate_data = Corporate_solve.objects.all()
    pricing_data = Pricing.objects.all()
    sub_pricings = Sub_Pricing.objects.all()
    blog_ids=[blog_id.id for blog_id in Blog.objects.all()]
    blog_data = Blog.objects.all().order_by('-id')
    team_data = Team.objects.all()
    social_data = SocialMedia.objects.all()
    context = {
        'corporates_number':corporate_data.count(),
        'trainers':trainer_data.count(),
        'personals':personal_data.count(),
        'homes': home_data,
        'abouts': about_data,
        'sliders': images_data,
        'fitnessMonitors': fitnessmonitor_data,
        'founders': founder_data,
        'philosophys': philosophy_data,
        'corporates': corporate_data,
        'pricings': pricing_data,
        'subPricings': sub_pricings,
        'blogs': blog_data,
        'teams': team_data,
        'socials': social_data,
    }
    return render(request=request, template_name=template, context=context)
