import React from "react"
import { devoImg } from "../../assets/images"
import { DevoCard } from './components/devoCard/devoCard'
import "./devotional.css"

const Devotional = () => {
    const cardNames = [
        {id: 1, cardName: "Faith", listCount: 3},
        {id: 2, cardName: "Millenial", listCount: 7},
        {id: 3, cardName: "Giving", listCount: 2},
        {id: 4, cardName: "Love", listCount: 10},
        {id: 5, cardName: "Faith", listCount: 23},
        {id: 6, cardName: "Faith", listCount: 63},
    ]

    return(
        <div className="dev-wrapper">
            <section>
                <img className="dev-img" src={devoImg} alt="bible" />
                <h3>Get Bible verses for various topics</h3>
            </section>

            <section className="dev-card-group-container">
                <div className="dev-card-group-row">
                        {
                            cardNames.map((ele, ind) => {
                                return(
                                <DevoCard key={ind} cardName={ele.cardName} listCount={ele.listCount} />
                                )
                            })
                        }
                </div>
            </section> 
            
        </div>
    )
}
export { Devotional }
