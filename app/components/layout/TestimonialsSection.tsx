import { TypographyTypeI } from "../typography/TypographyTypeI";

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      {/* Heading in normal container */}
      <div className="">
        <TypographyTypeI
          text1="Testimonials"
          text2="Stories from Our Happy Users"
          text4="We serve over 10,000 customers across different platforms"
        />
      </div>

      {/* Testimonials grid breaks out to full width */}
      <div className="–mx-4 px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              img: "/app/assets/customer-1.png",
              quote:
                "Receiving payments instantly at zero cost has empowered me to focus on what I do best—teaching. I love the Eira.club app!",
              author: "Vijay, Bengaluru",
            },
            {
              img: "/app/assets/customer-2.png",
              quote:
                "Receiving payments instantly at zero cost has empowered me to focus on what I do best—teaching. I love the Eira.club app!",
              author: "Priya, Mumbai",
            },
            {
              img: "/app/assets/customer-3.png",
              quote:
                "Receiving payments instantly at zero cost has empowered me to focus on what I do best—teaching. I love the Eira.club app!",
              author: "Vijay, Bengaluru",
            },
            {
              img: "/app/assets/customer-1.png",
              quote:
                "Receiving payments instantly at zero cost has empowered me to focus on what I do best—teaching. I love the Eira.club app!",
              author: "Priya, Mumbai",
            },
          ].map(({ img, quote, author }, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* fixed-height image container */}
              <div className="w-full h-85">
                <img
                  src={img}
                  alt={`Testimonial by ${author}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* quote text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-white text-xs font-regular">{quote}</span>
                <span className="text-white text-xs font-regular">
                  {`— ${author}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
