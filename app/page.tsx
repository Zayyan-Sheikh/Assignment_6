import React from 'react';
import Header from '@/Components/Header/header';
import Footer from '@/Components/Footer/footer';
import Navbar from '@/Components/Navbar/navbar';
import HeroSection from '@/Components/HeroSection/hero';
import CourseSection from '@/Components/CourseSection/course';
import Achievement from '@/Components/Achievements/achievement';
import Courses from '@/Components/Courses/courses';
import TeamSection from '@/Components/TeamSection/team';
import CustomerTestimonial from '@/Components/CustomerTestimonial/customerTestimonial';

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