import React,{Component} from 'react'
import './componentsStyles/hire.css'
import { Formik } from "formik"
import Error from './Error'
import * as Yup from "yup"
import axios from 'axios'


const validationcheck = Yup.object().shape({
        //name validat
    name: Yup.string()
.min(3, "Must have minimum of 3 characters")
        .max(20, "Must not be more than 20 characters")
        .required("Fild can`t be blank"),
    
    //email
    email: Yup.string()
        .email('Must be a valid email adress')
        .max(40, "Must not be more than 10 characters")
        .required("Fild can`t be blank"),
    
      //company name validat
        companyname: Yup.string()
        .min(3, "Must have minimum of 3 characters")
        .max(20, "Must not be more than 20 characters")
        .required("Fild can`t be blank"),
  //projcttype validat
        projecttype: Yup.string()
        .min(3, "Must have minimum of 4 characters")
        .max(220, "Must not be more than 220 characters")
        .required("Fild can`t be blank"),

          //bid validat
       bid: Yup.number()
        .min(3, "Must have minimum of characters")
        .required("Fild can`t be blank")
})
let apicallmessage= null
class hire extends Component{
    state = {
        error:null,
        sucess: null,
        sending:null
    }
    render() {
        return (
            <React.Fragment>
                <div className='wrap'>
                <div className='wrap2'>
                <Formik initialValues={{ name: "", email: "", companyname: "", projecttype: "", bid: "" }} validationSchema={validationcheck}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true)
                        this.setState({sending:"Sending Data Please Wait"})
                        const data = values;
                        console.log(data)
                        axios.post('https://codeuiandyio.firebaseio.com/Datas.json', data)
                            
                            .then((res) => {
                              
                                this.setState({
                                    sucess: 'Form Submitted Thanks for Your Time, If you need my Assistant now please call +2348115659965',sending:"Done"})
                           
                            })
                            .catch((er) => {
                                let err= "Failed to submit data, "+" " + er.message
                             this.setState({error:err,
                             sending:"An error occured"})
                        })
                       // setTimeout(() => {
                        //    alert(JSON.stringify(values,null , 2))
                            resetForm();
                            setSubmitting(false);
                        //}, 5000)
                }}
                >
                            {
                        ({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
                          
                            <form onSubmit={handleSubmit}>
                              
                               <h6 className="suc"> {this.state.sucess}{this.state.error}</h6>
                               
                                <label htmlFor="name">Name</label>
                                <Error touched={touched.name} message={errors.name}/>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                    className={touched.name && errors.name ? 'hase': null}
                                />
                             
                            
                            <label htmlFor="email">Email</label>
                            <Error touched={touched.email} message={errors.email}/>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    className={touched.email && errors.email ? 'hase': null}
                                />
    
                
                                
                            <label  htmlFor="companyname">Company Name</label>
                            <Error touched={touched.companyname} message={errors.companyname}/>
                            <input 
                                    type="text" id="companyname" companyname="companyname"
                                    onChange={handleChange}
                                    value={values.companyname}
                                    onBlur={handleBlur}  
                                    className={touched.companyname && errors.companyname ? 'hase': null}
                                />
    
          
                            
                                <label htmlFor="projecttype">Project Type</label>
                                <Error touched={touched.projecttype} message={errors.projecttype}/>
                                <input
                                  
                                    type="text"
                                    id="projecttype"
                                    projecttype="projecttype"
                                    onChange={handleChange}
                                    value={values.projecttype}
                                    onBlur={handleBlur}  
                                    className={touched.projecttype && errors.projecttype ? 'hase': null}
                                />
                         
                                <label htmlFor="bid">Budget</label>
                                <Error touched={touched.bid} message={errors.bid} />
                             
                                <input
                                  
                                    type="number"
                                    id="bid"
                                    bid="bid"
                                        onChange={handleChange}
                                    value={values.bid}
                                    onBlur={handleBlur}  
                                    className={touched.bid && errors.bid ? 'hase' : null}
                                    
                                />
                                <p style={{color:"yellow"}}>{this.state.sending}</p>
                                <button className="Submitbtn" type="submit" disabled={isSubmitting}>Submit</button>
                                <br />
                              
                        </form>
                  
                                )
    }
                            
            </Formik>
                    </div>
                    </div>
                </React.Fragment>
        )
    }
  
}
export default hire