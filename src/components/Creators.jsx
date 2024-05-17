import React from "react"
import TopSellers from "./topSellerCard"
import data from "../userData/topSellersData"

export default function Creators(){

    const topSellers = data.map( item => {
        return (
            <TopSellers 
                name = {item.name}
                photo = {item.photo}
                amount = {item.amount}
                items = {item.items} 
            />
        )
    })

   return ( 
        <section className="creators">
            <p className="auction-note">Creators</p>
            <h1 className="auctions-title">Top Sellers</h1>
            <div className="top-sellers-container">
                {topSellers}
            </div>
        </section>
   )
}