'use client'

import { useState } from 'react'

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const sendTestEmail = async () => {
    setIsLoading(true)
    setResult('')
    setError('')
    
    try {
      console.log('Sending test email...')
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })

      const data = await response.json()
      console.log('Test email response:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send test email')
      }
      
      setResult(`✅ SUCCESS: ${data.message}`)
    } catch (error) {
      console.error('Test email error:', error)
      setError(`❌ ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Email Configuration Test</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Email Settings:</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>From:</strong> admin@tntdump.com</li>
              <li><strong>To:</strong> admin@tntdump.com</li>
              <li><strong>CC:</strong> admin@tntdump.com, icondumpsters@gmail.com</li>
              <li><strong>SMTP:</strong> vixen.websitewelcome.com:465</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={sendTestEmail}
            disabled={isLoading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
          >
            {isLoading ? 'Sending Test Email...' : 'Send Test Email'}
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">{result}</p>
            <p className="text-green-600 text-sm mt-2">
              Check your email at admin@tntdump.com for the test email!
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">{error}</p>
            <p className="text-red-600 text-sm mt-2">
              Check the console logs for more details.
            </p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">What this test does:</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Sends a test email from admin@tntdump.com to admin@tntdump.com</li>
            <li>• CC's admin@tntdump.com and icondumpsters@gmail.com</li>
            <li>• Verifies SMTP authentication is working</li>
            <li>• Tests email formatting and delivery</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
