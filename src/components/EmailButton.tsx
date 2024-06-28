'use client'
import React from 'react'
import { toast } from 'sonner'
import { EmailIcon } from './ui/icons'

function EmailButton () {
  const handleCopyEmail = async () => {
    try {
      toast.success('Email copied.')
      await navigator.clipboard.writeText('Stevenfernandeztango3@gmail.com')
    } catch (error) {
      console.error(error)
    }
  }
  const handleCopy = () => {
    handleCopyEmail().catch((err) => {
      console.error(err)
    })
  }
  return (
    <button
      aria-label="copy email"
      role="button"
      onClick={handleCopy}
      className="opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
    >
      <EmailIcon />
    </button>
  )
}

export default EmailButton
