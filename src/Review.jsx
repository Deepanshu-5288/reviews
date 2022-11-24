import React, { useState } from 'react';
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {

    const [index, setIndex] = useState(0);
    const { name, job, image, text} = data[index];

    const checkPerson = (checkIndex) =>{
        if(checkIndex < 0){
            return data.length-1;
        }
        if(checkIndex > data.length -1){
            return 0;
        }
        return checkIndex;
    }

    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index +1;
            return checkPerson(newIndex);
        });
    }

    const prevPerson = () =>{
        setIndex((index) =>{
            let newIndex = index -1;
            return checkPerson(newIndex);
        });
    }

    const randomPerson = () =>{
        let newIndex = Math.floor(Math.random()*data.length);
        if(newIndex === index){
            newIndex++;
        }
        setIndex(checkPerson(newIndex));
    }
 
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className="person-img" />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
  )
}

export default Review