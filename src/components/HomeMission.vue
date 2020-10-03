<template>
    <div class="mission">
        <div class="mission-inner">
            <h4>辰俔目標</h4>
            <p>
                在辰俔目標，我們致力於利用我們的室內設計經驗和專業知識為每個人創造令人驚嘆而又實用的空間。
                無論是為項目做簡短的工作，還是為項目盡心盡力，我們的目標都很簡單：提供無壓力的體驗，並滿足客戶的各種需求。
            </p>
            <router-link class="about-link" :to="{ name: 'About' }">關於辰俔</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeMission',
}
</script>

<style lang="scss" scoped>
.mission {
    // background-color: #e6e6e6;
    margin-top: 5%;
    margin-bottom: 30px;
    .mission-inner {
        max-width: 1160px;
        margin: 0 auto;

        text-align: center;
        h4 {
            text-align: center;
            font-size: 3rem;
            color: #996600;

            margin-bottom: 15px;
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

        // link to about
        .about-link {
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

        .about-link:hover {
            background-color: #b47f61;
            color: white;
        }
    }
}
</style>
