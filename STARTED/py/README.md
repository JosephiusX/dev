
TRYING TO INSTALL CUDA:

        In this video I show you the freakishly difficult task of setting up and installing the latest tensorflow version with GPU support on Windows 10 :)

        GO HERE FIRST: compatability
        https://www.tensorflow.org/install/source#gpu

        1. Microsoft Visual Studio
        https://visualstudio.microsoft.com/vs/community/

        2. the NVIDIA CUDA Toolkit
        https://developer.nvidia.com/cuda-toolkit-archive

        3. NVIDIA cuDNN
        * https://developer.nvidia.com/cudnn

        4. Python (check compatible version from first link)
        conda create --name tf_2.4 python==3.8

        5. Tensorflow (with GPU support)
        pip install tensorflow

NOTES:

    check tensorflow version:
         pip list | grep tensorflow

