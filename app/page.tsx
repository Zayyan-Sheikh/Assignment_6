import React from 'react';
import Header from '@/app/Components/Header/header';
import Footer from '@/app/Components/Footer/footer';
import Navbar from '@/app/Components/Navbar/navbar';
import HeroSection from '@/app/Components/HeroSection/hero';
import CourseSection from '@/app/Components/CourseSection/course';
import Achievement from '@/app/Components/Achievements/achievement';
import Courses from '@/app/Components/Courses/courses';
import TeamSection from '@/app/Components/TeamSection/team';
import CustomerTestimonial from '@/app/Components/CustomerTestimonial/customerTestimonial';

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <CourseSection/>
      <Achievement/>
      <Courses/>
      <TeamSection/>
      <CustomerTestimonial/>
      <Footer/>
    </div>
    
  );
}