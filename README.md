# 🚧 Work in progress

# Ethereum Auth
A React nav bar component example that authenticates users with the Ethereum blockchain. Styled with CSS modules.

> Users must have a browser based ETH wallet, like Metamask, to sign up or login.

## Getting started
Run the following commands:

```shell
git clone git@github.com:sandypockets/ethereum-auth.git
cd ethereum-auth
yarn install
```

If implementing something similar to this in your own project, the `Account` and `EthereumUsername` components contain all the logic you'll need. 

The `NavBar` component simply houses the other components for this demo, and the `BackgroundSection` component's only purpose is to demonstrate that the NavBar is fixed. 

## Dependencies

* next `11.1.2`
* react `17.0.2`
* react-dom `17.0.2`
* @ensdomains/ensjs `^2.0.1`
* ethjs-ens `^2.0.1`
* react-jazzicon `^0.1.3`
* web3 `^1.5.`

### Dev dependencies

* eslint `7.32.0`
* eslint-config-next `11.1.2`