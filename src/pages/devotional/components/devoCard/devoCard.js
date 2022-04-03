import React from "react";
import { Right } from '../../../../assets/svgs'
import './devoCard.css'

const DevoCard = ( {cardName, listCount} ) => {

    return(
        <>
            <div className="devoCard-wrapper">
                <Right />
                <h6>{cardName}</h6>
                <div>
                    <p>{`${listCount} bible scriptures`}</p>
                </div>
            </div>
        </>
    )
}
export { DevoCard };