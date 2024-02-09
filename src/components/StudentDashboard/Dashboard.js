import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  courseModel1 as Course1,
  courseModel2 as Course2,
  courseModel3 as Course3,
} from "../../courseModels";

function Dashboard() {
  const [courses, setCourses] = useState([
    { ...Course1, completed: false },
    { ...Course2, completed: true },
    { ...Course3, completed: true },
  ]);

  useEffect(() => {
    // Initial rendering of courses
    renderCourses();
  }, []); // Empty dependency array ensures the useEffect runs only once on mount

  // Function to render course cards
  function renderCourses() {
    return courses.reduce(
      (courseGroups, course, index) => {
        const progressBarWidth = course.completed ? "100%" : "50%";

        const courseCard = (
          <div key={index} className="course-card ">
            <Link to={`/details/${course.id}`} style={{ textDecoration: 'none' }} className="text-dark">
              <div className="card my-5 p-5">
                <img
                  src={course.thumbnailUrl}
                  alt="thumbnail"
                  className="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                />
                <p>Course Name: {course.name}</p>
                <p>Instructor Name: {course.instructor}</p>
                {!course.completed && (
                  <p id="DueDate">Due Date: {course.dueDate}</p>
                )}
                <p>Course Progress: {course.completed ? "Completed" : "50%"}</p>
                {!course.completed && (
                  <div
                    id="ProgressBar"
                    className="progress"
                    style={{ height: "5px" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: progressBarWidth }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                )}
                {!course.completed ? (
                  <span>
                    <input
                      type="checkbox"
                      checked={course.completed}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label className="px-3">Mark course as completed</label>
                  </span>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    checked={course.completed}
                    onClick={() => handleCheckboxChange(index)}
                  >
                    Continue where you left off
                  </button>
                )}
              </div>
            </Link>
          </div>
        );

        course.completed
          ? courseGroups.completedCourses.push(courseCard)
          : courseGroups.pendingCourses.push(courseCard);

        return courseGroups;
      },
      { pendingCourses: [], completedCourses: [] }
    );
  }

  // Handle checkbox change
  function handleCheckboxChange(index) {
    const updatedCourses = [...courses];
    updatedCourses[index].completed = !updatedCourses[index].completed;
    setCourses(updatedCourses);
  }

  const { pendingCourses, completedCourses } = renderCourses();

  return (
    <>
      <div className="container">
        <h1 className="text-center">Student Dashboard</h1>
        <div className="row">
          <h2>Enrolled Courses</h2>
          <div className="col-md-8">
            <div className="card mb-5 p-2">
              {/* Pending Courses */}
              <div>
                <h2>Pending Courses</h2>
                <div>{pendingCourses}</div>
              </div>
            </div>
            <div className="card p-5">
              {/* Completed Courses */}
              <div>
                <h2>Completed Courses</h2>
                <div>{completedCourses}</div>
              </div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Subscription Status</h5>
                <p className="card-text">
                  Available until{" "}
                  <span>
                    <b>30th June, 2024</b>
                  </span>
                  .
                </p>
                <Link to="/">
                  <button type="button" className="btn btn-secondary">
                    Find a Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
