<template>
    <div id="app">
        <!-- <div class="container">
            <header class="header"></header>
            <section class="shop-collection"></section>
            <section class="inspiration"></section>
            <section class="new"></section>
            <section class="contact"></section>
            <footer class="footer"></footer>
        </div> -->
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

            <link
                href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

            <title>nexter &mdash; your home, your freedom</title>
        </head>
        <body class="container">
            <div class="sidebar">
                <button class="nav-btn"></button>
            </div>

            <header class="header">
                <img src="./img/logo.png" alt="Nexter logo" class="header__logo" />
                <h3 class="heading-3">Your own home:</h3>
                <h1 class="heading-1">I LOVE YOU</h1>
                <button class="btn header__btn">I LOVE YOU</button>
                <div class="header__seenon-text">Seen on</div>
                <div class="header__seenon-logos">
                    <img src="./img/logo-bbc.png" alt="Seen on logo 1" />
                    <img src="./img/logo-forbes.png" alt="Seen on logo 2" />
                    <img src="./img/logo-techcrunch.png" alt="Seen on logo 3" />
                    <img src="./img/logo-bi.png" alt="Seen on logo 4" />
                </div>
            </header>

            <div class="realtors">
                <h3 class="heading-3">Top 3 Realtors</h3>
                <div class="realtors__list">
                    <img src="./img/realtor-1.jpeg" alt="Realtor 1" class="realtors__img" />
                    <div class="realtors__details">
                        <h4 class="heading-4 heading-4--light">Erik Feinman</h4>
                        <p class="realtors__sold">245 houses sold</p>
                    </div>

                    <img src="./img/realtor-2.jpeg" alt="Realtor 2" class="realtors__img" />
                    <div class="realtors__details">
                        <h4 class="heading-4 heading-4--light">Kim Brown</h4>
                        <p class="realtors__sold">212 houses sold</p>
                    </div>

                    <img src="./img/realtor-3.jpeg" alt="Realtor 3" class="realtors__img" />
                    <div class="realtors__details">
                        <h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
                        <p class="realtors__sold">198 houses sold</p>
                    </div>
                </div>
            </div>

            <section class="features">
                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-global"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">World's best luxury homes</h4>
                    <p class="feature__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                        necessitatibus pariatur voluptatibus.
                    </p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-trophy"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Only the best properties</h4>
                    <p class="feature__text">
                        Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed
                        a eligendi aut quia.
                    </p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">All homes in in top locations</h4>
                    <p class="feature__text">
                        Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur
                        harum.
                    </p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">New home in one week</h4>
                    <p class="feature__text">
                        Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-presentation"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Top 1% realtors</h4>
                    <p class="feature__text">
                        Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
                        necessitatibus pariatur voluptatibus.
                    </p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlink:href="img/sprite.svg#icon-lock"></use>
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Secure payments on nexter</h4>
                    <p class="feature__text">
                        Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
                    </p>
                </div>
            </section>

            <div class="story__pictures">
                <img src="./img/story-1.jpeg" alt="Couple with new house" class="story__img--1" />
                <img src="./img/story-2.jpeg" alt="New house" class="story__img--2" />
            </div>

            <div class="story__content">
                <h3 class="heading-3 mb-sm">Happy Customers</h3>
                <h2 class="heading-2 heading-2--dark mb-md">
                    &ldquo;The best decision of our lives&rdquo;
                </h2>
                <p class="story__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                    necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                </p>
                <button class="btn">Find your own home</button>
            </div>

            <section class="homes">
                <div class="home">
                    <img src="./img/house-1.jpeg" alt="House 1" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Beautiful Familiy House</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>USA</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>5 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>325 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$1,200,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>

                <div class="home">
                    <img src="./img/house-2.jpeg" alt="House 2" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Modern Glass Villa</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>Canada</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>6 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>450 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$2,750,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>

                <div class="home">
                    <img src="./img/house-3.jpeg" alt="House 3" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Cozy Country House</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>UK</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>4 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>250 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$850,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>

                <div class="home">
                    <img src="./img/house-4.jpeg" alt="House 4" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Large Rustical Villa</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>Portugal</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>6 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>480 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$1,950,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>

                <div class="home">
                    <img src="./img/house-5.jpeg" alt="House 5" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Majestic Palace House</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>Germany</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>18 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>4230 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$9,500,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>

                <div class="home">
                    <img src="./img/house-6.jpeg" alt="House 6" class="home__img" />
                    <svg class="home__like">
                        <use xlink:href="img/sprite.svg#icon-heart-full"></use>
                    </svg>
                    <h5 class="home__name">Modern Familiy Apartment</h5>
                    <div class="home__location">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                        </svg>
                        <p>Italy</p>
                    </div>
                    <div class="home__rooms">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                        </svg>
                        <p>3 rooms</p>
                    </div>
                    <div class="home__area">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-expand"></use>
                        </svg>
                        <p>180 m<sup>2</sup></p>
                    </div>
                    <div class="home__price">
                        <svg>
                            <use xlink:href="img/sprite.svg#icon-key"></use>
                        </svg>
                        <p>$600,000</p>
                    </div>
                    <button class="btn home__btn">Contact realtor</button>
                </div>
            </section>

            <section class="gallery">
                <figure class="gallery__item gallery__item--1">
                    <img src="./img/gal-1.jpeg" alt="Gallery image 1" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="./img/gal-2.jpeg" alt="Gallery image 2" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="./img/gal-3.jpeg" alt="Gallery image 3" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="./img/gal-4.jpeg" alt="Gallery image 4" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="./img/gal-5.jpeg" alt="Gallery image 5" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="./img/gal-6.jpeg" alt="Gallery image 6" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--7">
                    <img src="./img/gal-7.jpeg" alt="Gallery image 7" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--8">
                    <img src="./img/gal-8.jpeg" alt="Gallery image 8" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--9">
                    <img src="./img/gal-9.jpeg" alt="Gallery image 9" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--10">
                    <img src="./img/gal-10.jpeg" alt="Gallery image 10" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--11">
                    <img src="./img/gal-11.jpeg" alt="Gallery image 11" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--12">
                    <img src="./img/gal-12.jpeg" alt="Gallery image 12" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--13">
                    <img src="./img/gal-13.jpeg" alt="Gallery image 13" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--14">
                    <img src="./img/gal-14.jpeg" alt="Gallery image 14" class="gallery__img" />
                </figure>
            </section>

            <footer class="footer">
                <ul class="nav">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Find your dream home</a>
                    </li>
                    <li class="nav__item"><a href="#" class="nav__link">Request proposal</a></li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Download home planner</a>
                    </li>
                    <li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Submit your property</a>
                    </li>
                    <li class="nav__item"><a href="#" class="nav__link">Come work with us!</a></li>
                </ul>
                <p class="copyright">
                    &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for
                    your own purposes. This does NOT apply if you plan to produce your own course or
                    tutorials based on this project.
                </p>
            </footer>
        </body>
    </div>
