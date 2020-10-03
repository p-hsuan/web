<template>
    <div class="idea">
        <img class="idea__pic1" src="@/assets/img/idea/idea2.jpg" alt />
        <img class="idea__pic2" src="@/assets/img/idea/idea4.jpg" alt />
        <div class="idea__textcolor"></div>
        <div class="idea__content">
            <h3>設計</h3>
            <p>
                是在解決美學形式與日常生活中共存的問題。 以不同的方式探討它、解決它，
                同時迸出靈感生長，構成一個空間的精神內涵。
            </p>
        </div>
        <a class="idea__link" href="">看更多</a>
        <!-- <div class="idea__background"></div> -->
    </div>
</template>

<script>
export default {
    name: 'Idea',
}
</script>

<style lang="scss" scoped>
.idea {
    // height: 500px;
    //
    display: grid;
    // max-width: 1440px;
    // 1200
    // 1140
    grid-template-columns: minmax(30px, 1fr) repeat(12, 93px) minmax(30px, 1fr);
    grid-template-rows: minmax(60px, 1fr) repeat(6, 75px) minmax(60px, 1fr);
    // background-image: url('../assets/img/idea/ideabackground.png');
    // background-size: cover;
    // z-index: -20;
    @include rwd(desktop) {
        //1200
        // 940
        grid-template-columns: minmax(30px, 1fr) repeat(12, 73px) minmax(30px, 1fr);
    }

    @include rwd(medium) {
        // 720
        grid-template-columns: minmax(5px, 1fr) repeat(12, 59px) minmax(5px, 1fr);
    }

    @include rwd(small) {
        // 540
        grid-template-columns: minmax(5px, 1fr) repeat(12, 43px) minmax(5px, 1fr);
        grid-template-rows: minmax(30px, 1fr) repeat(12, 59px) minmax(30px, 1fr);
    }

    @include rwd(mobile) {
        // 360
        // grid-template-columns: minmax(5px, 1fr) repeat(auto-fill, 1fr) minmax(5px, 1fr);
        grid-template-columns: minmax(15px, 1fr) repeat(12, 27px) minmax(15px, 1fr);
        grid-template-rows: minmax(30px, 1fr) repeat(12, 49px) minmax(30px, 1fr);
    }
    &__pic1 {
        width: 75%;
        grid-column: 2 / 8;
        grid-row: 2 / 8;
        box-shadow: 0 2rem 5rem rgba(#000, 0.1);

        // justify-self: end;
        justify-self: center;
        align-self: center;
        // z-index: 20;

        @include rwd(desktop) {
            width: 95%;
            grid-column: 2 / 8;
            grid-row: 2 / 8;
        }

        @include rwd(medium) {
            width: 110%;
            grid-column: 2 / 8;
            grid-row: 2 / 8;
        }

        @include rwd(small) {
            width: 100%;
            grid-column: 3 / 13;
            grid-row: 2 / 6;
            align-self: start;
        }

        @include rwd(mobile) {
            grid-column: 2 / -2;
        }
    }

    &__pic2 {
        width: 100%;
        grid-column: 7 / 11;
        grid-row: 2 / 4;
        position: relative;
        bottom: 20%;

        box-shadow: 0 2rem 5rem rgba(#000, 0.2);

        @include rwd(medium) {
            width: 110%;
            bottom: auto;
            // transition: all 0.5s;
        }

        @include rwd(small) {
            grid-column: 3 / 9;
            grid-row: 9 / 12;

            width: 90%;
            justify-self: center;
        }

        @include rwd(mobile) {
            grid-column: 2 / 9;
            grid-row: 8/ 11;
            justify-self: end;
            width: 95%;
        }
    }

    &__textcolor {
        grid-column: 8 / 14;
        grid-row: 4 / 8;
        width: 90%;
        height: 75%;
        justify-self: end;
        background-color: #dec79b;
        @include rwd(desktop) {
            width: 95%;
            height: 95%;
            grid-column: 9 / 14;
            grid-row: 3 / 7;
        }

        @include rwd(medium) {
            height: 110%;
        }

        @include rwd(small) {
            grid-column: 4 / 13;
            grid-row: 9 / 12;
            justify-self: center;
            z-index: -2;
            height: 150%;
        }

        @include rwd(mobile) {
            grid-column: 3 / 13;
            grid-row: 9 / 13;
            height: 120%;
        }
    }

    &__content {
        grid-column: 10 / 14;
        grid-row: 4 / 8;

        width: 80%;
        height: 85%;

        @include rwd(desktop) {
            grid-row: 3 / 8;
        }

        @include rwd(small) {
            grid-column: 5 / 13;
            grid-row: 10 / 13;
            width: 85%;
        }

        @include rwd(mobile) {
            grid-column: 4 / 12;
            grid-row: 9 / 14;
            width: 110%;
        }

        h3 {
            font-size: 5rem;
            text-align: right;
            margin: 18px 0;

            @include rwd(desktop) {
                // color: red;
                margin: 28px 0;
            }

            @include rwd(medium) {
                // color: rgb(219, 137, 42);
            }

            @include rwd(small) {
                // color: rgb(232, 245, 50);
                font-size: 3.4rem;
                margin: 30px 0;
                margin-right: 15px;
            }

            @include rwd(mobile) {
                // color: rgb(0, 255, 106);
            }
        }

        p {
            font-size: 2.5rem;
            @include rwd(medium) {
                margin-top: 40px;
            }

            @include rwd(small) {
                margin-top: 40px;
                font-size: 2.2rem;
            }

            @include rwd(mobile) {
                margin-top: -10px;
                font-size: 2.2rem;
            }
        }
    }

    &__link {
        grid-area: 7 / 10 / 8/ 12;
        color: white;
        padding: 5px 20px;
        background-color: #c0a392;
        place-self: center start;
        font-size: 2.2rem;
        @include rwd(desktop) {
            place-self: center start;
        }

        @include rwd(medium) {
            place-self: end start;
        }

        @include rwd(small) {
            grid-column: 9 / 12;
            grid-row: 13 / 15;
            place-self: center center;
            margin-top: 17px;
        }

        @include rwd(mobile) {
            grid-column: 8/ 12;
            grid-row: 13 /14;
        }
    }

    &__background {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        background-color: hsl(22, 27%, 66%);
        z-index: -10;
        clip-path: polygon(0 73%, 100% 35%, 100% 100%, 0% 100%);
    }
}

.test {
    margin-left: 50%;
}
</style>
