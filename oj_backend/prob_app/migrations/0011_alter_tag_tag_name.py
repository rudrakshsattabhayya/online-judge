# Generated by Django 4.0.5 on 2022-07-02 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prob_app', '0010_alter_problem_difficulty_alter_problem_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='tag_name',
            field=models.CharField(default='default', max_length=40),
        ),
    ]