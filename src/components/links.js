import React from 'react'
import './componentsStyles/link.css'
import {Route, NavLink,Switch, Redirect} from 'react-router-dom'
import Skills from './skills'
import Projects from './projects'
import Profile from './profile'
import Works from './works'
import Hire from './hire'

 const link = () => {
    return (
        <div>
            <ul className="linkUL">
               
             

                  <li className="NavLinkLI"><NavLink to={{
                    pathname: '/My_core',
                    hash:'skills__okeke_andrew_miracle(codeUiAndy)'
                }
                }>Skills</NavLink></li>

<li className="NavLinkLI"><NavLink to={{
                    pathname: '/Projects',
                    hash:'i_have_worked_on__okeke_andrew_miracle(codeUiAndy)'
                }
                }>Projects</NavLink></li>

<li className="NavLinkLI"><NavLink to={{
                    pathname: '/My_profile',
                    hash:'okeke_andrew_miracle(codeUiAndy)'
                }
                }>About</NavLink></li>

<li className="NavLinkLI"><NavLink  to={{
                    pathname: '/Companies',
                    hash:'okeke_andrew_miracle(codeUiAndy)'
                }
                }>Comments</NavLink></li>
              

              <li className="NavLinkLI"><NavLink  to={{
                    pathname: '/hire',
                    hash:'hire okeke_andrew_miracle(codeUiAndy)'
                }
                }>Hire</NavLink></li>
            </ul>
           
            <Switch>
            <Route path="/My_profile" component={Profile} />
            <Route path="/My_core"   component={Skills} />
            <Route path="/Projects"   component={Projects} />
                <Route path="/Companies" component={Works} />
                <Route path="/hire"   component={Hire} />
            </Switch>
            <Redirect  from="/" exact to="/My_profile"/>
        </div>
    )
} 

export default link