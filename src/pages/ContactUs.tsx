import React from 'react'
import { RCStyles } from '../atoms/StyledLandingPage'
import * as Yup from 'yup'
import { InputGroup } from 'react-bootstrap'
import { Card } from '../atoms/StyledLandingPage'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { StyledButton } from '../atoms/StyledButtons'

function ContactUs() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const fullNameRegex = /^[a-z ,.'-]+$/i
  
    const formik = useFormik({
      initialValues: {
        fullname: '',
        email: '',
        phone:'',
        description:'',
      },
      validationSchema: Yup.object({
        fullname: Yup.string()
                .matches(fullNameRegex, 'Fullname is not valid')
                .label('Full Name')
                .required(),
        email: Yup.string()
                .email()
                .label('Email')
                .required(),
        phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .label('Phone Number')
                .required(),
        description: Yup.string()
                .label('Your Message')
                .required(),
      }),
      onSubmit: function  (values, {resetForm}) {
        console.log(`You are registered! 
         Name: ${values.fullname}
         Email: ${values.email}
         Phone: ${values.phone}
         Description: ${values.description}
         `);
         resetForm();
      }
    })

  return (
    <RCStyles>
    <Card className='PR-card'>
    <h2>Contact Us</h2>
    <form onSubmit={formik.handleSubmit}>
      <InputGroup className="input-group">
        <label htmlFor="fullname">
          Full Name
        </label>
        <input
        className={formik.touched.fullname && formik.errors.fullname ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname}
         type="text" 
         name="fullname"
         id="fullname"
         placeholder="Enter your full names here..."
         />
          {formik.touched.fullname && formik.errors.fullname && (
           <span className='errorText'>{formik.errors.fullname}</span>
           )}
      </InputGroup>
      <div className="mini-input-group">
      <InputGroup className="input-group">
        <label htmlFor="email">
          Email Address
        </label>
        <input
         className={formik.touched.email && formik.errors.email ? 'error' : ''}
         onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
         type="email" 
         name="email"
         id="email"
         placeholder="Enter your email address..."
         />
         {formik.touched.email && formik.errors.email && (
           <span className='errorText'>{formik.errors.email}</span>
           )}
      </InputGroup>
      <InputGroup className="input-group">
        <label htmlFor="phone">
          Phone Number
        </label>
        <input
        className={formik.touched.phone && formik.errors.phone ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
         type="tel" 
         name="phone"
         id="phone"
         placeholder="Enter your phone number"
         />
         {formik.touched.phone && formik.errors.phone && (
           <span className='errorText'>{formik.errors.phone}</span>
           )}
      </InputGroup>
      </div>
      <InputGroup className="input-group">
        <label htmlFor="description">
          Your Message
        </label>
        <textarea
        className={formik.touched.description && formik.errors.description ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
         name="description"
         id="description"
         placeholder="Enter your message here..."
         cols={5} rows={5}
         />
         {formik.touched.description && formik.errors.description && (
           <span className='errorText'>{formik.errors.description}</span>
           )}
      </InputGroup>
     
      <div className="btn-group">
      <StyledButton type='submit'> 
        Submit
      </StyledButton>
      </div>
    </form>
  </Card>
</RCStyles>
  )
}

export default ContactUs