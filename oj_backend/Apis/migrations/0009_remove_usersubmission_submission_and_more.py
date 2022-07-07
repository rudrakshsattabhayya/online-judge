# Generated by Django 4.0.5 on 2022-07-07 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Apis', '0008_alter_usersubmission_submission'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usersubmission',
            name='submission',
        ),
        migrations.AddField(
            model_name='usersubmission',
            name='submission',
            field=models.ManyToManyField(null=True, related_name='user', to='Apis.codefile'),
        ),
    ]
