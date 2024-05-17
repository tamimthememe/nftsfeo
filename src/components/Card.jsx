import React from "react"
import heartIcon from "../images/heart-icon.png"
import avatarImg from "../images/avatar.jpg"


export default function Card(props){

    return (
        <div className="auction-card">
            <div className="photo-container">
                <img
                    className="auction-card-photo" 
                    src={props.image}
                    alt="Auction Photo"
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
                <img 
                    src={avatarImg} 
                    alt="user photo" 
                    className="auction-card-user-photo" 
                />
                <p className="auction-card-username">@{props.username}</p>
            </div>
            <div className= "auction-card-price">
                <p className="price-title">Price</p>
                <p className="price-info">{props.price}</p>
            </div>
        </div>
    )
}