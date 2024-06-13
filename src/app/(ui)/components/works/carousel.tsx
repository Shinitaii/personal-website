'use client'
import Image from 'next/image';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
    items: Array<any>
}

const Carousel : React.FC<CarouselProps> = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };  
    
    return (
        <div className='flex h-full'>
            <FaChevronLeft size={20} onClick={handlePrev}/>
            
            <FaChevronRight size={20} onClick={handleNext}/>
        </div>
    )
}

export default Carousel;