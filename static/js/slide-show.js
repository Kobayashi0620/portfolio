$('.worksSliderTop').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2560,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3.5,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1.5,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1.3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
});

$('.worksSliderBottom').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
        {
            breakpoint: 2560,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3.5,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1.5,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 0,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 0,
            }
        }
    ],
});