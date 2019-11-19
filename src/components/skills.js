import React from 'react'
import './componentsStyles/skills.css'
const skills = () => {
    return (
        <React.Fragment>
                 <div className="overf">
        <div className="skills">
                    <div className="skillsmini"><h1 className="SKV" >Skills</h1>
                    <div className="skmom">

                            <div className="sk1"><h1><span className="skh1">Current skills</span></h1>
                                <ul className="ULS">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>MATERIAL CSS</li>
                                    <li>BOOSTRAP</li>
                                    <li>JAVASCRIPT</li>
                                    <li>REACT.JS</li>
                                    <li className="lchild">FIREBASE</li>
                        </ul>
                      
                        </div>
                        
                        <div className=""><h1><span className="skh1">Still Learning</span></h1>
                                <ul className="ULS">
                                    <li>NODE.JS</li>
                                    <li>MONGO DB</li>
                                    <li>GRAPHQL</li>
                                    <li>( REACT NATIVE )</li>
                                
                        </ul>
                        
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default skills