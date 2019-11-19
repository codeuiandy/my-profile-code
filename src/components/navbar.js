import Wraper from './wrapper'
import React,{Component} from 'react'
import './componentsStyles/navbar.css'
import './componentsStyles/heroImage.css'
import './componentsStyles/modal.css'
import Trv from './Tryy'
class navbar extends Component{
    state = {
    show:false
    }
    render() {
        this.toggle = () => {
            let tog = this.state.show;
            this.setState((prevState) => {
          return    {  show:!prevState.show}
            })
        }
        let module = null
        let classes =[]
        this.hide = () => {
            if (this.state.show) {
                classes=['classTwo']
            module = <Trv classNames={classes.join('')} />
            }
        
    }
        this.cv = () => {
            module= null
        }
       
        if (this.state.show) {
            classes=['classOne']
            module =  <Trv  click={this.hide} classNames={classes.join('')}/>
            
        }

      //  if (!this.state.show) {
         //   classes=['classTwo']
         //   module = <Trv classNames={classes.join('')} />
         //   classes=['hide']
    
        
       // }


        
return(     <Wraper>
    <header>
    <nav>
    <ul className="navbarUL">
        <li className="navbarLI" className="firstch"></li>
        <li className="navbarLI" className="icon"><a>Code</a></li>
     
            </ul>
            </nav>
        </header>
   {module}
</Wraper>)
    }

}
export default navbar