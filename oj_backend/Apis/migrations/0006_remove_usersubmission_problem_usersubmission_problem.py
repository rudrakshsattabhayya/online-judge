# Generated by Django 4.0.5 on 2022-07-07 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Apis', '0005_codefile_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usersubmission',
            name='problem',
        ),
        migrations.AddField(
            model_name='usersubmission',
            name='problem',
            field=models.ManyToManyField(null=True, to='Apis.problem'),
        ),
    ]
