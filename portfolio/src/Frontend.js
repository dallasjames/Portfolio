import React from 'react'
import API from './img/APICalls.PNG'
import HB from './img/HumbleBeginnings.PNG'
import PrePro from './img/Preprocessing.PNG'
import State from './img/StateMangement.PNG'
import Router from './img/Router.PNG'
import Redux from './img/Redux.PNG'

function Frontend() {
return(
<>
<a href="https://github.com/dallasjames/User-Interface/tree/dallas-james">
  <div className="odd">
      <p>The first website I have created</p>
      <img src={HB} alt="The first site"/> 
  </div>
</a>
<a href="https://github.com/dallasjames/Preprocessing-II/tree/dallas-james">
  <div className="even">
    <p>Preprocessing with LESS</p>
    <img src={PrePro} alt="Preprocessing CSS"/> 
  </div>
</a>
<a href="https://github.com/dallasjames/github-usercard/tree/dallas-james">
  <div className="odd">
    <p>Calling API's</p>
    <img src={API} alt="API Calls"/>
  </div>
</a>
<a href="https://github.com/dallasjames/Sprint-Challenge-State-Management-Smurfs/tree/dallas-james">
  <div className="even">
    <p>State mangement with React</p>
    <img src={State} alt="State Management"/>
  </div>
</a>
<a href="https://github.com/dallasjames/HTTP-Movies-Assignment/tree/dallas-james">
  <div className="odd">
    <p>React router</p>
    <img src={Router} alt="Router"/>
  </div>
</a>
<a href="https://github.com/dallasjames/React-Redux-App/tree/dallas-james">
  <div className="even">
    <p>React Redux</p>
    <img src={Redux} alt="Redux"/>
  </div>
</a>
</>
)
}

export default Frontend