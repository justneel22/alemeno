import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "./../../redux/slice/courses";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (state.courses.isLoading) {
    return <h1>Loading....</h1>;
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
      <div className="container my-5 text-center">
        <div className="search-bar my-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={Filter}
          />
        </div>
        <div className="row ">
          {filteredData &&
            filteredData.map((e) => (
              <div className="col-md-4">
                <Link to={`/details/${e.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card mb-5">
                    <img
                      src={e.thumbnailUrl}
                      className="card-img-top"
                      alt="thumbnail"
                    />
                    <div className="card-body">
                      {/* <h5 className="card-title">{e.title.substring(0, 20)}</h5> */}
                      <h5 className="card-title text-dark">{e.title}</h5>
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
