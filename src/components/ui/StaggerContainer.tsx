'use client'

import { ReactNode, useEffect, useState } from 'react'

interface StaggerContainerProps {
  children: ReactNode[]
  delay?: number
  className?: string
}

export function StaggerContainer({ children, delay = 100, className = '' }: StaggerContainerProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false))

  useEffect(() => {
    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, index * delay)
    })
  }, [children, delay])

  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-600 ${
            visibleItems[index]
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}