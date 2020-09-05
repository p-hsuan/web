<template>
    <div class="collections">
        <h3 class="collections-title">作品集</h3>
        <div v-for="(item, index) in productionList" :key="index" class="products">
            <div class="product">
                <img :src="item.src" alt />
                <p></p>
                <div>
                    <span>dd</span>
                    <span>x</span>
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
                },
                {
                    name: 'production2.jpg',
                    src: require('../assets/img/production/production2.jpg'),
                },
                {
                    name: 'production3.jpg',
                    src: require('../assets/img/production/production3.jpg'),
                },
                {
                    name: 'production4.jpg',
                    src: require('../assets/img/production/production4.jpg'),
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.collections {
    margin: 100px 0;
    max-width: 1440px;
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 100px;

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
            img {
                width: 100%;
            }
        }
    }
}
</style>
