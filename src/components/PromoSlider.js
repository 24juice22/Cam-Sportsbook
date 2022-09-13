import React from "react"

function PromoSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slides = [
        {
            url: "sports.png", 
            title: "New Customer Promo", 
            description: "Sign Up Now and receive a RISK-FREE bet up to $500"
        },
        {
            url: "sports.png", 
            title: "Refer A Friend", 
            description: "Refer a friend and receive $50"
        },
        {
            url: "sports.png", 
            title: "No Sweat Bet", 
            description: "All Customers Invited"
        },
    ]

    const dots = slides.map((slide, slideIndex) => {
        return <div 
            className="dot"
            key={slideIndex} 
            onClick={() => chooseSlide(slideIndex)}
            style = {currentIndex === slideIndex ? 
                {color: "var(--color-secondary)"} : 
                {color: "white"}
            }
        >
        ●   
        </div>
    })

    function chooseSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    function previousPromo() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function nextPromo() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="slider">
            <div>
                <div onClick={previousPromo} className="slider__arrow slider__arrow--left">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div onClick={nextPromo} className="slider__arrow slider__arrow--right">
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <h1 className="slider__title">{slides[currentIndex].title}</h1> 
            <p className="slider__tagline">{slides[currentIndex].description}</p>
            <div className="slider__dots">
                {dots}
            </div>  
        </div>
    )
}

export default PromoSlider;