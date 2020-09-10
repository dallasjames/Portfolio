import React from 'react'
import Begin from './img/BeginNode.png'
import Auth from './img/Authentication.PNG'
import Test from './img/Testing.PNG'

function Backend() {
    return(
        <>
        <p>Node | SQL</p>
        <a href="https://github.com/dallasjames/node-api1-project/tree/dallas-james">
            <div className="odd">
                <p>Simple API creation</p>
                <img src={Begin} alt="First API"/>
            </div>
        </a>
        <a href="https://github.com/dallasjames/Sprint-Challenge-Authentication/blob/dallas-james">
            <div className="even">
                <p>High security authentication</p>
                <img src={Auth} alt="Authentication API"/>
            </div>
        </a>
        <a href="https://github.com/dallasjames/Sprint-Challenge-Authentication/tree/dallas-james">
            <div className="odd">
                <p>High level testing</p>
                <img src={Test} alt="Testing code"/>
            </div>
        </a>
        </>
    )
}

export default Backend