import React from 'react'
import ExploreCard from './ExploreCard'
import data from '../userData/exploreData'

export default function Explore(){


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

    const exploreItems = newData.map(item =>{
        return (
            <ExploreCard 
                mainPhoto = {item.mainPhoto}
                countdown = {item.countdown}
                title = {item.title}
                likes = {item.likes}
                userPhoto1 = {item.userPhoto1}
                userPhoto2 = {item.userPhoto2}
                userPhoto3 = {item.userPhoto3}
                bids = {item.bids}
                owner = {item.owner}
                price = {item.price}
            />
        )
    })

    return (
        <section className="exclusive">
            <p className="auction-note">Exclusive Assets</p>
            <div className="title-filters">
                <h1 className="explore-title">Explore</h1>
                <div className="filters">
                    <p className= "filter no-desktop">Filters</p>
                    <p className= "filter active no-phone">All NFTs</p>
                    <p className= "filter no-phone">Art</p>
                    <p className= "filter no-phone">Collectibles</p>
                    <p className= "filter no-phone">Virtual Worlds</p>
                    <p className= "filter no-phone">Trading Cards</p>
                </div>      
            </div>
            <div className="cards">
                {exploreItems}
            </div>
            <button onClick={loadMore} className="explore-more-btn">{showButton}</button>       
        </section> 
    )
}