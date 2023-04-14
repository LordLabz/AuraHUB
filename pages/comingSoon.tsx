import React from "react";
import Container from "../components/Container/Container";
import Image from "next/image";

export default function ComingSoon() {
  // Coming Soon Page
  return (
    <Container maxWidth="lg">
      <h1>Coming Soon</h1>

      <div>
        <Image
        src = '/comingSoon.png'
        alt=''
        fill
        />
      </div>

      <div style = {{display:'flex', justifyContent:'center', fontSize:'x-large', }}>
        <p>This collection is coming soon!</p>
      </div>
      
    </Container>
  );
}
