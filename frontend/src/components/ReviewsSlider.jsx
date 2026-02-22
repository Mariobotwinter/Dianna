import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../data/reviews';
import '../styles/ReviewsSlider.css';

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="recenzii" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <span className="section-label">Testimoniale</span>
          <h2 className="section-title">Ce spun clientele</h2>
          <p className="section-description">
            Feedback autentic de la clientele care mi-au încredințat îngrijirea unghiilor
          </p>
        </div>

        <div className="reviews-slider">
          <button
            className="slider-button slider-button-prev"
            onClick={prevReview}
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="reviews-track">
            <div 
              className="reviews-wrapper"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <p className="author-name">{review.name}</p>
                    <p className="author-date">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-button slider-button-next"
            onClick={nextReview}
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
