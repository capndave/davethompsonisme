import emailjs from '@emailjs/browser'

require('dotenv').config({
  path: process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/.env.${process.env.NODE_ENV}`
    : `.env.${process.env.NODE_ENV}`
})

/**
 * EmailJS is a service used to send mail from client-side code
 * See https://www.emailjs.com/docs/introduction/how-does-emailjs-work/
 * TEMPLATE_ID is the name of the template EmailJS uses to format the email you receive.
 * It can be configured in the EmailJS Interface
 */

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = process.env
emailjs.init(EMAILJS_USER_ID)

export default function ({ subject, name, message, email }) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { subject, name, message, email })
    .catch(err => console.error('Error sending email:', err))
}
