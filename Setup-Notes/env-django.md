some helpful tips:

    conda list: to see whats installed on a given env
    from conda3 prompt conda init bash
    

once bash is initialized with conda

    mkdir phraseApi
    conda create --name djangoApi python3.9 
    conda install django
    conda install -c conda-forge djangorestframework

creatre project in current folder phraseApi

    django-admin startproject pStore .
    * django-admin startapp api

may need to reload and open new terminal

    python manage.py runserver
 
i should be getting a url in the readout that when entered shows the 'The install worked sucessfully! Congradulations!' page

    http://127.0.0.1:8000/
    
ctrl+c

    python manage.py migrate

30. URL's
dcv
    touch urls.py in api file we created earlier, copy template from urls in phraseStore and name it to new

    import include

    add api link to phraseStore urls and include('api.urls)

register 'rest_framework' adn 'api' in settings.py 

copy the starter code from urls.py in phraseStore template

create superuser

    python3 manage.py createsuperuser

       error Manage App Execution Aliases.
i can search thease settings in my windows settings

        * looks like there is a conflict with a python and pythgon3 installer
        ? didnt work
        > lets change it to just python and call the same(without 3)
? he uses python3 in the course tho

    python manage.py createsuperuser

        josep
        sister91

it works! not sure if its because I used python or changed the execution settings. I think both

in api/urls.py

    from rest_framework import routers
    from django.conf.urls import include

31. Models

we can create oute models in model.py

the course will be building a list of movies, and a rateing for that movie. I will translate that to phrase and number of times used.

    class Phrase
        topic
        phrase

    class Usage
        phrase = models.ForeignKey(Phrase)
        user = models.ForeignKey(Phrase)

after we setup our modals 

    python manage.py makemigrations (works)
        python3 manage.py makemigrations (course)
*? i think by setting the execution aliace as on for pip3 and off for pip defaults it to 3 anyway.

    python manage.py migrate

now I have an admin file I can open to register models

? not sure if the class meta in models should be for usage or user, going with usage for now because that is a actual class instead of just a property like user    

    > trying user instead
    ? also didnt work, will stick with users for now tho

    >? maybe after restart
* deffinetly helped me migrate
    
*? looks like my problem may be in urls lesson
?ModuleNotFoundError: No module named 'router'

    > apparently thats because pandas needs to be installed in this environments

    > conda install pandas

Conda environment notes: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html


    # trying again with the environment in the project folder(sahould solve terminal issues)
https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#specifying-a-location-for-an-environment

    conda config --add channels conda-forge : for djangorestframework
        conda create --prefix ./envs django router djangorestframework 


mkdir phraseApi
    conda create --name djangoApi python3.9 
    conda install django
    conda install -c conda-forge djangorestframework
