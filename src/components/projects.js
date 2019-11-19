import React,{Component} from 'react'
import './componentsStyles/projects.css'
import pro1 from './../img/project1img.png'
import pro2 from './../img/project2.png'
import pro3 from './../img/project3.png'
import './componentsStyles/csscom.css'


class projects extends Component {
    state = {
        num: 7
    }
    
    pagep=()=>{
       
   
    }
    
    render() {
        return (
            <React.Fragment>
                <div  className="overf">
            
                    <div className="csscom">
                        <br/>
                        <div className="gridp">
                    
                        <div  className="gridchild1 ">
                            <img className="imgp" src={pro1} />
                            <a target="blank" href="http://remhealth.co"><button onClick={this.pagep} className="projectbtn">Visit site</button></a>
                             
                            </div>
                            <div className="gridchild2">
                            <img className="imgp" src={pro2} />
                            <a target="blank" href="http://naturehost.co"><button className="projectbtn"> Visit site</button></a>
                        </div>
                        
                        <div className="gridchild3 ">
                            <img className="imgp" src={pro3} />
                            <a target="blank" href="http://blueform.co"> <button className="projectbtn">Visit site</button></a>
                            </div>

                        </div>
                        <br/>

                        </div>
                </div>
            </React.Fragment>
        )
    }
}
export default projects