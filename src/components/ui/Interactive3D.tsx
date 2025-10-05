'use client'

import { ReactNode, useRef, MouseEvent, useCallback } from 'react'

interface Interactive3DProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function Interactive3D({ children, className = '', intensity = 10 }: Interactive3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    // Cancel any pending animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Schedule the transform update for the next frame
    animationRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return

      const card = cardRef.current
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate rotation based on cursor position
      const rotateX = ((y - centerY) / centerY) * intensity
      const rotateY = ((centerX - x) / centerX) * intensity

      // Use transform3d for hardware acceleration and remove conflicting transition
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(2px)`
    })
  }, [intensity])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return

    // Cancel any pending animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const card = cardRef.current
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    // Re-add transition only for the exit animation
    card.style.transition = 'transform 0.3s ease-out'

    // Remove transition after animation completes to prevent interference
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition = ''
      }
    }, 300)
  }, [])

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform' // Hint to browser for optimization
      }}
    >
      {children}
    </div>
  )
}