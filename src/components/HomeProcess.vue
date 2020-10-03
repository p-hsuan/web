<template>
    <div class="homeprocess">
        <div class="homeprocess-inner">
            <div class="seperate-line"></div>
            <h4>我們如何運作</h4>
            <p>
                我們認識到，每個項目都是一個完全獨特的項目，每個客戶都有自己的個人要求。
                經過多年的經驗，我們提供了室內設計服務。
                但是，我們始終保持靈活性，將每個項目都視為一個獨特的項目，並為所有人提供定制服務。
                我們還會隨時與您保持聯繫，使我們的計劃適應您的任何反饋。
            </p>
            <router-link class="process-link" :to="{ name: 'Process' }">專案流程</router-link>
        </div>
        <div class="start-today">
            <!-- background here -->
            <div class="bg"></div>
            <div class="start-today-des">
                <!-- content here -->
                <h5>今天就開始進行你的專案</h5>
                <p>辰俔設計</p>
                <router-link class="contact-link" :to="{ name: 'Contact' }">聯絡我們</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeProcess',
}
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

.homeprocess-inner {
    max-width: 1160px;
    margin: 0 auto;

    text-align: center;
    h4 {
        font-size: 3rem;
        text-align: center;
        // color: #ffffff;
        color: #996600;
        margin-bottom: 20px;
    }
    p {
        font-size: 2rem;
        max-width: 721px;
        margin: 0 auto;
        line-height: 1.2;
        letter-spacing: 1px;

        @include rwd(mobile) {
            width: 80%;
        }
    }

    .process-link {
        display: inline-block;
        margin-top: 20px;

        border: 1px solid #b47f61;
        padding: 5px 15px;
        // color: white;
        // background-color: #c0a392;
        color: #b47f61;
        font-size: 2rem;
        transition: all 0.3s;
    }
    .process-link:hover {
        background-color: #b47f61;
        color: white;
    }
}

.start-today {
    margin-top: 50px;

    height: 25vw;
    //
    position: relative;

    @include rwd(mobile) {
        height: 55vw;
    }
    .bg {
        background-image: url('../assets/img/homeprocess/home-process2.jpg');
        background-size: cover;
        background-position: center;

        height: 100%;

        filter: blur(2px);

        // background-color: black;

        // position: absolute;
        // opacity: 0.9;
    }
    .start-today-des {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;

        border: 3px solid white;
        padding: 30px;

        background-color: rgba(0, 0, 0, 0.4);
        color: white;

        text-align: center;

        @include rwd(mobile) {
            padding: 10px;
        }
        h5 {
            font-size: 3rem;

            @include rwd(mobile) {
                font-size: 2rem;
            }
        }

        p {
            text-align: center;
            font-size: 2rem;

            margin-top: 10px;

            @include rwd(mobile) {
                font-size: 1.5rem;
            }
        }

        .contact-link {
            display: inline-block;
            margin-top: 20px;

            border: 1px solid #b47f61;
            padding: 5px 15px;
            // color: white;
            // background-color: #c0a392;
            color: #b47f61;
            font-size: 2rem;
            transition: all 0.3s;
        }

        .contact-link:hover {
            background-color: #b47f61;
            color: white;
        }
    }
}
</style>
