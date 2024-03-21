<template>
    <div class="collections">
        <h3 class="collections-title">作品集</h3>
        <div v-for="(item, index) in productionList" :key="index" class="products">
            <div class="product">
                <img :src="item.src" alt />
                <p>{{ item.title }}</p>
        <div>
                    <!-- <span>{{ item.amount }} 筆作品</span> -->

                    <svg class="eye">
                        <use xlink:href="@/assets/svg/eye.svg#Capa_1"></use>
                    </svg>
                    <span> </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collections',
    data() {
        return {
            path: '@/assets/img/production/',
            productionList: [
                {
                    name: 'production1.jpg',
                    src: require('../assets/img/production/production1.jpg'),
                    title: '1960‧我在南曼哈頓',
                    amount: 4,
                },
                {
                    name: 'production2.jpg',
                    src: require('../assets/img/production/production2.jpg'),
                    title: '漫光墅-興進透天宅',
                    amount: 4,
                },
                {
                    name: 'production3.jpg',
                    src: require('../assets/img/production/production3.jpg'),
                    title: '靜光‧御墅家透天宅',
                    amount: 4,
                },
                {
                    name: 'production4.jpg',
                    src: require('../assets/img/production/production4.jpg'),
                    title: '沐石居-員林宅',
                    amount: 4,
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.collections {
    margin: 50px auto;
    padding: 50px 0px;
    max-width: 1280px;

    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: repeat(auto-fit, 32rem);
    grid-gap: 50px;
    justify-content: center;

    .collections-title {
        font-size: 3rem;
        grid-row: 1 / 2;
        grid-column: 1 / -1;
    }

    .products {
        // grid-row: 2 / span 1;

        display: grid;

        grid-template-rows: min-content min-content;

        .product {
            box-shadow: 2px 2px 5px rgba($color: #535353, $alpha: 1);
            overflow: hidden;

            img {
                width: 100%;
            }
            p {
                font-size: 1.8rem;
                font-weight: 700;

                margin-top: 10px;
                margin-left: 2.5%;

                width: 95%;
                border-bottom: 1px solid black;
            }

            .eye {
                fill: rgb(175, 175, 175);
                width: 10px;
                height: 10px;
                margin-top: 10px;
                margin-left: 2.5%;
                margin-bottom: 5px;
            }
        }
    }
}
</style>
