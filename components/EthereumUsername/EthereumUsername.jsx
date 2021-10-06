import { useState, useEffect } from "react"
import { web3 } from "../../lib/web3"
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import styles from './EthereumUsername.module.css'

const ens = new ENS({
  provider: web3.currentProvider,
  ensAddress: getEnsAddress("1")
})

export default function EthereumUsername({ ethAddress }) {
  const [ensName, setEnsName] = useState()
  const [ensAvatar, setEnsAvatar] = useState()
  const [formattedAddress, setFormattedAddress] = useState()

  const Icon = () => {
    if (ethAddress) {
      return <Jazzicon diameter={32} seed={jsNumberForAddress(ethAddress)} />
    }
  }

  async function getName() {
    const name = await ens.getName(ethAddress)
    name.name && setEnsName(name.name)
  }

  async function getAvatar() {
    if (name) {
      const avatar = await ens.name(name).getText("avatar")
      avatar && setEnsAvatar(avatar)
    }
  }

  useEffect(() => {
    getName()
    if (ethAddress) {
      setFormattedAddress(`${ethAddress.substr(0, 8)}...${ethAddress.substr(-4)}`)
    }
  }, [ethAddress])

  useEffect(() => {
    getAvatar()
  }, [ensName])

  return (
    <div className={styles.username}>
      <div>
        {ensAvatar ? (
          <img src={ensAvatar} />
        ) : (
          <Icon />
        )}
      </div>
      <div className={styles.address}>
        <span>
          {ensName ? ensName : formattedAddress}
        </span>
        <span>
          {ensName ? formattedAddress : ""}
        </span>
      </div>
    </div>
  )
}