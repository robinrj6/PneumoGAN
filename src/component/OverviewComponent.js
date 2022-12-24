import '../assets/styles/overviewStyles.css';
import React, { useRef, useEffect } from 'react';

export default function OverviewComponent() {
    const divRef = useRef(null);

    useEffect(() => {
        const currentDiv = divRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // The div element is in the viewport
                    currentDiv.classList.add('fadeIn');
                } else {
                    // The div element is not in the viewport
                    currentDiv.classList.remove('fadeIn');
                }
            },
            {
                root: null, // The element that is used as the viewport
                rootMargin: '0px', // Margin around the root
                threshold: 0.1 // Percentage of the target that should be visible before triggering the callback
            }
        );
        observer.observe(currentDiv);

        // Clean up the observer when the component unmounts
        return () => {
            observer.unobserve(currentDiv);
        };
    }, []);
    return (
        <div className="overview" id="overview" >
            <div className='text' ref={divRef}>
                <h3>Overview</h3>
                Our system entirely focuses on classifying pneumonia infected images as well as non-infected normal images from 
                chest x-rays of patients which are provided as the input to the system. A user-friendly UI has been set up in order 
                to effectively interact with the system. Systematic use of generative adversarial networks together with convolutional 
                neural networks has resulted in a productive pneumonia detection system that is simple and feasible. Moreover, the use 
                of various performance parameters based on confusion matrix for assessment availed in thorough comprehension of this 
                system by providing the ROC curve associated with validation accuracy.
            </div>
        </div>
    );
}