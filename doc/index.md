# NodeJS one weekend tutorial

## Install Ubuntu VM (8:00pm)
- Use version 18.04.3
- Minimal installation
- Install Guest Additions
- Upgrade packages
- Install neovim
    ```
    sudo apt install neovim
    ```
- Install Tilix???
    ```
    sudo apt install tilix
    sudo update-alternatives --config x-terminal-emulator
    ```

## Install Git (9:00pm)
- Install git if it is not there out of the box.
    ```
    sudo apt install git
    git config --global user.email "angelcervera@gmail.com"
    git config --global user.name "Angel Cervera"
    ```
- Create an account in GitHub to share this repository.
- Fork [the tutorial repository](https://github.com/angelcervera/nodejs-tutorial)
- Clone the new repository and checkout branch `1-installation`
    ```
    git clone https://github.com/angelcervera/nodejs-tutorial.git
    cd nodejs-tutorial
    git checkout 1-installation
    ```

## Install VisualCode + Plugins 
[HERE](https://code.visualstudio.com/docs/nodejs/working-with-javascript) there is a short tutorial about how to use Visual Code with JavaSCript and NodeJS and [HERE](https://code.visualstudio.com/docs/nodejs/extensions) a good selection of extensions for JS and NodeJS.

```snap install code```


## Install NodeJS via NVM (9:30pm)
Few useful links:
- [NVM Installation web site](https://github.com/nvm-sh/nvm#install--update-script)
- [NVM Usage](https://github.com/nvm-sh/nvm#usage)

### Steps to install NVM:
    ```
    sudo apt install curl build-essential libssl-dev
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
    # Restart terminal
    nvm --version
    npm --version
    ```
### Steps to install nodejs and npm
    We are going to use the last LTS (Long Term Support) version.
    ```
    nvm install 12.13.0
    nvm use node 12.13.0
    nvm use
    ```
### Check nodejs installation
    ```
    echo "console.log('Hello.')" > hello.js
    node hello.js
    ```

## End environment installation (10:00pm)
