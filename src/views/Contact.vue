<template>
    <div class="contact">
        <div class="background">
            <h4>聯絡我們</h4>
        </div>
        <div class="contact__main">
            <div class="main__inner">
                <div class="description">
                    <h4>聯絡資訊</h4>
                    <p class="text">
                        感謝您選擇辰俔室內設計工程研究室
                        我們著重於與顧客建立長遠的業務關係，提供全面的支援和服務
                        若您有任何寶貴的意見及詢問，歡迎您填寫下列聯絡資料，我們將盡快與您連繫
                    </p>
                    <form @submit.prevent="submitInfo">
                        <div class="field">
                            <input v-model="info.name" type="text" placeholder="姓名" />
                            <p class="feedback" v-show="feedback.name">請填寫姓名</p>
                        </div>
                        <div class="field">
                            <input v-model="info.phone" type="text" placeholder="電話" />
                            <p class="feedback" v-show="feedback.phone">請填寫電話</p>
                        </div>

                        <div class="field">
                            <input v-model="info.email" type="text" placeholder="E-mail" />
                            <p class="feedback" v-show="feedback.email">請填寫E-mail</p>
                        </div>

                        <button>送出</button>
                    </form>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8015991127863!2d120.96276673219829!3d24.80224633949104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835eadc37b305%3A0xd44c4defb8a7e7ec!2zMzAw5paw56u55biC5p2x5Y2A6KW_5aSn6LevMzIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1601882297020!5m2!1szh-TW!2stw"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
            </div>
        </div>

        <!-- feedback if send info -->
        <div v-show="submitCondition" class="feedback-show">
            <div class="feedback-box">
                辰俔工作室已收到您的資訊，會儘速與您聯絡
                <p>{{ countdown }} 後關閉或點擊直接關閉</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            info: {
                name: null,
                phone: null,
                email: null,
            },

            feedback: {
                name: false,
                phone: false,
                email: false,
            },
            submitCondition: false,
            countdown: 5,
        }
    },
    methods: {
        submitInfo() {
            const result = Object.values(this.info).every((_) => _ != null)

            // if all input was filled
            if (result) {
                // set all feedback not show
                Object.entries(this.feedback).forEach(([key]) => {
                    this.feedback[key] = false
                })

                // set all input vale to null
                Object.entries(this.info).forEach(([key]) => {
                    this.info[key] = null
                })

                // tell users that the information was submit successfully
                // let feedback box show
                this.submitCondition = true

                // countdown to close box
                const a = window.setInterval(() => {
                    this.countdown -= 1
                    if (this.countdown === -1) {
                        clearInterval(a)

                        // make feedback-show not show
                        this.submitCondition = false

                        this.countdown = 5
                    }
                }, 1000)

                // if one of input was not filled
            } else {
                Object.entries(this.info).forEach(([key, value]) => {
                    if (value) {
                        this.feedback[key] = false
                    } else {
                        this.feedback[key] = true
                    }
                })
            }
        },
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

.contact {
    &__main {
        max-width: 1160px;
        margin: 0 auto;

        margin-top: 50px;
        margin-bottom: 50px;

        @include rwd(desktop) {
            width: 80%;
        }
        .main__inner {
            display: flex;

            // make map to top
            @include rwd(medium) {
                flex-direction: row-reverse;
                flex-wrap: wrap-reverse;
            }

            .description {
                flex: 0 1 30%;
                margin-right: auto;
                margin-top: 50px;

                @include rwd(small) {
                    flex: 0 1 auto;
                }

                h4 {
                    color: #996600;
                    font-size: 3rem;
                    // text-align: center;
                    letter-spacing: 3px;

                    @include rwd(small) {
                        font-size: 3rem;
                    }
                }

                .text {
                    color: #333;
                    font-size: 2.2rem;
                    line-height: 1.5;

                    margin-top: 20px;
                    // text-align: center;
                    // margin: 20px 25%;
                    @include rwd(small) {
                        // margin: 18px 7%;
                        font-size: 2rem;
                    }
                }

                // form

                form {
                    // display: flex;

                    .field {
                        display: flex;

                        // make feedback description column way
                        @include rwd(mobile) {
                            flex-direction: column;
                            font-size: 1.6rem;
                        }

                        input {
                            display: block;

                            margin: 10px 0;

                            padding: 6px;
                            font-size: 2.2rem;

                            outline: none;

                            border: 1px solid black;

                            @include rwd(small) {
                                font-size: 1.6rem;
                                margin-top: 10px;
                                margin-bottom: 5px;
                                height: 20px;

                                width: 80%;
                            }
                        }

                        input:focus {
                            border: 1px solid #996600;
                            // outline: none;
                        }

                        .feedback {
                            color: #ff3c00;
                            font-size: 1.8rem;

                            @include rwd(small) {
                                font-size: 1.6rem;
                            }
                        }
                    }

                    button {
                        margin-top: 10px;

                        padding: 5px 10px;

                        background-color: white;

                        outline: none;

                        border: 1px solid #996600;
                    }

                    button:hover {
                        background-color: #996600;

                        color: white;
                    }

                    button:active {
                        position: relative;
                        top: 1px;
                    }
                }
            }
            .map {
                flex: 0 1 50%;

                @include rwd(medium) {
                    flex: 0 1 100%;
                }
                iframe {
                    width: 100%;
                    min-height: 500px;
                }
            }
        }
    }
}

// feedback
.feedback-show {
    position: fixed;

    width: 100%;
    height: 100vh;
    top: 0;

    background-color: rgba(0, 0, 0, 0.747);

    .feedback-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-size: 2.2rem;

        // width: 50%;
        height: 20%;
        min-height: 200px;
        min-width: 500px;

        background-color: white;

        // center content

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include rwd(small) {
            width: 75%;
            min-width: 0;
            padding: 0 20px;
        }
    }
    p {
        margin-top: 20px;

        border: 1px solid gray;
        padding: 2px 5px;

        color: rgb(66, 65, 65);
        font-size: 1.3rem;
    }
}
</style>
