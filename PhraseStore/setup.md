https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#specifying-a-location-for-an-environment

    conda update -n base -c defaults conda

configure channels for conda forge: for djangorestframework

    conda config --add channels conda-forge

create environment within inside workspace folder

    conda create --prefix ./envs django pandas djangorestframework 

    django-admin startproject pStore .
    django-admin startapp api