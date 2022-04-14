import "./styles.css";
import React, { useState, useContext } from "react";
import { FiSearch, GrUpdate } from "react-icons/all";
import { MovieContext } from "./reducer";
import MovieModal from "./MovieModal";


export default function App() {

  const { movies, loading, error, search, setSearch, applyFilter, clearButton, handleDelete } = useContext(MovieContext);

  const [modalData, setModalData] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const viewModal = (data) => {
    console.log(data);
    setModalData(data, setModalOpen(true));
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Filter List of the Movie Title</h1>
      <div className="filterSection">
        <div className="searchBox">
          <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <FiSearch />
        </div>
        <button className="filterButton btn" onClick={applyFilter}>Apply</button>
        <button className="clearButton btn" onClick={clearButton}>Clear</button>
      </div>
      <div className="movieList">
        {loading ? (
          <div className="loader">
            loading...
          </div>
        ) : (
          <div className="movieList">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>MovieTitle</th>
                  <th>MoviePoster</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{movie.Title}</td>
                    <td>
                      {movie.poster}
                    </td>
                    <td className="deleteBtn" onClick={() => handleDelete(index)}>
                      Delete
                    </td>
                    <td>
                      <div className="viewBtn" onClick={() => viewModal(movie.Title)}>
                        <GrUpdate />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {modalOpen && <MovieModal data={modalData} closeModal={closeModal} />}
      </div>
    </div>
  );
}
