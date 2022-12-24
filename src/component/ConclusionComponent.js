import '../assets/styles/conclusionStyles.css';
import React, { useRef, useEffect } from 'react';

export default function ConclusionComponent() {
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
                threshold: 0.01 // Percentage of the target that should be visible before triggering the callback
            }
        );
        observer.observe(currentDiv);

        // Clean up the observer when the component unmounts
        return () => {
            observer.unobserve(currentDiv);
        };
    }, []);
    return (
        <div className="conclusion" id="conclusion" >
            <div className='text' ref={divRef}>
                <h3>Conclusion</h3>
                The availability of expert radiologists will ensure the proper
                diagnosis of any kind of thoracic disease. Therefore, automated
                models will be beneficial to enhance the medical
                adeptness in domains where the accessibility of radiotherapists
                is still limited. In this direction, this paper proposed PneumoGAN
                - a deep learning based framework for diagnosing
                and classifying Pneumonia from X-ray images of chest. The
                proposed model yielded an admirable accuracy of 86.62% and
                the experimental results of our model indicate the fact that
                it outperforms other existing deep learning based methods.
                Moreover, this improved efficiency is achieved with no extra
                training data of chest radiography. Hence, this work can be
                easily extended to the diagnosis of certain other diseases
                such as COVID-19 where the number of training samples
                are limited. As a future work, we hope to add more models
                and create an ensemble of models to further ameliorate the
                performance.
            </div>
        </div>
    );
}