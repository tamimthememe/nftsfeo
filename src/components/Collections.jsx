import React from "react"
import CollectionCard from "./CollectionCard"
import data from "../userData/collectionData"


export default function Collections(){
    
    const collections = data.map(item => {
        return (
            <CollectionCard 
                name = {item.name}
                code = {item.code}
                image = {item.image}
            />
        )
    })
    
    return (
        <section className="auctions">
            <p className="auction-note">Browse By Category</p>
            <h1 className="auctions-title">Popular Collections</h1>
            <div className="cards">
                {collections}
            </div>
        </section>
    )
}