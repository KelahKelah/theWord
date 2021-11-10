import React from "react";
import './pagination.css'

const Pagination = () => {
    return(
        <div className="pagination">
            <button className="previous" href="#">Prev</button>
            <button href="#">1</button>
            <button href="#" className="active">2</button>
            <button href="#">3</button>
            <button className="next" href="#">Next</button>
        </div>
    )
}

export {Pagination}