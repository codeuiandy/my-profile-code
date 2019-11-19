import React from 'react'
import './componentsStyles/works.css'
import tochi from './../img/mrt.jpeg'
import kc from './../img/kc.jpeg'
import bro from './../img/bro.jpeg'
const works = () => {
    return (
        <React.Fragment>
            <div className="overf">
                <div className="works">
                    <div className="pen">
<div className="testi1">
                        <img className="imgT" src={tochi} />
                        <div>
                        <h3 className="mainheading">Touchukwu Egesi</h3>
                         <h6 className="subheading">CEO of Innovation Corner</h6>
                        <br/>
                            <h4 className="imgTtt">Andy is one of the most conistent developers I have ever met, always making me impressed over any project given to him. As much as he loves working on new projects, he also makes time to give back to the community by teaching early stage engineers using digital channels.</h4>
                            </div>
                    </div>         
                          </div> 

                          <div className="pen">
<div className="testi1">
                        <img className="imgT" src={bro} />
                        <div>
                                <h3 className="mainheading">Roland Okeke</h3>
                                <h6 className="subheading">backend dev at rubbies online banking</h6>
                        <br/>
                            <h4 className="imgTtt">I have worked with Andy on some projects and he really delivers quickly and consistently, always bringing up new ideas. if you are searching for a web developer to hire, trust me you won't regret working with him. </h4>
                            </div>
                    </div>         
                    </div>
                    

                    <div className="pen">
<div className="testi1">
                        <img className="imgT" src={kc} />
                        <div>
                                <h3 className="mainheading">Kelechi Ezenwaka</h3>
                                <h6 className="subheading">CEO of GDG</h6>
                        <br/>
                            <h4 className="imgTtt">I can remember the first time I worked with Andy on a software and how much he contributed to the growth of the company. Even though he knew he would only be working there for a couple of months, he still gave the house his best. He even still works with me on some contracts. Thank you Andy.</h4>
                            </div>
                    </div>         
                          </div>
                </div>
                </div>
            </React.Fragment>
    )
}
export default works