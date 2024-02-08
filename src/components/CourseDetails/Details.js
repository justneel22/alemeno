import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { fetchCourses } from "./../../redux/slice/courses";
import { courseModel1, courseModel2, courseModel3 } from "../../courseModels";

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
        <div className="container text-center">
          <img src={selectedCourse.thumbnail} alt="Thumbnail" />
          <h1>Course name: {selectedCourse.name}</h1>
          <h2>Instructor's name: {selectedCourse.instructor}</h2>
          <p>Description: {selectedCourse.description}</p>
          <p>Enrollment Status: {selectedCourse.enrollmentStatus}</p>
          <p>Course duration: {selectedCourse.duration}</p>
          <p>Schedule: {selectedCourse.schedule} </p>
          <p>Location: {selectedCourse.location} </p>
          <div>
            {/* <span>
              Prerequisites:
              {selectedCourse.prerequisites.map((e, index) => (
                <span key={index}>
                  {e}
                  {index !== selectedCourse.prerequisites.length - 1 &&
                    ", "}{" "}
                </span>
              ))}
            </span> */}
            <span>
              Prerequisites: {selectedCourse.prerequisites.join(", ")}
            </span>
          </div>
          <h1>Syllabus</h1>
          {selectedCourse.syllabus.map((e, index) => (
            <div className="accordion" key={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    WEEK {e.week}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  // data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h1>{e.topic}</h1>
                    <p>{e.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Details;
