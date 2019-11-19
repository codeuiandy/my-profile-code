import React from 'react'
import {withRouter} from 'react-router-dom'
const btn = (props) => {
   const ond=()=>{}
    console.log(props)
    return (
        <div>
            <button onClick={ond}>hhhhhh</button>
        </div>
    )
}

export default withRouter(btn)