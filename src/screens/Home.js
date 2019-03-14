import React from "react"
import Header from "../Header"
import { Image } from "semantic-ui-react"

const Home = props => {
  return (
    <div>
      <Header />
      <h1>Seja bem-vindo!</h1>
      <div>
        <center> 
        <Image src="/logo-home.png" size="large" spaced={true} />
        </center> 
      </div>
    </div>
  )
}

export default Home
