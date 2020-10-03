<template>
    <div class="portfolio">
        <div class="background"><h4>作品集</h4></div>

        <div class="classifier">
            <div class="classifier-inner">
                <span>分類:</span>
                <select v-model="classification">
                    <option value="all">全部</option>
                    <option value="residential">住宅</option>
                    <option value="commercial">商用</option>
                </select>
                <!-- <span @click="select">{{ classification }}</span> -->
                <span>排序:</span>
                <label for="newest" @click="sortDate" class="underline"
                    >最新<input type="radio" name="order" id="newest"
                /></label>
                <label for="view" @click="sortView" class="underline"
                    >瀏覽數<input type="radio" name="order" id="view"
                /></label>
            </div>
        </div>

        <div class="portfolio">
            <div class="portfolio-wrapper">
                <div
                    v-show="item.show"
                    v-for="(item, index) in items"
                    :key="index"
                    class="portfolio-item"
                >
                    <div class="item-pic">
                        <img :src="item.src" alt="" />
                        <!-- <img src="@/assets/img/portfolio/1.jpg" alt="" /> -->
                    </div>
                    <div class="item-outline">
                        <h4>{{ item.name }}</h4>
                        <p class="detail">{{ item.description }}</p>
                        <div class="line"></div>
                        <div class="views">
                            <span class="view">{{ item.views }} 人瀏覽</span>
                            <span>{{ item.date }}</span>
                        </div>

                        <!-- <a
                            href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                            target="_blank"
                        >
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Production',
    components: {
        // Navbar: () => import('@/components/Navbar.vue'),
    },
    data() {
        return {
            classification: 'all',
            items: [
                {
                    date: '2020-08-15',
                    type: 'residential',
                    name: '層序容器',
                    description: 'WCASA絕傢俬全戶家具訂製',
                    src: require('@/assets/img/portfolio/1.jpg'),
                    fileName: '1.jpg',
                    views: 1576,
                    show: true,
                },
                {
                    date: '2020-09-22',
                    type: 'commercial',
                    name: '文藝L宅',
                    description: '古典混搭風格',
                    src: require('@/assets/img/portfolio/2.jpg'),
                    fileName: '1.jpg',
                    views: 1347,
                    show: true,
                },
                {
                    date: '2020-07-10',
                    type: 'commercial',
                    name: '覓.秘',
                    description: '簡約自然 人文質樸',
                    src: require('@/assets/img/portfolio/3.jpg'),
                    fileName: '1.jpg',
                    views: 325,
                    show: true,
                },
                {
                    date: '2020-08-10',
                    type: 'residential',
                    name: '光影.引景',
                    description: '減壓精品飯店風格',
                    src: require('@/assets/img/portfolio/4.jpg'),
                    fileName: '1.jpg',
                    views: 874,
                    show: true,
                },
                {
                    date: '2020-06-10',
                    type: 'residential',
                    name: '矩型.排列',
                    description: '多色混搭現代風格',
                    src: require('@/assets/img/portfolio/5.jpg'),
                    fileName: '1.jpg',
                    views: 675,
                    show: true,
                },
                //
                //
                //
                {
                    date: '2020-07-01',
                    type: 'commercial',
                    name: '木質.本質',
                    description: '溫潤木質 大器自然',
                    src: require('@/assets/img/portfolio/6.jpg'),
                    fileName: '1.jpg',
                    views: 951,
                    show: true,
                },
                {
                    date: '2020-07-01',
                    type: 'commercial',
                    name: '蘭亭序.靜境',
                    description: '古典混搭風格',
                    src: require('@/assets/img/portfolio/7.jpg'),
                    fileName: '1.jpg',
                    views: 743,
                    show: true,
                },
                {
                    date: '2020-07-01',
                    type: 'commercial',
                    name: '灰色淬鍊',
                    description: '低調灰底 多元混搭',
                    src: require('@/assets/img/portfolio/8.jpg'),
                    fileName: '1.jpg',
                    views: 781,
                    show: true,
                },
                {
                    date: '2020-07-01',
                    type: 'residential',
                    name: '原聚',
                    description: '灰色基底 木紋質樸',
                    src: require('@/assets/img/portfolio/9.jpg'),
                    fileName: '1.jpg',
                    views: 1204,
                    show: true,
                },
                {
                    date: '2020-07-01',
                    type: 'residential',
                    name: '經典曼哈頓',
                    description: 'Residential/桃園藝文特區 75坪',
                    src: require('@/assets/img/portfolio/10.jpg'),
                    fileName: '1.jpg',
                    views: 991,
                    show: true,
                },
                {
                    date: '2020-05-22',
                    type: 'commercial',
                    name: '文藝L宅',
                    description: '古典混搭風格',
                    src: require('@/assets/img/portfolio/11.jpg'),
                    fileName: '1.jpg',
                    views: 784,
                    show: true,
                },
                {
                    date: '2020-05-17',
                    type: 'commercial',
                    name: '蘭亭序H宅',
                    description: '低調大器 人文自然',
                    src: require('@/assets/img/portfolio/12.jpg'),
                    fileName: '1.jpg',
                    views: 374,
                    show: true,
                },
                {
                    date: '2020-07-29',
                    type: 'commercial',
                    name: '九牧世家MODEL H',
                    description: '簡約 時尚 人文 自然舒服',
                    src: require('@/assets/img/portfolio/13.jpg'),
                    fileName: '1.jpg',
                    views: 741,
                    show: true,
                },
                {
                    date: '2020-07-29',
                    type: 'commercial',
                    name: '翰林富苑B宅',
                    description: '自然風',
                    src: require('@/assets/img/portfolio/14.jpg'),
                    fileName: '1.jpg',
                    views: 628,
                    show: true,
                },
                {
                    date: '2020-08-01',
                    type: 'residential',
                    name: '界.限.回歸',
                    description: 'Residential/竹北 蘭亭序 75坪',
                    src: require('@/assets/img/portfolio/15.jpg'),
                    fileName: '1.jpg',
                    views: 853,
                    show: true,
                },
                {
                    date: '2020-08-01',
                    type: 'residential',
                    name: '光.透居',
                    description: 'Residential/竹北 世界之窗 100坪',
                    src: require('@/assets/img/portfolio/16.jpg'),
                    fileName: '1.jpg',
                    views: 1001,
                    show: true,
                },
                {
                    date: '2020-07-25',
                    type: 'residential',
                    name: '沐光映影',
                    description: 'Residential/竹北 鉅虹雲山80坪',
                    src: require('@/assets/img/portfolio/17.jpg'),
                    fileName: '1.jpg',
                    views: 431,
                    show: true,
                },
                {
                    date: '2020-09-01',
                    type: 'residential',
                    name: '復藝之所',
                    description: 'Residential/竹北 中悅皇苑135坪',
                    src: require('@/assets/img/portfolio/18.jpg'),
                    fileName: '1.jpg',
                    views: 751,
                    show: true,
                },
            ],
        }
    },

    methods: {
        select(e) {
            console.log(e)
        },
        sortDate() {
            this.items = this.items.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse()
            // console.log(new Date('2020-09-11') - new Date('2020-09-12'))
            // console.log(this.items)
        },
        sortView() {
            this.items = this.items.sort((a, b) => a.views - b.views).reverse()
        },
    },
    watch: {
        classification() {
            if (this.classification === 'all') {
                this.items.forEach((e) => {
                    e.show = true
                })
            } else if (this.classification === 'residential') {
                this.items.forEach((e) => {
                    // e.show = e.type === 2 ? true : false
                    e.show = e.type === 'residential'
                })
            } else if (this.classification === 'commercial') {
                this.items.forEach((e) => {
                    e.show = e.type === 'commercial'
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.portfolio {
    .background {
        height: 350px;
        background-image: url('../assets/img/portfolio/portfolio.jpg');
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
}

.classifier-inner {
    max-width: 1160px;
    margin: 50px auto;
    display: flex;
    justify-content: center;

    select {
        flex: 0 1 50px;
        margin-right: 20px;
        padding: 5px 5px;
        // width: 50px;
        align-self: center;
        @include rwd(mobile) {
            margin-right: 5px;
        }
    }
    span {
        margin: 5px 10px;
        padding: 2px 2px;
        font-size: 2rem;

        @include rwd(mobile) {
            margin: 5px 5px;
        }
    }
    span.underline {
        // border-bottom: 1px solid black;
    }

    label {
        display: flex;
        align-items: center;
        font-size: 2rem;
    }
    input {
        margin-right: 15px;
        margin-left: 5px;
        // padding: 2px 2px;
        @include rwd(mobile) {
            margin-right: 5px;
        }
    }
}

.portfolio {
    // space between footer
    padding-bottom: 50px;
    .portfolio-wrapper {
        max-width: 1160px;
        // background-color: rgb(182, 181, 181);
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fit, 500px);
        grid-auto-rows: 184px;

        justify-content: center;

        grid-column-gap: 50px;
        grid-row-gap: 50px;

        @include rwd(mobile) {
            grid-template-columns: repeat(auto-fit, 90%);
        }
        .portfolio-item {
            display: flex;
            border: 1px solid rgba(202, 221, 230, 0.76);
            .item-pic {
                flex: 0 1 55%;
                position: relative;

                overflow: hidden;
                img {
                    // width: 105%;
                    // position: absolute;
                    // transform: translate(-50%, -50%);
                    // top: 50%;
                    // left: 50%;

                    // cursor: pointer;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .item-outline {
                flex: 0 1 40%;
                padding-left: 5%;
                padding-right: 2.5%;
                // for push views div to bottom
                display: flex;
                flex-direction: column;

                h4 {
                    margin-top: 10%;
                    font-size: 2.2rem;
                    margin-bottom: 8%;

                    color: #232629;
                }

                .detail {
                    font-size: 1.5rem;
                    color: #515e65;

                    // for push views div to bottom
                    flex: 1 1 auto;
                }
                .line {
                    height: 1px;
                    background-color: rgb(81, 94, 101);
                    opacity: 0.2;
                }
                .views {
                    padding-top: 5px;
                    padding-bottom: 10px;
                    color: #515e65;

                    display: flex;
                    .view {
                        // display: inline-block;
                        margin-right: auto;
                    }
                }
            }
        }
    }
}
</style>
