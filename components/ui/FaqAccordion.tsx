'use client'

import { useState, ReactNode } from 'react'
import Card from './Card'

interface FaqItem {
  question: string
  answer: string | ReactNode
}

interface FaqAccordionProps {
  items: FaqItem[]
  className?: string
  allowMultiple?: boolean
}

export default function FaqAccordion({
  items,
  className = '',
  allowMultiple = false,
}: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      } else {
        return prev.includes(index) ? [] : [index]
      }
    })
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        
        return (
          <Card key={index} className="p-0 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-semibold text-dark pr-4">
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-medium flex-shrink-0 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-medium">
                {typeof item.answer === 'string' ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

