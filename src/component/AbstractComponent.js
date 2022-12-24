import React, { useRef, useEffect } from 'react';
import '../assets/styles/abstractStyles.css';

export default function AbstractComponent() {
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
        <div className='abstract' id='abstract' >
            <div className='text' ref={divRef}>
                <h3>Abstract</h3>
                In recent years, several models based on deep learning have been proposed for the identification of Pneumonia from X-ray image of lungs. Lack of datasets with appropriate number of training images is the major challenge faced by these automated models. In this paper, we propose a model called PneumoGAN that not only augments the training dataset by generating enough number of chest X-ray images from random noise but also has the ability to detect pneumonia from a previously unseen image. The proposed model is inspired from Generative Adversarial Networks (GANs). The discriminator of the proposed PneumoGAN model involves five layers while the generator has six layers in it. The experimental results demonstrate the fact that PneumoGAN has precision, recall and F1 score of 87.71%, 91.4% and 89.52% respectively on benchmark datasets. Moreover, an AUC value of 85% is yielded by the proposed approach. Hence, the proposed model helps doctors to speed up the diagnosis process and narrowing the time required to determine whether a person is a pneumonia victim.
            </div>
        </div>
    );
}