import React from "react"
import WorksCard from "./WorksCard"
import data from '../userData/worksData' 

export default function HowItWorks(){
    const works = data.map(item => {
        return (
            <WorksCard 
                title={item.title}
                desc={item.desc}
            />
        )
    }
    )

    return (
        <section className="auctions">
            <p className="auction-note">How it Works</p>
            <h1 className="auctions-title">Create & sell your NFTs</h1>
            <div className="cards">
                {works}
            </div>
        </section>
    )
}