import React from 'react'
import '../assets/Head.css'

const Head = () => {
  return (
    <div className='Head-container'>
        <img src={require('../assets/images/icons.png')}></img>
        <img src={require('../assets/images/human.png')}></img>
        <div className='Head-inputs'>
            <h1>User name</h1>
            <div className='inputs'>
                <div style={{
                    "backgroundColor":"#005AAF",
                    'width':'40em',
                    "padding" : "5px 50px 5px 25px",
                    "borderRadius":"15px",
                    "color" :"white"
                }}>
                    Search
                </div>
                <div style={{
                    "backgroundColor":"#005AAF",
                    "padding" : "5px 20px",
                    "borderRadius":"15px",
                    "margin" : "auto 25px",
                    "color" : "white"
                }}>
                    Filter
                </div>
            </div>
        </div>
    </div>
  )
}

export default Head