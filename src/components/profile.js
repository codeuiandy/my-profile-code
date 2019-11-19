import React,{Component} from 'react'
import './componentsStyles/profile.css'
import Skills from './skills'
import './componentsStyles/modal.css'
import Typed from 'react-typed';

import Trv from './Tryy'
import {Link,Route} from 'react-router-dom'
class profile extends Component{
    state = {
        show:false
    }
    render() {
        this.open = () => {
            let tog = this.state.show;
            this.setState((prevState) => {
          return    {  show:!prevState.show}
            })
        }
        let module = null
        let classes =[]
        this.hd = ()=>{
           
            module = <Trv click={this.hide} classNames={classes.Add('classTwo')} />
       }
           
    
        
       
        if (this.state.show) {
            classes=['classOne']
            module =  <Trv click={this.hide} classNames={classes.join('')}/>
            
        }
        return (

            <React.Fragment>
                  {module}
                     <div className="overf">
            <div className="profileabout">
                        <div className="sk">
                        <div className="typeds">
            <Typed 
                    strings={['Hello, Welcome',
                    'Am a React developer',
                                        'I can make your dream deasign a reality',
                                    'Why don`t you go ahead and click the hire button']}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                />
           
            </div>
                            
              </div>
    
                        
                        <div className="profiletext">
                            
                            <h1>About Me</h1>
                            <br/>
                            <h4 className="profiletexth4">Hi, I am a frontend developer from Nigeria (Lagos) with over 3 years of experience in web development. I use modern frameworks such as react.js and many others. I am the kind of developer that doesn't take 99.99% as just okay. I don't just build; I think of the safest security measures, best practices, quick responsiveness, and an efficient Search Engine Optimization(SEO). I am also a software tutor.</h4>
                           

  
     <Link to={{pathname:'/My_core'}}><h3 className='skillsbtnp' >Skills</h3></Link>
                            
                        </div>
                        
    
                    </div>
                </div>
               
                <Route path='/My_core'   component={Skills} />
                </React.Fragment>
                
        )
    }
 
   
}
export default profile