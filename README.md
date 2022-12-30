# intern-likecounter
- Install python and django 
- For database i have used models and it can be viewed in Django-admin.
## Follow the commands to run the website
- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver
##Database
- If you want see the data stored in django-admin
- create superuser using command python managa.py createsuperuser
- Then using url http://127.0.0.1:8000/admin go to admin and see the data

### About the website
 - It is a like and dislike counter app.
 - I have used models to send data to database. we can view it in django-admin.
 - I have used Ajax to Post and Get data from django views to js file .By this without refreshing the counter value will change.
