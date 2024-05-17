import React from "react"

export default function TopSellers(props){
    return (
        <div className="top-seller-card">
            <img src={props.photo} className="top-seller-photo"/>
            <div className="top-seller-info">
                <p className="top-seller-name">{props.name}</p>
                <p className="top-seller-amount">{props.amount}</p>
            </div>
            <hr className="top-seller-line" />
            <div className="top-seller-item-info">
                <p className="total-items">{props.items}</p>
                <p className="top-seller-item-text">Items</p>
            </div>
        </div>
    )
}