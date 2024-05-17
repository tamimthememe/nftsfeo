import React from "react"
import upvoteIcon from '../images/upvotes.png'
import shoppingBag from '../images/shoppingBag.png'
import heartIcon from '../images/heart-icon.png'

export default function ExploreCard(props){
    return (
            <div className="auction-card">
                <div className="photo-container">
                    <img
                        className="auction-card-photo" 
                        src={props.mainPhoto}
                        alt="Explore Photo"
                    />
                    <p className="countdown">{props.countdown}</p>
                </div>
                <div className="card-detail-header">
                    <p className="auction-card-title">{props.title}</p>
                    <div className="likes-container">
                        <img src={heartIcon} alt="heart icon" className="heart-icon" />
                        <p className="auction-card-likes">{props.likes}</p>
                    </div>
                </div>
                <div className="auction-card-user">
                    <div className="people-images">
                        <img 
                            src={props.userPhoto1} 
                            alt="user photo" 
                            className="auction-card-user-photo photo1" 
                        />
                        <img 
                            src={props.userPhoto2} 
                            alt="user photo" 
                            className="auction-card-user-photo photo2" 
                        />
                        <img 
                            src={props.userPhoto3} 
                            alt="user photo" 
                            className="auction-card-user-photo photo3" 
                        />
                    </div>
                    <p className="auction-card-username">{props.bids}+ People place bit</p>
                </div>
                <div className="upload-info">
                    <p className="owned-by">owned by <span className="uploader">{props.owner}</span></p>
                    <div className="upload-upvotes">
                        <img src={upvoteIcon} className="upvote-icon"/>
                        <p className="price-info">{props.price}</p>
                    </div>  
                </div>
                <div className= "explore-card-price">
                    <img src={shoppingBag} className="shopping-icon"/>
                    <p className="place-bid-text">Place a bid</p>
                </div>
            </div>
    )
}