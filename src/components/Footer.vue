<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="information">
                <a class="information__link" :href="$router.resolve({ name: 'Home' }).href">
                    <svg class="information__icon">
                        <use xlink:href="@/assets/svg/footer/location.svg#Capa_1" />
                    </svg>
                    <p>新竹市東區西大路323號</p>
                </a>
                <a class="information__link" href="">
                    <svg class="information__icon">
                        <use xlink:href="@/assets/svg/footer/call.svg#Capa_1" />
                    </svg>
                    <p>035233121</p>
                </a>
                <a class="information__link" href="">
                    <svg class="information__icon">
                        <use xlink:href="@/assets/svg/footer/email.svg#Capa_1" />
                    </svg>
                    <p>interior@gmail.com</p>
                </a>
            </div>
            <div class="bottom">
                <div class="community__link">
                    <a href="">
                        <svg class="community__icon">
                            <use xlink:href="@/assets/svg/footer/facebook.svg#Capa_1" />
                        </svg>
                    </a>
                    <a href="">
                        <img
                            class="community__icon"
                            src="@/assets/img/footer/instagram.png"
                            alt=""
                        />
                    </a>
                    <a href="">
                        <svg class="community__icon">
                            <use xlink:href="@/assets/svg/footer/twitter.svg#Capa_1" />
                        </svg>
                    </a>
                    <a href="">
                        <svg class="community__icon">
                            <use xlink:href="@/assets/svg/footer/youtube.svg#Layer_1" />
                        </svg>
                    </a>
                </div>
                <div class="bottom">
                    <div class="bottom__link">
                        <router-link :to="{ name: 'Home' }">首頁</router-link>
                    </div>
                    <div class="bottom__link">
                        <router-link :to="{ name: 'About' }">關於辰俔</router-link>
                    </div>
                    <div class="bottom__link">
                        <router-link :to="{ name: 'Portfolio' }">作品欣賞</router-link>
                    </div>
                    <div class="bottom__link">
                        <router-link :to="{ name: 'Process' }">專案流程</router-link>
                    </div>
                    <div class="bottom__link">
                        <router-link :to="{ name: 'Contact' }">聯絡我們</router-link>
                    </div>
                    <div class="bottom__link">
                        <router-link :to="{ name: 'Message' }">線上諮詢</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: rgb(31, 31, 31);

    .footer-inner {
        display: flex;
        flex-wrap: wrap;
        // background-color: red;
        // justify-content: space-between;
        // width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        padding: 3% 8%;
        .information {
            flex: 1 1 auto;

            @include rwd(mobile) {
                flex: 0 1 100%;
            }
            a {
                // cursor: pointer;
                display: flex;
                align-items: center;

                margin: 15px 0;

                color: white;
                font-size: 1.5rem;

                .information__icon {
                    // display: block;
                    width: 20px;
                    height: 20px;
                    fill: rgb(255, 255, 255);

                    margin-right: 15px;
                }
            }
        }

        .bottom {
            .community__link {
                display: flex;
                flex-wrap: wrap;

                margin-top: 15px;
                //for align to information

                a {
                    margin-right: 5%;

                    @include rwd(mobile) {
                        // algin vertical line
                        margin-left: -2px;
                        margin-right: 15px;
                    }
                    .community__icon {
                        width: 40px;
                        height: 40px;
                    }
                }
            }

            .bottom {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-evenly;
                margin-top: 10px;
                @include rwd(mobile) {
                    margin-top: 20px;
                }

                .bottom__link {
                    flex: 0 1 50%;
                    a {
                        display: inline-block;
                        padding: 2px 2px;
                        margin: 2px 0;
                        color: rgb(255, 255, 255);
                        font-size: 1.6rem;

                        @include rwd(mobile) {
                            padding: 5px 0px;
                        }
                    }
                }
            }
        }
    }
}
</style>
