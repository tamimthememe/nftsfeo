import React from "react"
import Card from "./Card"
import data from "../userData/auctionsData"

export default function Auctions(){
    

    const [amount, setAmount] = React.useState(4)
    const [showButton, setShowButton] =React.useState("Explore More")


    function loadMore(){
        if(showButton === "Explore More"){
            setShowButton("Show Less")
            setAmount(data.length)
        } else{
            setAmount(4)
            setShowButton("Explore More")
        }
    }

    let newData = data.slice(0, amount)
    const auctions = newData.map(item => {
        return (
            <Card 
                title = {item.title}
                image = {item.image}
                likes = {item.likes}
                price = {item.price}
                countdown={item.countdown}
                userPhoto = {item.userPhoto}
                username = {item.username}
            />
        )
    })

    return (
        <section className= "auctions">
            <p className="auction-note">Auctions</p>
            <h1 className="auctions-title">Live Auctions</h1>
            <div className="cards">
                {auctions}
            </div>
            <button onClick={loadMore} className="explore-more-btn">{showButton}</button>
        </section>
    )
}