import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { fetchCourses } from "./../../redux/slice/courses";
import { courseModel1, courseModel2, courseModel3 } from "../../courseModels";
import "./details.css";

function Details() {
  const { id } = useParams();

  const courseModels = {
    1: courseModel1,
    2: courseModel2,
    3: courseModel3,
  };

  const selectedCourse = courseModels[id];
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // console.log("State", state);
  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, [dispatch]);

  // if (state.courses.isLoading) {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <>
      {/* {state.courses.data && <h1>hi{state.courses.data[0].title}</h1>} */}
      {selectedCourse && (
        <div className="container-fluid p-0 mb-5">
          <div className="position-relative">
            {/* Image with black overlay */}
            <img
              src={selectedCourse.thumbnail}
              alt="Thumbnail"
              className="w-100"
              style={{ objectFit: "cover", height: "auto", maxHeight: "500px" }}
            />
            <div className="overlay"></div>
            {/* Course name and instructor name */}
            <div className="container position-absolute start-0 text-white header-container">
              <div className="row">
                <div className="col">
                  <h1 className="mb-2 fw-bolder">{selectedCourse.name}</h1>
                  <h4 className="">Instructor: {selectedCourse.instructor}</h4>
                  <button
                    type="button"
                    class="btn btn-light py-3 px-4 fw-bold mt-3"
                  >
                    Enroll For Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div>
                  <h3 className="mb-3">Course Details</h3>
                  <table className="table table-striped bg-light">
                    <tbody>
                      <tr>
                        <th>Description</th>
                        <td>{selectedCourse.description}</td>
                      </tr>
                      <tr>
                        <th>Enrollment Status</th>
                        <td>{selectedCourse.enrollmentStatus}</td>
                      </tr>
                      <tr>
                        <th>Course duration</th>
                        <td>{selectedCourse.duration}</td>
                      </tr>
                      <tr>
                        <th>Schedule</th>
                        <td>{selectedCourse.schedule}</td>
                      </tr>
                      <tr>
                        <th>Location</th>
                        <td>{selectedCourse.location}</td>
                      </tr>
                      <tr>
                        <th>Prerequisites</th>
                        <td>{selectedCourse.prerequisites.join(", ")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <h3 className="mb-3">Syllabus</h3>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {selectedCourse.syllabus.map((e, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`flush-heading${index}`}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`#flush-collapse${index}`}
                        >
                          WEEK {e.week}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${index}`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <h1 className="fs-4">{e.topic}</h1>
                          <p>{e.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
