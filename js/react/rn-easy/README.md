# sec1

        install node
        install git
        install vscode

to install chocolaty we need to check if our get-execution policy is restricted, if so we will need to bypass

        run 'Get-ExecutionPolicy'
            should say restricted

        if so run 'Set-ExecutionPolicy AllSigned' or 'Set-ExecutionPolicy Bypass -Scope Process' (in powershell as administrator)

install chocolatly:(package manager for windows)

        install chocolatly :
            Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

        test that it is downloaded
            choco -?

watchman:

        'choco install watchman' in admin powershell

expo cli:

        npm install --locatioin=global expo-cli
            to test run: expo whoami

install expo on my phone and make an account

        in command line
            expo init myfirstproject

            ? getting a error about my npm version being 2 new
            > uninstalled npm and installed a older compatable version
            > restarting computer

            ? execution policy error
            * "set-ExecutionPolicy Unrestricted" in admin powershell

now in a regular power shell i can run the expo init command inside the main dir(rn-easy)

                expo init myfirstproject
                select blank option and begin installing

                cd into mynewproject, open in vscode
                in powershell
                        expo start

had to open up the dev tools and change the connection type to tunnle,

                now I scan the qr code to build the js bundle

                open app.js to start working

6. Android Emulator

               for instructions and download link:
                       https://docs.expo.dev/get-started/installation



