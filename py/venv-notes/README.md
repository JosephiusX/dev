# learned thgat i dont need a virtual environment at all to use conda in vs code

# just needed to set the paths for python and conda in my vscode user python path settings

import matplotlib.pyplot as plt

x=[24,25,26] y=[23,24,25]

plt.plot(x,y) plt.show()

? does the py file need to be created out side of the environment

1. folder 'project'
2. in project touch main.py
3. place test code and insure modules arent globally installed
4. in powershell: python -m venv C:\Users\gramk\OneDrive\Desktop\project\venv # looks like it dosent matter where this is run as it specifies the path ? maybe a problem because python instead of conda

-  nope
-  I noticed conda base was active when restarting powershell I deactiveated it for now

5. select option to apply env to workspace
6. now when I close and reopen powershell I can see virtual env path
7. cd into venv
8. pip install matplotlib in powershell error message when importing pandas: This Python interpreter is in a conda environment, but the environment has not been activated. Libraries may fail to load. To activate this environment please see https://conda.io/activation
9. In powershell within venv : conda activate
10.   Window Reload and its working!!!!!!!!!

ISSUES:

        - I think i named over my template as theres no files in it anymore
        > trying again with a different name for the env, as it appears I can choose , other than only venv:
            python -m venv C:\Users\gramk\OneDrive\Desktop\"project-directory"\"virtual-envs-name"
        > so we are creating a virtual environment dir inside our project dir
        ? does the main.py file go inside the project or the virtual directory
        > lets try in the main dir first
        > lets try to semplify instructions

        INSTRUCTIONS:
            1 Create project folder in vs code
                "python101"
            2 in "python" 101 touch main.py, and add test code
            3 run python command with the new env files location and name:
                python -m venv C:\Users\gramk\OneDrive\Desktop\python101\virtual
            4 reload workspace and we should see files

            5 in virtual pip install matplotlib Virtual, code should run

            6 reload

!!!!!!!!!!!!! It worked

LETS TRY AGAIN AND SEE IF WE CAN ALSO ADD JUPYTER NOTEBOOK AS WELL

            1 Create project folder in vs code
                "python-finance"
            2 in "python" 101 touch main.py, and add test code
            3 run python command with the new env files location and name:
                python -m venv C:\Users\gramk\OneDrive\Desktop\python-finance\v-notes
            6 reload
            5 pip install matplotlib and add test code
            only worked when I moved main.py into the virtual file(of corse)

TEST

            1 Create project folder in vs code"pf"
            2 run python command with the new env files location and name:
                python -m venv C:\Users\gramk\OneDrive\Desktop\pf\v-test
            3 in new terminal in "v-test" touch main.py, and add test code
            4 pip install matplotlib and add test code
             reload
    "C:\Users\gramk\OneDrive\Desktop\pf"

