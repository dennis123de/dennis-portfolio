import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactInfo } from '../../data/socials'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const initialFields = { name: '', email: '', subject: '', message: '' }

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Please enter your name.'
  if (!fields.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.'
  if (!fields.subject.trim()) errors.subject = 'Please add a subject.'
  if (!fields.message.trim()) errors.message = 'Please write a message.'
  return errors
}

export function ContactForm() {
  const formRef = useRef(null)
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const isLoading = status === 'loading'

  function handleChange(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validation = validate(fields)
    setErrors(validation)
    if (Object.keys(validation).length) {
      const firstInvalidField = Object.keys(validation)[0]
      formRef.current?.elements.namedItem(firstInvalidField)?.focus()
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setFeedback(`The email service isn't configured yet. Please email me directly at ${contactInfo.email}.`)
      return
    }

    if (!formRef.current) {
      setStatus('error')
      setFeedback('The form could not be submitted. Please email me directly.')
      return
    }

    setStatus('loading')
    setFeedback('')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      setFields(initialFields)
      formRef.current.reset()
      setFeedback('Your message has been sent. I’ll get back to you soon.')
    } catch (error) {
      console.error('EmailJS message delivery failed:', error)
      setStatus('error')
      setFeedback('Your message could not be sent right now. Please try again or email me directly.')
    }
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {feedback && <div className={`form-feedback ${status}`} role="status" aria-live="polite">{feedback}</div>}

      <div className="form-field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" maxLength={120} value={fields.name} onChange={handleChange} disabled={isLoading} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" maxLength={254} value={fields.email} onChange={handleChange} disabled={isLoading} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" placeholder="What would you like to build?" maxLength={160} value={fields.subject} onChange={handleChange} disabled={isLoading} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
        {errors.subject && <p className="field-error" id="subject-error">{errors.subject}</p>}
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" rows={4} placeholder="A little about your idea, goals, or timeline..." maxLength={5000} value={fields.message} onChange={handleChange} disabled={isLoading} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
      </div>
      <button className="btn btn-primary btn-submit" type="submit" disabled={isLoading} aria-busy={isLoading}>
        {isLoading ? 'Sending message…' : 'Send Message'}
        {!isLoading && <span aria-hidden="true">↗</span>}
      </button>
      <p className="form-note">Your details are only used to reply to your message.</p>
    </form>
  )
}
