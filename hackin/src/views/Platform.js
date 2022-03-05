import React from 'react'
import Head from '../components/Head.js'
import Card from '../components/Card.js'
const Platform = () => {

  return (
    <div>
        <Head style={{
          "marginRight" : "25px"
        }}></Head>
        <h1 style={{
          "color" : "#005AAF",
          "margin": "25px"
        }}>Up comming Trips</h1>

        <div>
          <div style={{
            "margin" : "25px",
            "display": "flex",
            "flexDirection": 'row'
          }}>
            <img src={require('../assets/images/study-icon.png')}></img>
            <h3 style={{
              "display": "flex",
              "margin" : "25px",
              "color":"#005AAF"
            }}>Study</h3>
          </div>
          <div style={{
            "display":"flex",
            "flexDirection": "row",
          }}>
            <Card picture=""></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>

        </div>

    </div>
  )
}

export default Platform