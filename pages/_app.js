import '../styles/globals.scss'
import { useRef, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [playerName, setPlayerName] = useState('')
  const playerNameRef = useRef('')
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap" rel="st</link>ylesheet" />
      <Component {...pageProps} playerName={playerName} setPlayerName={setPlayerName} playerNameRef={playerNameRef} />

    </>
  )
}

export default MyApp
