import React from 'react'
import Data from './img/DataStructures.PNG'
import Iter from './img/Iteration.PNG'
import Recur from './img/Recursion.PNG'
import Algor from './img/Algorithms.PNG'

function CS() {
    return(
        <>
        <p>Python</p>
        <a href="https://github.com/dallasjames/Data-Structures/tree/dallas">
            <div className='odd'>
                <p>Data Structures</p>
                <img src={Data} alt="Data Structures"/>
            </div>
        </a>
        <a href="https://github.com/dallasjames/cs-module-project-iterative-sorting/tree/dallas-james">
            <div className='even'>
                <p>Iterative solutions</p>
                <img src={Iter} alt="Iteration"/>
            </div>
        </a>
        <a href="https://github.com/dallasjames/cs-module-project-recursive-sorting/tree/dallas-james">
            <div className='odd'>
                <p>Recursive solutions</p>
                <img src={Recur} alt="Recursion"/>
            </div>
        </a>
        <a href="https://github.com/dallasjames/cs-module-project-algorithms/tree/dallas-james">
            <div className='even'>
                <p>Algorithms</p>
                <img src={Algor} alt="Algorithms"/>
            </div>
        </a>
        </>
    )
}

export default CS