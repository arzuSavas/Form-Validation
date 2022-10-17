import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
const FirstPageValidationSchema = Yup.object({
  firstName: Yup.string().required('*İsim giriniz'), 
  lastName: Yup.string().required('*Soyisim giriniz'),
})
 const FirstPage = (props) => {
  const navigate =useNavigate();
     let {data, setData} = props
     const handleSubmit=(values)=>{  
      setData(values)
      console.log(values)
      navigate('/SecondPage')
    }
   return (
    <div>
     <Formik
        validationSchema={FirstPageValidationSchema}
        initialValues={data}
         onSubmit={handleSubmit}
        >
     {(props)=>(
     <Form className="form">
        <Field 
            className={props.touched.firstName && props.errors.firstName?'form-element-error':'form-element'}
            placeholder='İsim'  
            name="firstName"
            onChange={props.handleChange}
            />
            {props.touched.firstName && props.errors.firstName&&  (
            <div 
              className='error-message'>{props.errors.firstName}
            </div>
          ) }
       <Field 
          placeholder='Soy İsim' 
          className={props.touched.firstName && props.errors.firstName?'form-element-error':'form-element'}  name="lastName"
          onChange={props.handleChange}
          />
          {props.touched.lastName && props.errors.lastName&&  (
           <div 
              className='error-message'>{props.errors.lastName}
            </div>
          )}
       <button className='button'type='submit'>devam</button>
     </Form>
   )}
  </Formik>
  </div>
   );
 };
 export default FirstPage