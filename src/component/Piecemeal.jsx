import React from 'react'

function Piecemeal() {
    const main = {
        textAlign : "left",
        padding : "1% 2%",
    }
  return (
    <div style={main}>
        <h2 style={{position : "fixed"}}>Piecemeal</h2>
        <div style={{padding:"40px"}}>
        <p>adjective</p>
        <p>Origin: Middl English from the noun piece + -meal from Old English medium, in the sense measure, quantity taken at one time.</p>
        <h4>characterized by unsystematic partial measures taken over a period pf time.</h4>
        <ul><li>the village is slowly being killed off by piecemeal development</li></ul>
        <p>adverb</p>
        <h4>in an unsystematic way, through partial, measures taken over a period of time.</h4>
        <ul>
            <li>many organizations have been buitl up placemeal</li>
            <li>some can only be hard as part of a package, while others can be installed piecemeal</li>
        </ul>
        </div>
    </div>
  )
}

export default Piecemeal