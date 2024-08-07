import React, { useEffect } from 'react';
import $ from 'jquery';

const AnimatedComponent = () => {
    useEffect(() => {
        // Simple animation effect on component mount
        $('.box').fadeIn(1000);

        // Example of using jQuery to add event handlers
        $('.box').on('click', function() {
            $(this).animate({
                width: '+=50px',
                height: '+=50px'
            }, 500);
        });

        // Clean up event handlers on component unmount
        return () => {
            $('.box').off('click');
        };
    }, []);

    return (
        <div><h4>Animated componenta:</h4>
             <div className="box" style={{ display: 'none', width: '100px', height: '100px', background: 'pink', margin: '20px' }}>
            Click on me !
            </div>
        </div>
    );
};

export default AnimatedComponent;
