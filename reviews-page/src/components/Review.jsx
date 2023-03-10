import React from 'react'
import '../stylesheets/Review.css'

function Review(props){
    return (
        <div className='review-container'>
            <img className='review-img' src={require(`../img/testimonio-${props.image}.png`)} 
                alt={`Picture of ${props.image}`} />
            <div className='text-container'>
                <p className='name-review'><strong>{props.name}</strong> en {props.country}</p>
                <p className='work-position'>{props.position} en <strong>{props.company}</strong></p>
                <p className='review-text'>{props.review}</p>
            </div>
        </div>
    )
}

export default Review