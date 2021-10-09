import React from 'react';
import Image from 'next/image'


const HeroSection = () => {
    return (
        <div
        style={{
          backgroundImage: `url(${require("./background-image.svg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
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

export default HeroSection
