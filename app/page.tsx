import CoursesTitle from '@/components/courses/course-title';
import Courses from '@/components/courses/courses';
import Footer from '@/components/footer/footer';
import Hero from '@/components/hero/hero';
import JoinPlatForm from '@/components/join-platform/join-platform';
import NavBar from '@/components/nav-bar/nav-bar';
import SellingPoint from '@/components/selling-point/selling-point';
import Testimonial from '@/components/testimonials/testimonial';
import { NAV_BAR_ITEMS } from '@/constants';
import { generateCourses } from '@/test-data';

<<<<<<< HEAD
=======
// import SkillsList from "@/components/SkillsList";

>>>>>>> 6b7f0de (frontend not connected)
const courses = generateCourses(5);

export default function Home() {
  return (
    <div className='flex flex-col gap-[100px] pb-10'>
      <NavBar />
      <Hero />
      <div className='flex flex-col gap-5'>
        <CoursesTitle title='Popular' />
        <Courses courses={courses} />
      </div>
<<<<<<< HEAD
=======
      
      {/* Skills List Component
      <div className='mt-10'>
        <SkillsList />
      </div> */}

>>>>>>> 6b7f0de (frontend not connected)
      <SellingPoint />
      <Testimonial />
      <JoinPlatForm />
      <Footer links={NAV_BAR_ITEMS} />
    </div>
  );
}
