"use client";
import React, { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialData {
  id: number;
  name: string;
  review: string;
  avatar: string;
  position: string;
}

const Testimonial: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "John Smith",
      review:
        "This product has completely transformed how I work. The attention to detail and user experience is incredible. I couldn't be happier with my decision to choose this solution.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: "CEO, TechCorp",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      review:
        "Outstanding service and support! The team went above and beyond to ensure everything was perfect. I've recommended this to all my colleagues and friends.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: "Marketing Director",
    },
    {
      id: 3,
      name: "Michael Chen",
      review:
        "The quality and reliability of this service is unmatched. It's been a game-changer for our business operations and has saved us countless hours every week.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: "Product Manager",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      review:
        "I was skeptical at first, but this exceeded all my expectations. The user interface is intuitive and the results speak for themselves. Absolutely fantastic!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: "UX Designer",
    },
    {
      id: 5,
      name: "David Wilson",
      review:
        "Professional, efficient, and results-driven. This solution has helped streamline our processes and improve our overall productivity significantly.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      position: "Operations Lead",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  return (
    <div
      className={`bg-[url('https://louris.wpbingosite.com/wp-content/uploads/2025/04/background.jpg')] min-h-[500px] bg-cover bg-center flex items-center justify-center py-16`}
    >
      <div className="max-w-4xl w-full px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="h2">Testimonials</h2>
        </div>

        {/* Testimonial Content */}
        <div className="mx-auto max-w-3xl relative">
          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4"
                >
                  <div className="flex flex-col items-center space-y-8">
                    {/* Review Text with fixed height container */}
                    <div className="text-center flex justify-center min-h-[120px] items-center">
                      <p className="text-xl max-w-2xl text-center text-gray-700 leading-relaxed">
                        &quot;{testimonial.review}&quot;
                      </p>
                    </div>

                    {/* User Avatar */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <Image
                          width={100}
                          height={100}
                          src="https://louris.wpbingosite.com/wp-content/uploads/2025/04/test-3.jpg"
                          alt={testimonial.name}
                          className="rounded-full object-cover w-20 h-20 border-4 border-white shadow-lg"
                        />
                      </div>
                    </div>

                    {/* User Info with fixed height container */}
                    <div className="text-center min-h-[80px] flex flex-col justify-center">
                      <h3 className="text-[20px] font-bold ">
                        {testimonial.name}
                      </h3>
                      <p className="p text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Fixed Position */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 pointer-events-none">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="pointer-events-auto bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 -translate-x-4"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="pointer-events-auto bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 translate-x-4"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
