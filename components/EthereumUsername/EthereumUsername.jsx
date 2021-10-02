import { useState, useEffect } from "react"
import Image from 'next/image'
import { web3 } from "../../lib/web3"
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

const ens = new ENS({
  provider: web3.currentProvider,
  ensAddress: getEnsAddress("1")
})

export default function EnsUsername({ ethAddress }) {
  const [ensName, setEnsName] = useState()
  const [ensAvatar, setEnsAvatar] = useState()

  const Icon = () => {
    return <Jazzicon diameter={32} seed={jsNumberForAddress(ethAddress)} />
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
  }, [ethAddress])

  useEffect(() => {
    getAvatar()
  }, [ensName])

  let formattedAddress = `${ethAddress.substr(0, 8)}...${ethAddress.substr(-4)}`

  return (
    <div className="eth-name">
      <div className="icon">
        {ensAvatar ? (
          <img src={ensAvatar} />
        ) : (
          <Icon />
        )}
      </div>
      <div className="name">
        <span className="primary">
          {ensName ? ensName : formattedAddress}
        </span>
        <span className="secondary">
          {ensName ? formattedAddress : ""}
        </span>
      </div>
    </div>
  )
}