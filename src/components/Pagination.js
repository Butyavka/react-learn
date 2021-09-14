import React from "react";
import {getPagesArray} from "../utils/pages";

const Pagination = ({totalPages, page, setPage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="pagination">
            {pagesArray.map(p => {
                return(<button onClick={() => setPage(p)} key={p} className={page === p ? 'pagination__button pagination__button--current' :
                                                                                          'pagination__button'}>{p}</button>)
            })}
        </div>
    )
}
export default  Pagination