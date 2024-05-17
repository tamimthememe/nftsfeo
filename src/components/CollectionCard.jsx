import React from "react"

export default function CollectionCard(props){
    return (
        <div className="collection-card">
            <img 
                src= {props.image}
                className="collection-photo"
            />
            <div className="collection-info">
                <p classsName="collection-Name">{props.name}</p>
                <p className="collection-code">{props.code}</p>
            </div>
        </div>
    )
}