# CodeLab-TDD-React

TDD Practice for React.js

## Prerequisites

<h6>
    <img alt="warining-sign" width="12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/304/warning_26a0-fe0f.png"/>
    <b>[Notice]</b>
    all command lines in this repository are set for the bash.
</h6>

<details>
<summary>✅ <b>node.js</b></summary>

### Prepare **[node](https://nodejs.org)** using [**nvm**](https://github.com/nvm-sh/nvm#installing-and-updating)

1. Get latest version of nvm

  ```bash
  export NVM_LATEST_VERS=$(curl -H "accept: application/vnd.github.v3+json" -s "https://api.github.com/repos/nvm-sh/nvm/releases/latest" | jq ".tag_name" | tr -d '"')
  echo " * NVM_LATEST_VERS: ${NVM_LATEST_VERS}"
  ```

1. Instal nvm using on current shell.

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | $SHELL
    ```

1. Copy and paste below nvm setting scripts into your profile.  
   _(e.g `~/.bashrc` or `~/.zshrc`, etc.)_

    ```bash
    # NVM
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```

    Then refesh your profile.

    ```bash
    source ~/.bashrc
    # OR
    source ~/.zshrc
    ```

    Check the version

    ```bash
    nvm -v
    ```

1. Set _LTS version_ of node using nvm

    ```bash
    # Download and install node package
    nvm install --lts
    nvm use --lts 

    # Check
    nvm which node
    node -v
    ```

    ```bash
    # Option :: update npm
    npm i -g npm
    ```

<br>
</details>

<details>
<summary>✅ <b>yarn</b></summary>

### Prepare **[yarn](https://yarnpkg.com/getting-started/install)**

```bash
npm i -g yarn

# Check
yarn -v
```

<br>
</details>

## Samples

### react-app

- [tdd-react](./tdd-react#readme)
  : basic react application using jest

### Loadmap

- [ ] `tdd-react-ts`
  : porting typescript from `tdd-react`
- [ ] `tdd-next`
  : basic next application with test library included
- [ ] `tdd-next-ts`
  : porting typescript from `tdd-next`