</template>

<script>
export default {}
</script>

<style scss="scss">
/* .container {
    display: grid;
} */
/* * {
    margin: 0;
}
.footer {
    height: 10px;
    width: 1920px;
    background-color: brown;
} */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
}
@media only screen and (max-width: 75em) {
    html {
        font-size: 50%;
    }
}

body {
    font-family: 'Nunito', sans-serif;
    color: #6d5d4b;
    font-weight: 300;
    line-height: 1.6;
}

.container {
    display: grid;
    grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
    grid-template-columns:
        [sidebar-start] 8rem [sidebar-end full-start]
        minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
        [center-end] minmax(6rem, 1fr) [full-end];
}
@media only screen and (max-width: 62.5em) {
    .container {
        grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);
        grid-template-columns:
            [full-start] minmax(6rem, 1fr) [center-start] repeat(
                8,
                [col-start] minmax(min-content, 14rem) [col-end]
            )
            [center-end] minmax(6rem, 1fr) [full-end];
    }
}
@media only screen and (max-width: 50em) {
    .container {
        grid-template-rows: 6rem calc(100vh - 6rem);
    }
}

.heading-1,
.heading-2,
.heading-3,
.heading-4 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
}

.heading-1 {
    font-size: 4.5rem;
    color: #f9f7f6;
    line-height: 1;
}

