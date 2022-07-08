## install vs code

    EXTENSIONS:
        - monoki pro
        - jupyter

## install gitbash

        - gitkracken may be useful

## initialize folder and clone repo


## install node(tf compatable version):

        -select option to install chocolaty in the process
        install yarn globally:
                npm i -g yarn

## install conda



## installing tensorflow

         download cuda toolkit:
                lets try v 11.6.2 (mar 2022) or step 
                * n
                        docs: https://docs.nvidia.com/cuda/archive/11.6.2/
                > im downloading the network exe for now because its 33mb 
                * the local is recomended so I wont need to reinstall things all the time but its 2gb and my internet is shit

                install cudnn from my NVIDIA account

                                or apparently we can use the command line to handle those tasks as in step 4 below

                install latest driver from nvidia getforce experience

                1.install  latest visual studio

                2.install miniConda

                3.create conda environment:
                        in miniconda terminal "conda create --name tf python=3.9"

                4. gpu setup:
                        conda install -c conda-forge cudatoolkit=11.2 cudnn=8.1.0 (i used an installer instead) 
                        ?
        made it this far                

                        configure system paths: ? powershell likely
                                mkdir -p $CONDA_PREFIX/etc/conda/activate.d
                                echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$CONDA_PREFIX/lib/' > $CONDA_PREFIX/etc/conda/activate.d/env_vars.sh

                5. install Tensorflow
                                pip install --upgrade pip
                                pip install tensorflow
                                pip install 

                6. verify install 

                        verify cpu setup:
                                python3 -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
                                        should return a tensor

                                        or

                        verify gpu setup:
                                python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
                                        should return list of gpu devices

                conda install jupyter notebook support:
                        conda install -c anaconda ipykernal
                apply to notebook:
                        python -m ipykernel install --user --name=(environment name)

https://www.tensorflow.org/install/source_windows#install_msys2

SETUP FOR WINDOWS:
        
        install python (probally good to gave a global version instead of just in the env)
                latest stable version (for now):
                        * 3.10.5

                        Select pip as an optional feature and add it to your %PATH% environmental variable

                        For a list of all the locations added to your PATH variable, type “echo %PATH%“ in cmd
                        i see python 10 in my path so this must have been handled automatically with the python install

        Install the TensorFlow pip package dependencies:
                in powershell
                        pip3 install -U six numpy wheel packaging
                        pip3 install -U keras_preprocessing --no-deps     
                                The dependencies are listed in the setup.py file under REQUIRED_PACKAGES   

        install choco: https://chocolatey.org/install
                        > With PowerShell, you must ensure Get-ExecutionPolicy is not Restricted Run:
                                 Get-ExecutionPolicy
                                         If it returns Restricted run:
                                                Set-ExecutionPolicy AllSigned
                                                         or 
                                                Set-ExecutionPolicy Bypass -Scope Process

                                                finally run:
                                                        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))


        Install Bazel & install to path: https://github.com/bazelbuild/bazelisk
                choco install bazelisk (adds to path automatically)
                        

        Install MSYS2: https://www.msys2.org/

        Install Visual C++ Build Tools 2019
                ? I have the more recent version, lets see if thats a problem

        Install GPU support (optional)
                Use Git to clone the TensorFlow repository (git is installed with MSYS2):
                        C:\> git clone https://github.com/tensorflow/tensorflow.git
                        C:\> cd tensorflow
                check branch name
                        C:\> git checkout branch_name  # r1.9, r1.10, etc

        Configure build
                Configure your system build by running the following at the root of your TensorFlow source tree:
                        ? C:\> python ./configure.py   - no such directory
                        C:\> python ./configure.py
                                ?? says bazel is not instainstalled
                                > I tryed force installing it in the root of c drive
                        > C:\> python ./configure.py   - nope
                        > C:\tensorflow\> python ./configure.py
                        ? works but I get a could not find cudnn files error in CUDA toolkit 11.6
                                > time to try 11.2 after deleting 11.6
                cuda toolkit archive: https://developer.nvidia.com/cuda-toolkit-archive
                        ?* my cuda and cudnn version are the same, 
                        > I recall having to do something with the bin files from the cudnn bin file
                        * unzip cudnn files and copy and paste them into app data > nvidia gpu ... > cuda > version >
                        now in tensorflow directory in powershell I can configure:
                                C:\tensorflow\> python ./configure.py

        Build pip package: bazel build //tensorflow/tools/pip_package:build_pip_package
                ? error must be called within a workspace
                > navigate to tensorflow and try again
        * this is where i create a conda environment and then in it i install tf (conda console)
        > I already have one. lets activate that (tf)
                now i can pip install all the packages I need into it including Tensorflow
                        pip install
        Build pip package: bazel build //tensorflow/tools/pip_package:build_pip_package
                ? same error as before,
                > lets navigate to our env file and try
                ? no go
                > in our dev workspace this time
                ? still didnt work
                * pip install tensorflow seems to be working
ITS ALIVE!!!!!  once the ipykernal is installed for jupyter support and I select the tf kernal my tensorflow code works and gpu access is confirmed











# setting up conda environment
    https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html
        probally the most simple resource that explains how to use conda

            * it seems I was getting hung up on the activation part. where as (base) means custom hadent been activated

            > in miniconda3 navigate to the project folder we we want the environment for and coonda activate with the desiered env name
                now instead of base I will see the name of the environment before the name of the project folder

            ? this does not reflict in vscode though
            > lookup setting up getbash with conda

## Removing onedrive from file path

                https://www.windowscentral.com/how-remove-onedrive-file-explorer-windows-10
                ? seems like it only removes it from the file explorer
                > moving on for now

# trouble with keybindings: https://www.youtube.com/watch?v=Fjp2qQEGjww&ab_channel=SFDCLearn%26Share

        I remapped command pallet top ctrl+1