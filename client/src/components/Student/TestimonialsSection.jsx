import React from 'react'
import {assets, dummyTestimonial} from '../../assets/assets'
const TestimonialsSection = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <p>
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow">
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex gap-0.5 px-5 pt-3">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="h-4 w-4"
                  src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                  alt="star"
                />
              ))}
            </div>
            <p className="text-gray-500 mt-5 px-5">{testimonial.feedback}</p>
            <a href='#' className='text-blue-500 underline px-5'>Read more</a>
          </div>
          
        ))}
        
      </div>
    
    </div>
  );
};

export default TestimonialsSection;