.heading-2 {
    font-size: 4rem;
    font-style: italic;
    line-height: 1;
}
.heading-2--light {
    color: #f9f7f6;
}
.heading-2--dark {
    color: #54483a;
}

.heading-3 {
    font-size: 1.6rem;
    color: #c69963;
    text-transform: uppercase;
}

.heading-4 {
    font-size: 1.9rem;
}
.heading-4--light {
    color: #f9f7f6;
}
.heading-4--dark {
    color: #54483a;
}

.btn {
    background-color: #c69963;
    color: #fff;
    border: none;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all 0.2s;
}
.btn:hover {
    background-color: #b28451;
}

.mb-sm {
    margin-bottom: 2rem;
}

.mb-md {
    margin-bottom: 3rem;
}

.mb-lg {
    margin-bottom: 4rem;
}

.mb-hg {
    margin-bottom: 8rem;
}

.sidebar {
    background-color: #c69963;
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;
    display: flex;
    justify-content: center;
}
@media only screen and (max-width: 62.5em) {
    .sidebar {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        justify-content: flex-end;
        align-items: center;
    }
}

.nav-btn {
    border: none;
    border-radius: 0;
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    margin-top: 4rem;
}
.nav-btn::before,
.nav-btn::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: '';
    display: block;
}
.nav-btn::before {
    transform: translateY(-1.5rem);
}
.nav-btn::after {
    transform: translateY(1.3rem);
}
@media only screen and (max-width: 62.5em) {
    .nav-btn {
        margin-top: 0;
        margin-right: 3rem;
    }
    .nav-btn::before {
        transform: translateY(-1.2rem);
    }
    .nav-btn::after {
        transform: translateY(1rem);
    }
}

.header {
    background-color: #54483a;
    grid-column: full-start / col-end 6;
    background-image: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)),
        url(./img/hero.jpeg);
    background-size: cover;
    background-position: center;
    padding: 8rem;
    padding-top: 4rem;
    display: grid;
    grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
    grid-template-columns: minmax(min-content, max-content);
    grid-row-gap: 1.5rem;
    justify-content: center;
}
@media only screen and (max-width: 50em) {
    .header {
        grid-column: 1 / -1;
    }
}
@media only screen and (max-width: 37.5em) {
    .header {
        padding: 5rem;
    }
}
.header__logo {
    height: 3rem;
    justify-self: center;
}
.header__btn {
    align-self: start;
    justify-self: start;
}
.header__seenon-text {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    font-size: 1.6rem;
    color: #aaa;
}
.header__seenon-text::before,
.header__seenon-text::after {
    content: '';
    height: 1px;
    display: block;
    background-color: currentColor;
}
.header__seenon-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 3rem;
    justify-items: center;
    align-items: center;
}
.header__seenon-logos img {
    max-height: 2.5rem;
    max-width: 100%;
    filter: brightness(70%);
}

.realtors {
    background-color: #101d2c;
    grid-column: col-start 7 / full-end;
    padding: 3rem;
    display: grid;
    align-content: center;
    justify-content: center;
    justify-items: center;
    grid-row-gap: 2rem;
}
@media only screen and (max-width: 50em) {
    .realtors {
        grid-column: 1 / -1;
    }
}
.realtors__list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-column-gap: 2rem;
    grid-row-gap: 5vh;
    align-items: center;
}
@media only screen and (max-width: 50em) {
    .realtors__list {
        grid-template-columns: repeat(3, min-content max-content);
    }
}
@media only screen and (max-width: 37.5em) {
    .realtors__list {
        grid-template-columns: min-content max-content;
    }
}
.realtors__img {
    width: 7rem;
    border-radius: 50%;
    display: block;
}
.realtors__sold {
    text-transform: uppercase;
    color: #aaa;
    margin-top: -3px;
}

