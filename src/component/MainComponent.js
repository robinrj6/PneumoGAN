import '../assets/styles/mainStyles.css';
import AbstractComponent from './AbstractComponent';
import React, { useRef, useEffect } from 'react';
import OverviewComponent from './OverviewComponent';
import ConclusionComponent from './ConclusionComponent';
import ArchiComponent from './ArchiComponent';


export default function MainComponent() {

    const divRef = useRef(null);
    useEffect(() => {
        const currentDiv = divRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // The div element is in the viewport
                    currentDiv.style.transform = 'scale(1)';
                    // divRef.current.style.transition = 'none';
                } else {
                    // The div element is not intersecting with the viewport
                    currentDiv.style.animation = 'ZoomIn 1s'
                    currentDiv.style.transition = 'transform 1s';
                    currentDiv.style.transform = 'scale(1.2)';

                }
            },
            {
                root: null, // The element that is used as the viewport
                rootMargin: '0px', // Margin around the root
                threshold: 1// Percentage of the target that should be visible before triggering the callback
            }
        );
        observer.observe(currentDiv);

        // Clean up the observer when the component unmounts
        return () => {
            observer.unobserve(currentDiv);
        };
    }, []);
    return (
        <div className='wrapper'>
            <div className='home' id='home'>
                <h1 className='name' ref={divRef}>
                    PneumoGAN
                </h1>
            </div>
            <AbstractComponent />
            <OverviewComponent />
            <ArchiComponent />
            <ConclusionComponent />
        </div>
    );

}