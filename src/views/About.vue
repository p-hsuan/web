<template>
    <div class="about">
        <!-- <Navbar /> -->
        <div class="background">
            <h4>關於辰俔</h4>
        </div>
        <div class="about__sec__description">
            <h4>人文厚度 ‧ 幸福美學</h4>
            <p>
                辰俔室內設計工程研究室創利於2015年，秉持樸實純粹的設計，
                同時迸出靈感生長，構成一個空間的精神內涵。 尊重他們(人-土地-文化)的故事，
                當一個空間滿溢著我們的記憶時，它才是活生生的。
            </p>
        </div>
        <div class="about__sec__main">
            <div class="first__container">
                <!-- 背景是否滿版 -->
                <div class="first__inner">
                    <div class="first__content">
                        <h4>設計總監</h4>
                        <h5>一、主要產品:</h5>
                        <p>1.住宅‧別墅/商業空間/大樓公設/辦公空間/景觀環境設計</p>
                        <p>2.裝修工程/管理監工</p>
                        <p>3. CIS/Logo/平面整合設計</p>
                        <p>4.軟裝、佈置設計整合</p>
                        <h5>二、施作項目：</h5>
                        <p>1.現況洽談、丈量</p>
                        <p>2.3D透視圖及施工繪製、裝修標單</p>
                        <p>3.工程發包及重點監造</p>
                        <p>4.家具、軟裝簡報、發包</p>
                    </div>
                    <div class="first__img">
                        <img src="@/assets/img/about/model1.jpg" alt />
                    </div>
                </div>
            </div>
            <div class="second__container"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    components: {
        // Navbar: () => import('@/components/Navbar.vue'),
    },
}
</script>

<style lang="scss" scoped>
.background {
    height: 350px;
    background-image: url('../assets/img/about/about.jpg');
    background-position: center;
    background-size: cover;
    opacity: 0.88;
    position: relative;

    h4 {
        position: absolute;
        left: 50%;
        top: 65%;
        transform: translate(-50%, -50%);

        opacity: 1;
        color: white;
        font-size: 3rem;
    }
}

.about {
    &__sec__description {
        padding: 8% 0;

        h4 {
            color: #996600;
            font-size: 3.6rem;
            text-align: center;
            letter-spacing: 3px;

            @include rwd(small) {
                font-size: 3rem;
            }
        }
        p {
            color: #333;
            font-size: 2.2rem;
            line-height: 1.5;
            text-align: center;
            margin: 20px 25%;
            @include rwd(small) {
                margin: 18px 7%;
                font-size: 2rem;
            }
        }
    }

    &__sec__main {
        .first__container {
            background-color: rgb(228, 228, 228);
            .first__inner {
                max-width: 1440px;
                margin: 0 auto;
                padding-top: 10%;
                padding-left: 10%;
                padding-right: 10%;
                padding-bottom: 10%;

                display: flex;
                justify-content: space-between;
                .first__content {
                    flex: 0 1 60%;

                    @include rwd(desktop) {
                        flex: 0 1 50%;
                    }
                    h4 {
                        color: #996600;
                        font-size: 3.6rem;

                        margin-bottom: 40px;
                        @include rwd(small) {
                            font-size: 3rem;
                            margin-bottom: 10px;
                        }
                    }

                    h5 {
                        font-size: 2.2rem;
                        margin-top: 35px;
                        margin-bottom: 10px;
                        @include rwd(small) {
                            font-size: 2rem;
                        }
                    }

                    p {
                        font-size: 2rem;
                        margin: 10px 0;
                        line-height: 1.2;
                        @include rwd(small) {
                            font-size: 1.8rem;
                        }
                    }
                }

                .first__img {
                    flex: 0 1 35%;
                    @include rwd(small) {
                        flex: 0 1 40%;
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }

        .second__container {
        }
    }
}
</style>
