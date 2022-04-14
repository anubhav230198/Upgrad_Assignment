import React from 'react'
import { MovieContext } from './reducer'
import { createContext, useContext } from 'react';
const MovieModal = ({ data, closeModal }) => {

    const moviename = data;
    return (
        <div className="modalOverlay">
            <div className="modal">
                <div className="modalTitle">
                    <h2 className='title'>Update Movie Name</h2>
                    <div className="modalContent">
                        <input type="text" value={moviename} />
                        <div>
                            <button className='btn' onClick={closeModal}>Cancel</button>
                            <button className='btn' onClick={closeModal}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieModal