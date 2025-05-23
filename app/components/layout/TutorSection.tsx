import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

interface Tutor {
  id: number;
  name: string;
  photo: string;
  introduction: string;
  rating: number;
  subjects: string[];
  hourlyRate: number;
  bookSessionLink: string;
}

const tutors: Tutor[] = [
  {
    id: 1,
    name: "Ajay Seth",
    photo: "/assets/Ajay-Bihari-Seth.jpg",
    introduction:
      "IIT Delhi graduate with 20+ years of experience in teaching Mathematics for IIT-JEE and NEET. Specializes in Calculus, Algebra, and Trigonometry. Successfully mentored 500+ students to clear competitive exams.",
    rating: 4.9,
    subjects: ["IIT-JEE Mathematics", "NEET Physics", "CBSE Advanced"],
    hourlyRate: 0,
    bookSessionLink: "https://app.eira.club/ajay-tqvr6",
  },
  {
    id: 2,
    name: "Kanchan Vyas",
    photo: "/assets/Kanchan-Vyas.png",
    introduction:
      "Dynamic Computer Science educator with 5+ years of experience in teaching programming and software development. Specializes in modern web technologies, Data Structures, and Algorithms. Successfully guided 200+ students in their tech careers and competitive programming.",
    rating: 4.8,
    subjects: ["Web Development", "DSA", "Placement Preparation"],
    hourlyRate: 0,
    bookSessionLink: "https://app.eira.club/ajay-tqvr6",
  },
  {
    id: 3,
    name: "Sunidhi Katiyar",
    photo: "/assets/Sunidhi-Katiyar.jpg",
    introduction:
      "Experienced English and Communication Skills trainer. Specializes in IELTS, TOEFL, and English for competitive exams. Helps students excel in verbal ability and communication skills.",
    rating: 4.9,
    subjects: ["IELTS", "TOEFL", "Verbal Ability"],
    hourlyRate: 0,
    bookSessionLink: "https://app.eira.club/ajay-tqvr6",
  },
];

export default function TutorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tutors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tutors.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl text-gray-900 sm:text-4xl">
            Top Eira Teachers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn from India&apos;s top educators and exam experts
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tutors.map((tutor) => (
                <div key={tutor.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover md:w-48"
                          src={tutor.photo}
                          alt={tutor.name}
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {tutor.name}
                          </h3>
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <span className="ml-1 text-gray-600">
                              {tutor.rating}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600">
                          {tutor.introduction}
                        </p>
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {tutor.subjects.map((subject) => (
                              <span
                                key={subject}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={() =>
                              window.open(tutor.bookSessionLink, "_blank")
                            }
                            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                          >
                            Book Session
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {tutors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-primary-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
