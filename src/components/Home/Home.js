import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "./../../redux/slice/courses";
import { Link } from "react-router-dom";
import "./home.css";
import BarLoader from "react-spinners/BarLoader";

function Home() {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log("State", state);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (state.courses.isLoading) {
    return (
      <div className="loader-container">
        <BarLoader color={"#364fd6"} loading={loading} size={100} />
      </div>
    );
  }

  const Filter = (event) => {
    setSearch(
      state.courses.data.filter((e) =>
        e.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  const filteredData = search.length > 0 ? search : state.courses.data;

  return (
    <>
      <div className="container my-5">
        <div className="search-bar my-3 d-flex align-items-center row">
          <div className="col-md-9 mb-2 mb-sm-0">
            <h2>Recommended courses for you</h2>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control search-input py-2"
              placeholder="Search Courses..."
              onChange={Filter}
            />
          </div>
        </div>
        <div className="row ">
          {filteredData &&
            filteredData.map((e) => (
              <div className="col-6 col-md-3 mb-2 g-3">
                <Link
                  to={`/details/${e.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card h-100 custom-card">
                    <img
                      src={e.thumbnailUrl}
                      className="card-img-top custom-card-img-top"
                      alt="thumbnail"
                    />
                    <div className="card-body">
                      {/* <h5 className="card-title">{e.title.substring(0, 20)}</h5> */}
                      <h5 className="text-dark custom-card-title">{e.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
