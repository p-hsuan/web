<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/img/banner/1.jpg" alt />
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/banner/2.jpg" alt />
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/img/banner/3.jpg" alt />
                </div>
                <!-- <div class="swiper-slide">
                    <img src="@/assets/img/banner/3.jpg" alt="" />
        </div>-->
                <div class="title">
                    <h1>辰俔</h1>
                    <p>打造裝潢典雅的空間設計美學</p>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- <div class="x6"></div> -->
        </div>
    </div>
</template>

<script>
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, Pagination, EffectFade, Autoplay])

export default {
    name: 'Slider',
    mounted() {
        const swiper = new Swiper('.swiper-container', {
            // direction: 'vertical',
            // loop: true,
            // spaceBetween: 30,
            effect: 'fade',
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
                // el: '.x6',
                type: 'bullets',
                clickable: true,
                bulletElement: 'div',
            },
        })
        console.log(swiper)
    },
}
</script>

<style lang="scss" scoped>
.slider {
    height: 100%;
    .swiper-container {
        width: 100%;
        height: 100%;
        // background-color: chartreuse;
        .swiper-wrapper {
            // height: 100%;
            // display: flex;
            position: relative;
            .swiper-slide {
                // height: 100%;
                // background: rgba(201, 163, 163, 0.911);
                background-color: rgba(0, 0, 0, 0.945);

                // position: relative;

                img {
                    display: block;
                    width: 100%;
                    opacity: 0.7;
                    object-fit: cover;
                    height: 100%;
                }
            }

            .title {
                position: absolute;
                color: white;
                left: 50%;
                // z-index: 1;
                bottom: 10%;
                transform: translateX(-50%);
                text-align: center;
                h1 {
                    font-size: 5rem;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 3rem;
                }
            }
        }
    }
}

.swiper-pagination ::v-deep .swiper-pagination-bullet {
    background: transparent;
    border: 2px solid #c0a392;
}

.swiper-pagination ::v-deep .swiper-pagination-bullet-active {
    background: transparent;
    border: 2px solid #c0a392;
    background: #fff;
}

// .swiper-pagination-bullet-active >>> {
//     background: #e6e6e6;
// }
</style>
