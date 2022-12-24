import '../assets/styles/archiStyles.css';
import React, { useRef, useEffect } from 'react';
import img from'../assets/images/archi.jpg';

export default function ArchiComponent() {
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
        <div className="architecture" id="architecture" >
            <div className='text' ref={divRef}>
                <h3>Architecture</h3>
                <ol> The proposed PneumoGAN architecture is shown in Fig. 1.
                    The major components of PneumoGAN are the (i) Discriminator
                    model and the (ii) Generator Model. A detailed description
                    of these two modules are provided in this section.
                    <li> Discriminator (D): The discriminator (D) depicted in
                        Fig. 1 tries to map a 2-D image to a scalar output indicating
                        the probability of the submitted chest X-ray image to the GAN
                        is sampled from the training image collection or a synthesized
                        image x produced by the Generator (G).
                    </li>
                    <li>
                        Generator (G): The Generator (G) grasps a probability
                        distribution P<sub>g</sub> over random noise (z) as its input to 2-D Xray
                        images by learning a mapping G(z). The Generator thus
                        assimilate the mapping G(z) : z -> x from random noise z to
                        realistic 2-D X-ray’s (x).
                    </li>
                </ol>
                <img src={img} alt="Acrchitecture" width="400px"/>
            </div>
        </div>
    );
}