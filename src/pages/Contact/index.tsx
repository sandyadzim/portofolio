import React, { useState } from 'react'
import axios from 'axios'

import contactIcon from '../../assets/img/contact.png'

function Contact() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: '',
  })

  const [alert, setAlert] = useState(false)

  const [stats, setStats] = useState({
    success: false,
    message: '',
  })

  const [showStats, setShowStats] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleFullName = (e: any) => {
    setValues({ ...values, fullName: e.target.value })
  }

  const handleEmail = (e: any) => {
    setValues({ ...values, email: e.target.value })
  }

  const handleMessage = (e: any) => {
    setValues({ ...values, message: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (values.fullName && values.email && values.message) {
      const data = {
        Name: values.fullName,
        Email: values.email,
        Message: values.message,
      }

      setIsLoading(true)

      axios
        .post('https://sheetdb.io/api/v1/fq928q4j7kexp', data)
        .then((resp) => {
          setShowStats(true)

          setStats({
            success: true,
            message: 'Message sent successfully',
          })

          setTimeout(() => {
            setShowStats(false)
          }, 1500)
        })
        .catch((err) => {
          setShowStats(true)

          setStats({
            success: false,
            message: 'Something went wrong',
          })

          setTimeout(() => {
            setShowStats(false)
          }, 1500)
        })
        .finally(() => {
          setIsLoading(false)
          setValues({
            fullName: '',
            email: '',
            message: '',
          })
        })
    } else {
      setAlert(true)

      setTimeout(() => {
        setAlert(false)
      }, 1500)
    }
  }

  return (
    <div className="flex items-center justify-center md:space-x-5 md:h-[80vh] flex-col md:flex-row fade-in mb-10">
      {showStats && (
        <div
          className={`p-4 rounded-xl text-white fade-in font-semibold text-center absolute top-2 ${
            !stats.success ? 'bg-red-500' : 'bg-green-dark-pastel'
          }`}
        >
          {stats.message}
        </div>
      )}
      <div className="hidden lg:flex justify-center md:w-1/2">
        <img src={contactIcon} alt="contact" />
      </div>
      <div className="w-full md:w-1/2 flex-1 flex justify-center flex-col">
        <h2 className="font-bold text-green-dark-pastel text-3xl md:text-5xl text-center mb-6">
          Send me a message!
        </h2>
        {/* Form */}
        <div className="shadow-base rounded-xl p-6">
          <h4 className="text-green-pastel font-semibold text-center mb-6 hidden md:block">
            Just fill out this form if you want more information or just want to
            provide feedback.
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="fullName"
                className="text-navy-pastel font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                className="shadow-base rounded-md h-9 focus:outline-none p-3 text-sm text-navy-pastel"
                value={values.fullName}
                onChange={handleFullName}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="text-navy-pastel font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow-base rounded-md h-9 focus:outline-none p-3 text-sm text-navy-pastel"
                value={values.email}
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="message"
                className="text-navy-pastel font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                className="shadow-base rounded-md focus:outline-none p-3 text-sm text-navy-pastel"
                value={values.message}
                onChange={handleMessage}
              ></textarea>
            </div>

            <button
              type="submit"
              className="shadow-base rounded-md bg-navy-pastel font-bold text-white py-3 mt-3 w-full"
            >
              {isLoading ? 'Sending...' : 'Send Message!'}
            </button>

            {alert && (
              <div className="text-red-500 text-center mt-6">
                Please fill in all the forms above
              </div>
            )}
          </form>
        </div>
        <div className="text-center mt-4 text-navy-pastel">
          Powered by sheetdb.io
        </div>
      </div>
    </div>
  )
}

export default Contact
