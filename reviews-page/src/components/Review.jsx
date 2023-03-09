import React from 'react'
import '../stylesheets/Review.css'

function Review(props){
    return (
        <div className='review-container'>
            <img className='review-img' src={require(`../img/testimonio-${props.image}.png`)} 
                alt='Review picture' />
            <div className='text-container'>
                <p className='name-review'>{props.name} en {props.country}</p>
                <p className='work-position'>{props.position} en {props.company}</p>
                <p className='review-text'>{props.review}</p>
            </div>
        </div>
    )
}

export default Review