.features {
    grid-column: center-start / center-end;
    margin: 15rem 0;
}
@supports (display: grid) {
    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 6rem;
        align-items: start;
    }
}

.feature {
    float: left;
    width: 33.3333%;
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
}
@supports (display: grid) {
    .feature {
        width: auto;
        margin-bottom: 0;
    }
}
.feature__icon {
    fill: #c69963;
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
}
.feature__text {
    font-size: 1.7rem;
}

.story__pictures {
    background-color: #c69963;
    grid-column: full-start / col-end 4;
    background-image: linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)),
        url(./img/back.jpg);
    background-size: cover;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
}
@media only screen and (max-width: 50em) {
    .story__pictures {
        grid-column: 1 / -1;
        padding: 6rem;
    }
}

.story__img--1 {
    width: 100%;
    grid-row: 2 / 6;
    grid-column: 2 / 6;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
}
@media only screen and (max-width: 50em) {
    .story__img--1 {
        grid-column: 1 / 5;
        grid-row: 1 / -1;
    }
}

.story__img--2 {
    width: 115%;
    grid-row: 4 / 6;
    grid-column: 4 / 7;
    z-index: 20;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 50em) {
    .story__img--2 {
        grid-row: 1 / -1;
        width: 100%;
    }
}

.story__content {
    background-color: #f9f7f6;
    grid-column: col-start 5 / full-end;
    padding: 6rem 8vw;
    /*
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        */
    display: grid;
    align-content: center;
    justify-items: start;
}
@media only screen and (max-width: 50em) {
    .story__content {
        grid-column: 1 / -1;
        grid-row: 5 / 6;
    }
}

.story__text {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;
}

.homes {
    grid-column: center-start / center-end;
    margin: 15rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 7rem;
}

.home {
    background-color: #f9f7f6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3.5rem;
}
.home__img {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
}
.home__like {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    fill: #c69963;
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;
    justify-self: end;
    margin: 1rem;
}
.home__name {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: end;
    z-index: 3;
    width: 80%;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: #101d2c;
    color: #fff;
    font-weight: 400;
    transform: translateY(50%);
}
.home__location,
.home__rooms {
    margin-top: 2.5rem;
}
.home__location,
.home__rooms,
.home__area,
.home__price {
    font-size: 1.5rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
}
.home__location svg,
.home__rooms svg,
.home__area svg,
.home__price svg {
    fill: #c69963;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
}
.home__btn {
    grid-column: 1 / -1;
}

.gallery {
    background-color: #f9f7f6;
    grid-column: full-start / full-end;
    display: grid;
    /*grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);*/
    grid-template: repeat(7, 5vw) / repeat(8, 1fr);
    grid-gap: 1.5rem;
    padding: 1.5rem;
}
.gallery__item--1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
}
.gallery__item--2 {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
}
.gallery__item--3 {
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
}
.gallery__item--4 {
    grid-row: 1 / span 2;
    grid-column: 7 / -1;
}
.gallery__item--5 {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
}
.gallery__item--6 {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
}
.gallery__item--7 {
    grid-row: 4 / 5;
    grid-column: 5 / 6;
}
.gallery__item--8 {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
}
.gallery__item--9 {
    grid-row: 3 / span 3;
    grid-column: 8 / -1;
}
.gallery__item--10 {
    grid-row: 6 / span 2;
    grid-column: 1 / 2;
}
.gallery__item--11 {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
}
.gallery__item--12 {
    grid-row: 6 / span 2;
    grid-column: 4 / 5;
}
.gallery__item--13 {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
}
.gallery__item--14 {
    grid-row: 6 / span 2;
    grid-column: 8 / -1;
}
.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.footer {
    background-color: #101d2c;
    grid-column: full-start / full-end;
    padding: 8rem;
}

.nav {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
}
.nav__link:link,
.nav__link:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all 0.2s;
}
.nav__link:hover,
.nav__link:active {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
}

.copyright {
    font-size: 1.4rem;
    color: #aaa;
    margin-top: 6rem;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 70%;
}
</style>
