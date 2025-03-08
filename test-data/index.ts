import { faker } from '@faker-js/faker';
import { SubSection, Section, Course, Video } from '@/types';
import { PROJECTS } from '@/constants';

// Function to generate a fake video
const generateVideo = (course_id: string, section_id?: string): Video => ({
  video_id: faker.datatype.uuid(),
  video_url: faker.internet.url(),
  course_id,
  section_id,
});

// Function to generate a fake subsection
const generateSubSection = (course_id: string, section_id: string): SubSection => ({
  title: faker.lorem.sentence(),
  video: generateVideo(course_id, section_id),
});

// Function to generate a fake section with multiple subsections
const generateSection = (course_id: string): Section => {
  const section_id = faker.datatype.uuid();
  return {
    section_id,
    course_id,
    section_title: faker.lorem.sentence(),
    sub_sections: Array.from(
      { length: faker.datatype.number({ min: 3, max: 10 }) },
      () => generateSubSection(course_id, section_id)
    ),
  };
};

// Function to generate a fake course with multiple sections
const generateCourse = (): Course => {
  const course_id = faker.datatype.uuid();
  return {
    course_id,
    course_name: faker.commerce.productName(),
    instructor_id: faker.datatype.uuid(),
    project_id: faker.datatype.uuid(),
    project_name: faker.helpers.arrayElement(PROJECTS).value,
    demo_video: generateVideo(course_id),
    category: faker.helpers.arrayElement([
      'Design',
      'Next.js',
      'FastAPI',
      'Express.js',
      'Prisma',
      'Spring Boot',
    ]),
    sections: Array.from(
      { length: faker.datatype.number({ min: 6, max: 20 }) },
      () => generateSection(course_id)
    ),
    description: faker.lorem.paragraph(),
    image_url: faker.image.imageUrl(),
    average_rating: parseFloat(faker.finance.amount(3, 5, 1)),
  };
};

// Function to generate multiple courses
export const generateCourses = (numCourses: number): Course[] =>
  Array.from({ length: numCourses }, () => generateCourse());

// Function to generate a fake sale
function generateFakeSale() {
  return {
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    amount: faker.finance.amount(),
  };
}

// Function to generate multiple fake sales
export const generateFakeSales = (count: number) =>
  Array.from({ length: count }, () => generateFakeSale());
