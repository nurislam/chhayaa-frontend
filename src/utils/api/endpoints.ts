const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const LOCAL_ENDPOINT = process.env.NEXT_INTERNAL_API_ENDPOINT;

export const API_ENDPOINTS = {
  COURSES: API_ENDPOINT + "courses",
  LESSONS: API_ENDPOINT + "lessons",
  INSTRUCTORS: API_ENDPOINT + "instructors",
  STUDENTS: API_ENDPOINT + "students",
  CATEGORIES: API_ENDPOINT + "categories",
};

export const LOCAL_ENDPOINTS = {
  COURSES: LOCAL_ENDPOINT + "courses",
  LESSONS: LOCAL_ENDPOINT + "lessons",
  INSTRUCTORS: LOCAL_ENDPOINT + "instructors",
  STUDENTS: API_ENDPOINT + "students",
  CATEGORIES: API_ENDPOINT + "categories",
};
