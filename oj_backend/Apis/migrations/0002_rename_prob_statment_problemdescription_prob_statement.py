# Generated by Django 4.0.5 on 2022-07-02 16:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Apis', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='problemdescription',
            old_name='prob_statment',
            new_name='prob_statement',
        ),
    ]