import React, { Component } from 'react'
import './componentsStyles/heroImage.css'
import Wraper from './wrapper'
export default class Tryy extends Component{
    state = {
      
        nameLabe: 'Name',
        companyNameLabe: 'Company Name',
        projectLabe:'Project Type',
        bidLabe: 50000,
        name: null,
        companyName: null,
        project:null,
        bid: null,
        btn:false
    }
    render() {
        let btna = <h1>add</h1>
        if (this.state.name !== null && this.state.companyName !== null && this.state.project !== null) {
            this.setState({btn:true})
            btna=<button>submit</button>
        }
        else {
             btna = <h1>addv</h1>  
        }
        this.changeName = (event) => {
            let name = event.target.value;
            if (name.length !==0 ) {
                let newS = { ...this.state.value }
                newS=name
                this.setState({ name: newS })
                this.setState({ nameLabe: newS })
             
            }
            else {
                this.setState({ nameLabe: "Input Name" });
           
            }

       
        }
        this.changeCompanyName = (event) => {
            this.setState({companyName:event.target.value})  
        }

        this.projectType = (event) => {
            this.setState({project:event.target.value})  
        }
        
        this.bid = (event) => {
            this.setState({bid:event.target.value})  
              }
   
        return (
            <Wraper>
                <div >
            <div onClick={this.props.click} className={this.props.classNames}>
                        <label>{this.state.nameLabe}</label>  <input  onChange={this.changeName}  placeholder="Full Name" type="text" />
                        <label>{this.state.companyNameLabe}</label>  <input
                            onChange={this.changeCompanyName} placeholder="If none input private" type="text" />
                        <label>{this.state.projectLabe}</label>  <input  onChange={this.projectType} placeholder="If you want to hire me input hire" type="text" />
                        <label>{this.state.bidLabe}</label>  <input  onChange={this.bid} placeholder="Budget" type="text" />
                        {btna}
                        <h6 onClick={this.props.close}>close</h6>
                        <h3>{this.props.namev}ggg</h3>
                    </div>
                    
                    </div>
                </Wraper>
    )
}


}
