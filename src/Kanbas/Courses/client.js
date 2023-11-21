//don't want these server functions to be on front-end
import axios from "axios";

const COURSES_URL =
  "https://kanbas-node-server-app-t76m.onrender.com/api/courses"; //change to local4000 for local server

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses"); //promise is a callback
  // //console.log(promis);  //promise does not block single thread, will be executed once have a response
  // promise.then((response) => {
  //   console.log(response.data); //data is the array of todos
  //   setCourses(response.data); //setTodos is a function that will update the todos
  // });
  //https://kanbas-node-server-app-t76m.onrender.com

  const response = await axios.get(COURSES_URL); //newer syntax, compiles to above syntax
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(COURSES_URL, course);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${COURSES_URL}/${courseId}`);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${COURSES_URL}/${course._id}`,
    course
  );
  return response.data;
};

export const fetchCourse = async (courseId) => {
  //fetch course by id
  const response = await axios.get(
    `${COURSES_URL}/${courseId}`
  );
  return response.data;
};
