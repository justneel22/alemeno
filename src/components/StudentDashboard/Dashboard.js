import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  courseModel1 as Course1,
  courseModel2 as Course2,
  courseModel3 as Course3,
} from "../../courseModels";
import "./dashboard.css";

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
          <div key={index} className="course-card">
            <div className="card mt-3 p-3">
              <Link
                to={`/details/${course.id}`}
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <div className="row g-3 mb-2">
                  <div className="col-2">
                    {" "}
                    <img
                      src={course.thumbnailUrl}
                      alt="thumbnail"
                      className="card-img-top h-100 w-100"
                      style={{borderRadius:"6px"}}
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0">{course.name}</h4>
                    <p className="m-0">Instructor Name: {course.instructor}</p>
                    {!course.completed && (
                      <p className="m-0" id="DueDate">
                        Due Date: {course.dueDate}
                      </p>
                    )}
                  </div>
                </div>
              </Link>

              {!course.completed && (
                <div
                  id="ProgressBar"
                  className="progress my-2"
                  style={{ height: "6px" }}
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

              <div className="row">
                <div className="col-md-6">
                  {!course.completed ? (
                    <span>
                      <input
                        type="checkbox"
                        checked={course.completed}
                        onClick={() => handleCheckboxChange(index)}
                        id="check"
                      />
                      <label className="ps-2">Mark course as completed</label>
                    </span>
                  ) : (
                    <p className="m-0">
                      <Link
                        className="link-primary link-custom"
                        checked={course.completed}
                        onClick={() => handleCheckboxChange(index)}
                      >
                        Continue Where You Left Off &#10140;
                      </Link>
                    </p>
                  )}
                </div>
                <div className="col-md-6">
                  <p className="text-end m-0">
                    Course Progress: {course.completed ? "Completed" : "50%"}
                  </p>
                </div>
              </div>
            </div>
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
      <div className="container my-5">
        <h1 className="text-center mb-5">My Dashboard</h1>
        <div className="row g-3">
          <div className="col-md-8">
            <div className="card mb-3 p-3 card-custom">
              {/* Pending Courses */}
              <div>
                <h4>Pending Courses</h4>
                <div>{pendingCourses}</div>
              </div>
            </div>
            <div className="card p-3 card-custom">
              {/* Completed Courses */}
              <div>
                <h4>Completed Courses</h4>
                <div>{completedCourses}</div>
              </div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="col-md-4">
            <div className="card card-custom">
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
                  <button type="button" className="btn btn-primary">
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
