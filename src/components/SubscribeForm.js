import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const SubscribeForm = () => {
  const WEBSITE_URL = 'https://dbb.emqubeweb.com';
  const FORM_ID = '3359'; //Form id that provides Contact Form 7

  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state
  var successMessageSent ='';
  // this effect function authenticates our subcriber user to get a token
  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: 'Hitesh', // provide a user credential with subscriber role
        password: '4bXuIvx%QLolySL0(^qLuOWL'
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      setToken(response.data.token)
    }).catch(error => console.error( 'Error', error ))
  }, [])

  // use useFormik hook using object destructuring assignment to extract helpful methods
  const {
    handleChange,
    isSubmitting,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
    },
    onSubmit: ({
      name,
      email,
      country
    }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      // here we created a FormData field for each form field
      const bodyFormData = new FormData();
      bodyFormData.set('dbb-name', name);
      bodyFormData.set('dbb-email', email);
      bodyFormData.set('country', country);
      
      // here we sent
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }).then(response => {
        // actions taken when submission goes OK
        resetForm()
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(true)
      }).catch(error => {
        // actions taken when submission goes wrong
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(false)
      })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000);
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    <section className="subscribe-wrapper">
    <div className="container">
      <div className="left">
        <p>
          Subscribe to Dubai BizBuzz <span>Weekly News Updates</span>
        </p>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit} className="subscribe">
          <input 
          type="text" 
          name="name"
          placeholder="Name"
          onChange={handleChange}
         value={values.name}
          required
           />
          <input 
          type="email" 
          name="email"
          placeholder="Email" 
          onChange={handleChange}
          value={values.email}
          required
          />
          <select name="country" id="country"  onChange={handleChange}>
            <option value="choose your country">Choose your Country</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
          </select>

          <input 
          type="submit" 
          defaultvalue="subscribe"
          className="submit-btn" 
          disabled={isSubmitting}
           />
          {/* {messageSent && successMessageSent && (
              <div>Message sent successfully!</div>
          )}
          {messageSent && !successMessageSent && (
                <div>something went wrong please try again.</div>
          )} */}
          {messageSent && successMessageSent && (
              <div>Message sent successfully!</div>
          )}
          {messageSent && !successMessageSent && (
                <div>something went wrong please try again.</div>
          )}
        </form>
      </div>
    </div>
  </section>

 )
}

export default SubscribeForm