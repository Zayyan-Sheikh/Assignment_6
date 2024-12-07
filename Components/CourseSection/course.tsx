
import React from "react";
import Image from "next/image";

const categories = [
  { image: "/image/Frame 29.png", title: "Design & Development", description: "50+ Courses Available" },
  { image: "/image/Frame 2.png", title: "Marketing", description: "50+ Courses Available" },
  { image: "/image/Frame 3.png", title: "Development", description: "50+ Courses Available" },
  { image: "/image/Frame 4.png", title: "Communication", description: "50+ Courses Available" },
  { image: "/image/Frame 5.png", title: "Digital Marketing", description: "50+ Courses Available" },
  { image: "/image/Frame 6.png", title: "Self Development", description: "50+ Courses Available" },
  { image: "/image/Frame 7.png", title: "Business", description: "50+ Courses Available" },
  { image: "/image/Frame 8.png", title: "Finance", description: "50+ Courses Available" },
  { image: "/image/Frame 9.png", title: "Consulting", description: "50+ Courses Available" },
];

const CourseCategory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-bold text-[#000000]">Explore Courses By Category</h2>
        <p className="text-[18px] text-gray-600 mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-[32px] p-6 bg-[#F7F7F7] rounded-lg transition-all hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="category-image">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="mb-4"
              />
            </div>

            {/* Text Section */}
            <div className="category-text">
              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-gray-200">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseCategory;