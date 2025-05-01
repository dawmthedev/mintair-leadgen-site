import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 3rem 0;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: max-content;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const ReviewCard = styled.div`
  width: 18rem;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  flex-shrink: 0;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfilePic = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
`;

const Stars = styled.div`
  display: flex;
  color: #facc15;
`;

const reviews = [
  {
    name: "John D.",
    rating: 5,
    review:
      "Outstanding service! They were professional, efficient, and solved our AC issues quickly.",
    pfp: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah M.",
    rating: 5,
    review: "Great experience! Very knowledgeable team and fair pricing.",
    pfp: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mike R.",
    rating: 5,
    review: "Excellent service from start to finish. Highly recommend!",
    pfp: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily W.",
    rating: 5,
    review:
      "They installed our new HVAC system perfectly. Very happy with the results!",
    pfp: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David P.",
    rating: 5,
    review: "Fast response time and quality work. Would use again!",
    pfp: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Lisa K.",
    rating: 5,
    review: "Very professional team. They explained everything clearly.",
    pfp: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const ReviewCarousel = () => {
  return (
    <CarouselContainer>
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        What Our Customers Say
      </h2>

      <Track>
        {reviews.concat(reviews).map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <ProfilePic src={review.pfp} alt={review.name} />
              <div>
                <p className="font-semibold">{review.name}</p>
                <Stars>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </Stars>
              </div>
            </ReviewHeader>
            <p className="text-gray-600">"{review.review}"</p>
          </ReviewCard>
        ))}
      </Track>

      <div className="text-center mt-8">
        <a
          href="https://www.google.com/search?q=voltaic+construction&oq=voltaic+construction#mpd=~16398593950503221256/customers/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-primary px-3 py-1.5 text-base font-semibold text-white hover:bg-primary/90 transition-all"
        >
          See More Reviews
        </a>
      </div>
    </CarouselContainer>
  );
};

export default ReviewCarousel;
