# Generated by Django 4.0.5 on 2022-07-07 05:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Apis', '0003_outputfilefieldview_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CodeFileFieldView',
            new_name='CodeFile',
        ),
        migrations.RenameModel(
            old_name='OutputFileFieldView',
            new_name='OutputFile',
        ),
    ]
