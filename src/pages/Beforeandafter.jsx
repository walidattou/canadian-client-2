"use client"

import { useState, useRef, useEffect } from "react"
import "../css/BeforeAfterSlider.css"

const BeforeAfterSlider = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateSliderPosition(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0])
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0])
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div className="before-after-container" ref={containerRef}>
      {/* Before Image (Background) */}
      <div className="image-container">
        <img src={beforeImage || "/placeholder.svg"} alt="Before" className="before-image" />
        <div className="before-label">Avant</div>
      </div>

      {/* After Image (Clipped) */}
      <div className="after-container" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={afterImage || "/placeholder.svg"} alt="After" className="after-image" />
        <div className="after-label">Après</div>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="slider-line"></div>
        <div className="slider-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

const BeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState('next')

  // Sample data - replace with your actual images
  const slides = [
    {
      id: 1,
      beforeImage: "/placeholder.svg?height=300&width=200",
      afterImage: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      beforeImage: "/placeholder.svg?height=300&width=200",
      afterImage: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      beforeImage: "/placeholder.svg?height=300&width=200",
      afterImage: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      beforeImage: "/placeholder.svg?height=300&width=200",
      afterImage: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      beforeImage: "/placeholder.svg?height=300&width=200",
      afterImage: "/placeholder.svg?height=300&width=200",
    },
  ]

  const goToPrevious = () => {
    if (currentIndex === 0 || isTransitioning) return
    
    setTransitionDirection('prev')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
      setIsTransitioning(false)
    }, 600)
  }

  const goToNext = () => {
    if (currentIndex >= slides.length - 3 || isTransitioning) return
    
    setTransitionDirection('next')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => Math.min(slides.length - 3, prevIndex + 1))
      setIsTransitioning(false)
    }, 600)
  }

  const getVisibleSlides = () => {
    return slides.slice(currentIndex, currentIndex + 3)
  }

  const getCardAnimationClass = (index) => {
    if (!isTransitioning) return ''
    
    if (transitionDirection === 'next') {
      if (index === 0) return 'sliding-out-left'
      if (index === 2) return 'sliding-in-right'
    } else {
      if (index === 0) return 'sliding-in-left'
      if (index === 2) return 'sliding-out-right'
    }
    
    return 'sliding'
  }

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">NOS RÉALISATIONS</h2>
        <p className="carousel-subtitle">Découvrez la différence qu'un bon nettoyage peut faire !</p>
      </div>

      <div className="carousel-content">
        {/* Left Navigation Arrow */}
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={goToPrevious} 
          disabled={currentIndex === 0 || isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Slider Cards Container */}
        <div className={`sliders-container ${isTransitioning ? 'transitioning' : ''}`}>
          {getVisibleSlides().map((slide, index) => (
            <div 
              key={`${slide.id}-${currentIndex}-${index}`} 
              className={`slider-card ${getCardAnimationClass(index)}`}
            >
              <BeforeAfterSlider
                beforeImage={slide.beforeImage}
                afterImage={slide.afterImage}
                label={`Comparison ${slide.id}`}
              />
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={goToNext} 
          disabled={currentIndex >= slides.length - 3 || isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="bottom-navigation">
        <button 
          className="nav-button nav-button-left" 
          onClick={goToPrevious} 
          disabled={currentIndex === 0 || isTransitioning}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button 
          className="nav-button nav-button-right" 
          onClick={goToNext} 
          disabled={currentIndex >= slides.length - 3 || isTransitioning}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BeforeAfterCarousel
