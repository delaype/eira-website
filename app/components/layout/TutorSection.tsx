import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

interface Tutor {
  id: string;
  name: string;
  rating: number;
  subjects: string[];
  websiteLink: string;
}

const tutorList: Tutor[] = [
  {
    id: "be5590e0-3056-4e48-833f-18d78f3e43aa",
    name: "Madhu Sudhan Mundrathi",
    websiteLink: "https://app.eira.club/mundrathi-zfqcq",
    rating: 4.9,
    subjects: ["IIT-JEE Mathematics", "NEET Physics", "CBSE Advanced"]
  },
  {
    id: "f5e38848-1865-4840-992c-09ab7a29f992",
    name: "Tajinder Kaur",
    websiteLink: "https://app.eira.club/tajinder-aguf3",
    rating: 4.7,
    subjects: ["IIT-JEE Mathematics", "IIT-JEE Chemistry", "NEET Physics"]
  },
  {
    id: "7c2a10a4-6a72-47a9-b869-9a4226a3cd12",
    name: "Harbhajan Kaur",
    websiteLink: "https://app.eira.club/harbhajan-l4qlp",
    rating: 4.8,
    subjects: ["Web Development", "DSA", "Placement Preparation"]
  },
  {
    id: "55b08b1d-601d-4e58-8bb3-f3c3cea0097e",
    name: "Guddu Kumar",
    websiteLink: "https://app.eira.club/guddu-nvgtg",
    rating: 4.6,
    subjects: ["IIT-JEE Physics", "NEET Physics", "CBSE Advanced"]
  },
  {
    id: "8948d566-0846-4df3-9d2b-7a200cd446fc",
    name: "Thamarai Selvan Sekar",
    websiteLink: "https://app.eira.club/thamarai-l59uv",
    rating: 4.9,
    subjects: ["IELTS", "TOEFL", "Verbal Ability"]
  },
  {
    id: "f65670c6-8828-4d40-a2df-14220bd973be",
    name: "Gursewak Singh",
    websiteLink: "https://app.eira.club/gursewak-cle5s",
    rating: 4.5,
    subjects: ["Python Programming", "Machine Learning", "Data Structures"]
  },
  {
    id: "f59f44a4-68f8-4c45-bbdf-3cb1e20ac737",
    name: "Urvashi Thakur",
    websiteLink: "https://app.eira.club/urvashi-mg0mg",
    rating: 4.8,
    subjects: ["Computer Science", "Algorithms", "DSA"]
  },
  {
    id: "1b260a26-29bc-42a3-a042-d7f55073d93f",
    name: "Ansari Zeeshan Mahtab Alam",
    websiteLink: "https://app.eira.club/ansari-vrl6y",
    rating: 4.7,
    subjects: ["IIT-JEE Mathematics", "CBSE Advanced", "IIT-JEE Physics"]
  },
  {
    id: "086dba36-47d3-4149-8345-2a0f74904a29",
    name: "Gudisa Sudharshan Reddy",
    websiteLink: "https://app.eira.club/gudisa-ufrtr",
    rating: 4.9,
    subjects: ["Node.js", "Web Development", "React Development"]
  },
  {
    id: "5042559d-430c-4907-9295-b24f0d46fe4c",
    name: "Shalini Saxena",
    websiteLink: "https://app.eira.club/shalini-2ltfo",
    rating: 4.6,
    subjects: ["NEET Biology", "CBSE Advanced", "IIT-JEE Chemistry"]
  },
  {
    id: "6b6f4c48-b669-4a13-8ba7-d20518838909",
    name: "Ajay Seth",
    websiteLink: "https://app.eira.club/ajay-tqvr6",
    rating: 4.9,
    subjects: ["IIT-JEE Mathematics", "IIT-JEE Physics", "IIT-JEE Chemistry"]
  },
  {
    id: "1b30b2a7-e165-4204-831e-e6d174964edc",
    name: "Kanchan Vyas",
    websiteLink: "https://app.eira.club/kanchan-y0jgw",
    rating: 4.8,
    subjects: ["Placement Preparation", "Algorithms", "DSA"]
  }
]

export default function TutorSection() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile: 1 item per page
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        // Tablet: 2 items per page
        setItemsPerPage(2);
      } else {
        // Desktop: 3 items per page
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(tutorList.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
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
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * itemsPerPage;
                const pageTutors = tutorList.slice(
                  start,
                  start + itemsPerPage
                );

                return (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 flex"
                  >
                    {pageTutors.map((tutor) => (
                      <div
                        key={tutor.id}
                        className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
                      >
                        <div className="h-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col">
                          <div className="flex justify-center mb-4">
                          <img 
                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(tutor.name)}`} 
                            alt={tutor.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                          />
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 truncate">
                              {tutor.name}
                            </h3>
                            <div className="flex items-center flex-shrink-0">
                              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                              <span className="ml-1 text-sm sm:text-base text-gray-600">
                                {tutor.rating}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex flex-col gap-2">
                              {tutor.subjects.map((subject) => (
                                <div
                                  key={subject}
                                  className="w-fit items-center px-3 py-1 rounded-full text-xs font-normal bg-blue-100 text-blue-800"
                                >
                                  {subject}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-auto pt-4 sm:pt-5 flex justify-center">
                            <button
                              onClick={() =>
                                window.open(tutor.websiteLink, "_blank")
                              }
                              className="bg-primary-600 text-white px-4 sm:px-6 py-2 text-xs sm:text-xs rounded-full hover:bg-primary-700 transition-colors w-auto sm:w-auto"
                            >
                              Book Session
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
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
          {Array.from({ length: totalPages }).map((_, index) => (
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
