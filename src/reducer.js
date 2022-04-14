import React, { createContext, useContext } from "react";

export const MovieContext = createContext();



// context provider
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [search, setSearch] = React.useState("");
    const [modal, setModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    const applyFilter = async () => {
        if (search === "") {
            return;
        }
        setLoading(true);
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=eda1b5cd&s=${search}`
        );
        const data = await response.json();
        setMovies(data.Search);
        setLoading(false);
    };

    const clearButton = () => {
        setSearch("");
        setMovies([]);
    };

    const viewModal = (data) => {
        setModalData(data);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleDelete = (deleteIndex) => {
        const newList = movies.filter((movie, index) => index !== deleteIndex);
        setMovies(newList);
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                loading,
                error,
                search,
                setSearch,
                applyFilter,
                clearButton,
                viewModal,
                closeModal,
                handleDelete,
                modal,
                modalData,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}