<template>
    <div class="gallery">
        <div class="gallery-inner">
            <div class="seperate-line"></div>
            <h4>辰俔作品</h4>

            <div class="gallery-content">
                <figure class="gallery__item gallery__item-1">
                    <img src="@/assets/img/gallery/l1.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-2">
                    <img src="@/assets/img/gallery/s1.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-3">
                    <img src="@/assets/img/gallery/s2.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-4">
                    <img src="@/assets/img/gallery/p1.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-5">
                    <img src="@/assets/img/gallery/p2.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-6">
                    <img src="@/assets/img/gallery/p3.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-7">
                    <img src="@/assets/img/gallery/p7.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-8">
                    <img src="@/assets/img/gallery/p4.jpg" alt />
                </figure>
                <figure class="gallery__item gallery__item-9">
                    <img src="@/assets/img/gallery/p6.jpg" alt />
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            width: window.innerWidth,
            x: null,
        }
    },
    computed: {
        y() {
            return this.width + this.x
        },
    },
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
.gallery {
    // background-color: #f9f7f6;
    // background-color: #e6e6e6;
    padding: 20px 0;

    h4 {
        font-size: 3rem;
        text-align: center;
        // color: #ffffff;
        color: #996600;
    }
}

.gallery-inner {
    max-width: 1160px;
    margin: 0 auto;
}

.gallery-content {
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);
    grid-gap: 15px;
    margin-top: 2%;
    margin-bottom: 2%;

    @include rwd(small) {
        width: 90%;
    }
}

.gallery__item {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.gallery {
    &__item-1 {
        grid-column: 1 / 5;
        grid-row: 1 / 4;
    }
    &__item-2 {
        grid-column: 1 / 3;
        grid-row: 4 / 6;
    }
    &__item-3 {
        grid-column: 1 / 3;
        grid-row: 6 / 8;
    }
    &__item-4 {
        grid-column: 3 / 5;
        grid-row: 4 / 8;
    }

    &__item-5 {
        grid-column: 5 / 7;
        grid-row: 1 / 3;
    }
    &__item-6 {
        grid-column: 5 / 7;
        grid-row: 3 / 5;
    }
    &__item-7 {
        grid-column: 5 / 7;
        grid-row: 5 / 8;
    }
    &__item-8 {
        grid-column: 7 / 9;
        grid-row: 1 / 4;
    }
    &__item-9 {
        grid-column: 7 / 9;
        grid-row: 4 / 8;
    }
}
</style>
