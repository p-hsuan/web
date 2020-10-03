<template>
    <div class="process">
        <div class="background">
            <h4>專案流程</h4>
        </div>
        <div class="process__main">
            <div class="process__main__inner">
                <div class="step">
                    <div class="step-description">
                        <svg class="step__svg">
                            <use xlink:href="@/assets/svg/process/conversation.svg#Capa_1" />
                        </svg>
                        <!-- <div class="line"></div> -->
                        <h5>1. 初識階段</h5>
                        <p>需求討論</p>
                        <p>預算討論</p>
                        <p>初期顧問建議</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-description">
                        <svg class="step__svg">
                            <use xlink:href="@/assets/svg/process/sketch2.svg#Capa_1" />
                        </svg>
                        <h5>2. 設計階段</h5>
                        <p>相關資料</p>
                        <p>需求研討</p>
                        <p>蒐集細部圖說繪製</p>
                        <p>3D示意圖</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-description">
                        <svg class="step__svg">
                            <use xlink:href="@/assets/svg/process/worker.svg#Capa_1" />
                        </svg>
                        <h5>3. 工程階段</h5>
                        <p>
                            工期管理評估
                        </p>
                        <p>採購計畫</p>
                        <p>監工服務</p>
                        <p>施工階段說明</p>
                        <p>完工驗收</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-description">
                        <svg class="step__svg">
                            <use xlink:href="@/assets/svg/process/house.svg#Capa_1" />
                        </svg>
                        <h5>4. 交屋階段</h5>
                        <p>工程驗收</p>
                        <p>攝影紀錄</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Process',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.process {
    .background {
        height: 350px;
        background-image: url('../assets/img/process/process2.jpg');
        background-position: center;
        background-size: cover;
        opacity: 0.88;

        position: relative;
        // for h4

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

    .process__main__inner {
        max-width: 1160px;
        margin: 0 auto;
        padding: 6% 0;

        display: flex;
        flex-wrap: wrap;

        @include rwd(small) {
            padding-top: 10%;
            padding-bottom: 0;
        }

        .step {
            flex: 0 1 25%;
            // margin-left: 6%;
            display: flex;
            flex-direction: column;
            align-items: center;
            // display: flex;
            // margin-left: -17%;
            @include rwd(small) {
                flex: 0 1 50%;
                margin-bottom: 50px;
            }
            .step-description {
                .step__svg {
                    width: 50px;
                    height: 50px;
                    fill: #996600;
                }
                .line {
                    align-self: center;
                    width: 50%;
                    border-bottom: 1px solid rgb(145, 143, 143);
                }
                h5 {
                    font-size: 2.2rem;
                    font-weight: 600;
                    margin: 15px 0;
                    @include rwd(small) {
                        font-size: 2rem;
                    }
                }
                p {
                    font-size: 2rem;
                    margin: 5px 0;
                    @include rwd(small) {
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
}
</style>
