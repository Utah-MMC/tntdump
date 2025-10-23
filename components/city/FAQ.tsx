import React from 'react'

export type QA = { question: string; answer: string }

export default function FAQ({ items }: { items: QA[] }) {
  if (!items || items.length === 0) return null
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {items.map((qa, i) => (
            <details key={i} className="group border rounded-lg p-4">
              <summary className="cursor-pointer font-medium text-gray-900">{qa.question}</summary>
              <div className="mt-2 text-gray-700">{qa.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

