# Generated by Django 3.2 on 2022-12-29 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dislikecount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dlcount', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='likecount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lcount', models.CharField(max_length=30)),
            ],
        ),
    ]
