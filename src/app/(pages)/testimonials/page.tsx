// src/app/testimonials/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mike Thompson",
    role: "Professional Trader",
    comment:
      "Apex Trader Funding completely transformed my trading career. The platform is intuitive and the support team is incredible!",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3EMike Thompson%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3EProfessional Trader%3C/text%3E%3C/svg%3E",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Day Trader",
    comment:
      "The evaluation process was fair and straightforward. I passed on my first attempt and now I'm trading with a $100k account!",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3ESarah Chen%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3EDay Trader%3C/text%3E%3C/svg%3E",
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Swing Trader",
    comment:
      "Best prop firm out there! The profit splits are generous and the withdrawal process is lightning fast.",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3EJames Rodriguez%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3ESwing Trader%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Futures Trader",
    comment:
      "I've tried multiple prop firms, but Apex stands out with their excellent customer service and transparent rules.",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3EEmily Watson%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3EFutures Trader%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Options Trader",
    comment:
      "The educational resources alone are worth it. Combined with the funding opportunity, it's a no-brainer!",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3EDavid Kim%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3EOptions Trader%3C/text%3E%3C/svg%3E",
  },
  {
    id: 6,
    name: "Lisa Parker",
    role: "Forex Trader",
    comment:
      "Made my first withdrawal in under 2 weeks. The process was smooth and the funds arrived quickly!",
    rating: 5,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%230D26FF' opacity='0.2'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='14' fill='%230D26FF' text-anchor='middle' dominant-baseline='middle'%3EComment%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' fill='%231f2937' text-anchor='middle'%3ELisa Parker%3C/text%3E%3Ctext x='200' y='200' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle'%3EForex Trader%3C/text%3E%3C/svg%3E",
  },
];

// YouTube videos data
const youtubeVideos = [
  {
    id: 1,
    title: "From $0 to Funded Trader - My Apex Journey",
    channel: "Trading with Mike",
    thumbnail:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='360' viewBox='0 0 480 360'%3E%3Crect width='480' height='360' fill='%230D26FF'/%3E%3Cpolygon points='240,180 300,150 300,210' fill='white'/%3E%3Ctext x='240' y='280' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EFrom $0 to Funded Trader%3C/text%3E%3C/svg%3E",
    videoId: "IjTd8WffpQI", // Example video ID
  },
  {
    id: 2,
    title: "Apex Trader Funding Review - 6 Months Later",
    channel: "Sarah Trades",
    thumbnail:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='360' viewBox='0 0 480 360'%3E%3Crect width='480' height='360' fill='%231e3a8a'/%3E%3Cpolygon points='240,180 300,150 300,210' fill='white'/%3E%3Ctext x='240' y='280' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3E6 Month Review%3C/text%3E%3C/svg%3E",
    videoId: "qbSHM0BbIAs",
  },
  {
    id: 3,
    title: "Apex Trader Funding Review - 6 Months Later",
    channel: "Sarah Trades",
    thumbnail:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='360' viewBox='0 0 480 360'%3E%3Crect width='480' height='360' fill='%231e3a8a'/%3E%3Cpolygon points='240,180 300,150 300,210' fill='white'/%3E%3Ctext x='240' y='280' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3E6 Month Review%3C/text%3E%3C/svg%3E",
    videoId: "1Qsht9krFhw",
  },
  {
    id: 4,
    title: "Apex Trader Funding Review - 6 Months Later",
    channel: "Sarah Trades",
    thumbnail:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='360' viewBox='0 0 480 360'%3E%3Crect width='480' height='360' fill='%231e3a8a'/%3E%3Cpolygon points='240,180 300,150 300,210' fill='white'/%3E%3Ctext x='240' y='280' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3E6 Month Review%3C/text%3E%3C/svg%3E",
    videoId: "f22p5nJdVIc",
  },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(youtubeVideos[0].videoId);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hear from our funded traders and see why Apex Trader Funding is the
            preferred choice for professional traders worldwide.
          </p>
        </div>
      </header>

      {/* Video Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Watch Their Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real traders share their journey from evaluation to funded
              accounts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  https://youtu.be/IjTd8WffpQI
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=0&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-96 lg:h-[480px]"
                  />
                </div>
              </div>
            </div>

            {/* Video Thumbnails List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                More Success Stories
              </h3>
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeVideo === video.videoId
                      ? "bg-blue-600 bg-opacity-10 border-2 border-blue-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveVideo(video.videoId)}
                >
                  <div className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-600 truncate">
                      {video.channel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Traders Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from our community of successful funded traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Comment Screenshot */}
                <div className="h-48 relative bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-700 my-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0D26FF] to-[#1e3a8a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-gray-300">Funded Traders</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
              <div className="text-gray-300">Total Payouts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their
            trading careers with Apex Trader Funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Start Your Evaluation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
