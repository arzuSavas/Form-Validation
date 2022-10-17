import React from 'react'
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';
import { useNavigate } from 'react-router-dom';
const SecondPageValidationSchema = Yup.object({
  email: Yup.string().email().required('*email Giriniz'),
  phoneNumber:Yup.number().integer().required('*telefon numarası giriniz'),
  message: Yup.string().max(150, 'Too Long!').required('*mesaj Giriniz'),
})
function SecondPage(props) {
  const navigate =useNavigate();
  let { data, setData} = props
  const handleSubmit=(values)=>{
    console.log(values)
    setData(values)
    alert(JSON.stringify(values, null, 2));
  }
    return (
      <div>
      <Formik
       validationSchema={SecondPageValidationSchema}
         initialValues={data}
         onSubmit={handleSubmit}  
      >
        {(props)=>(
         <Form  className="form">
         <div className='second-form'>
          <div className='form-email'> 
           <Field 
              placeholder='email' 
              className={props.touched.email && props.errors.email?'form-element-error':'form-element'}name="email"
              onChange={props.handleChange}
           />     
           {props.touched.email && props.errors.email&&  (
            <div className='second-form-error-message'>{props.errors.email}</div>      
          ) }</div>
           <div className='form-phoneNumber'>
           <Field 
             placeholder='Telefon Numarası ' 
             className={props.touched.phoneNumber && props.errors.phoneNumber?'form-element-error':'form-element'} name="phoneNumber" 
             onChange={props.handleChange}
             />
           {props.touched.phoneNumber && props.errors.phoneNumber&&  (
            <div className='second-form-error-message'>{props.errors.phoneNumber}</div>
          ) } 
             </div>
          </div>
          <textarea name="message"
                   placeholder='Mesajınızı girin'
                   style={{height: '126px',width: '311px'}}
                   className={props.touched.message && props.errors.message?'form-element-error':'form-element'}        onChange={props.handleChange}      
                  ></textarea>
                    {props.touched.message && props.errors.message&&  (
            <div className='error-message'>{props.errors.message}</div>
          ) }
         <div className='buttons'>
           <button type='button'className='button-next' onClick={()=>navigate('/')}>geri</button>
           <button type='submit'value='submit' className='button-submit'>gönder</button>
         </div>
         </Form>
     )}
      </Formik>
      </div>
     
    );
}

export default SecondPage