import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from "./course_list";

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));

    }, []);


    return (
        <>
            <h2>Courses</h2>
            <CourseList courses={courses} />
        </>
    );
}


export default CoursesPage;