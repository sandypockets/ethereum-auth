import { useState, useEffect } from "react";
import EthereumUsername from "../EthereumUsername/EthereumUsername";


export default function Account() {
  const [accounts, setAccounts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (accounts.length > 0) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [accounts])

  useEffect(async function() {
    if (window.ethereum) {
      const loadedAccount = await window.ethereum.request({ method: "eth_accounts" })
      setAccounts(loadedAccount)
      window.ethereum.on("accountsChanged", function(updatedAccountInfo) {
        setAccounts(updatedAccountInfo)
      })
    }
  }, [])

  const connect = async function() {
    if (window.ethereum) {
      const accountsArr = await window.ethereum.request({ method: "eth_requestAccounts" })
      accountsArr.length > 0 && setAccounts(accountsArr)
    } else {
      alert("You need an ETH wallet to sign up")
    }
  }

  if (isLoggedIn) {
    return <EthereumUsername ethAddress={accounts[0]} />
  } else {
    return <button onClick={connect}>Connect</button>
  }
}