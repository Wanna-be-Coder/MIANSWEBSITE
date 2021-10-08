import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${require("./background-image.svg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        position: "fixed",
        width: "100%"
      }}
      className="logo"
      >
        <Image src="/logo.png" width={400} height={150} />
      
      <h1>Reflection of your desire</h1>
      
      {/* <p>Hello</p>   */}
    </div>
  )
}
