<template>
    <div class="newproject">
        <div class="newproject-inner">
            <div class="seperate-line"></div>
            <h4>我們的最新專案</h4>
            <div class="newprojectrow">
                <div class="items item--1">
                    <img src="@/assets/img/newproject/p8.jpg" alt="" />
                    <div class="projectdes">
                        <h5>人文雋永</h5>
                        <p class="project-en">Urban & Nature</p>
                        <p class="project-description">
                            人文雋永中仍保有私藏不見的精品與細緻，生活不是宣揚的繁華，而是一杯老茶細細品味。
                        </p>
                        <a class="project-link" href="">
                            <p>前往專案→</p>
                        </a>
                    </div>
                </div>
                <div class="items item--2">
                    <img src="@/assets/img/newproject/p9.jpg" alt="" />
                    <div class="projectdes">
                        <h5>山麓豪邸</h5>
                        <p class="project-en">Mountain Villa</p>
                        <p class="project-description">
                            鑄留自然，用開放之姿讓自然深入裡部，棲止於山麓間的宅邸，汰舊換新之後有了新的面貌。
                        </p>
                        <a class="project-link" href="">
                            <p>前往專案→</p>
                        </a>
                    </div>
                </div>
                <div class="items item--3">
                    <img src="@/assets/img/newproject/s1.jpg" alt="" />
                    <div class="projectdes">
                        <h5>當代風采</h5>
                        <p class="project-en">Modern Spirit</p>
                        <p class="project-description">
                            大器的布局與講究的細節工藝，將材質的運用切割注入現代氣息。
                        </p>
                        <a class="project-link" href="">
                            <p>前往專案→</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.seperate-line {
    height: 1px;
    background-color: rgb(207, 207, 207);

    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;
    width: 80%;
}

.newproject {
    .newproject-inner {
        max-width: 1160px;
        margin: 0 auto;
        h4 {
            text-align: center;
            font-size: 3rem;
            color: #996600;
        }
    }
}

.newprojectrow {
    display: flex;
    justify-content: space-around;

    margin-top: 4%;
    margin-bottom: 30px;
    // height: 40vw;
    @include rwd(mobile) {
        flex-wrap: wrap;
    }
    .items {
        flex: 0 1 30%;

        background-color: rgb(8, 8, 8);

        // for description
        position: relative;

        @include rwd(mobile) {
            flex: 0 1 100%;
            height: 55vw;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            opacity: 0.7;

            transition: opacity 0.5s;
        }

        // description
        .projectdes {
            opacity: 0;
            transition: opacity 0.5s;

            position: absolute;

            width: 75%;
            // height: 30%;
            // border: 1px solid black;

            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;

            // for text
            color: white;

            @include rwd(mobile) {
                opacity: 1;
            }

            h5 {
                font-size: 2.2rem;
                text-align: center;
                // text-decoration: underline;

                margin-bottom: 15px;

                // display: inline-block;
                // padding-bottom: 5px;
                // border-bottom: 1px solid white;
            }

            h5::after {
                content: '';
                border-bottom: 1px solid #fff;
                width: 10%;
                margin-top: 5px;
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }

            .project-en {
                text-align: center;
                font-size: 1.7rem;
                // color: red;
                margin-bottom: 10px;

                @include rwd(small) {
                    font-size: 1.2rem;
                }
            }
            .project-description {
                font-size: 1.5rem;
                text-align: center;
                line-height: 1.2;

                margin-bottom: 10px;
            }
            .project-link {
                font-size: 2.3rem;
                text-align: center;
                color: white;
            }

            :nth-child(4):hover {
                color: rgb(207, 207, 207);
            }
        }
    }

    .items:hover .projectdes {
        opacity: 1;
    }

    .items:hover img {
        opacity: 0.5;
    }
}
</style>
