<template>
    <div class="idea">
        <img class="idea__pic1" src="@/assets/img/idea/idea2.jpg" alt />
        <img class="idea__pic2" src="@/assets/img/idea/idea4.jpg" alt />
        <div class="idea__color"></div>
        <div class="idea__content">
            <h3>設計</h3>
            <p>
                是在解決美學形式與日常生活中共存的問題。 以不同的方式探討它、解決它，
                同時迸出靈感生長，構成一個空間的精神內涵。
            </p>
            <button>Read More</button>
        </div>
        <div class="idea__background"></div>
    </div>
</template>

<script>
export default {
    name: 'Idea',
}
</script>

<style lang="scss" scoped>
.idea {
    // height: 500px;
    display: grid;
    grid-template-columns: minmax(50px, 1fr) repeat(6, 1fr) minmax(50px, 1fr);
    grid-template-rows: minmax(25px, 0.3fr) repeat(3, 1fr) minmax(10px, 0.3fr);
    // align-items: center;
    // justify-items: center;
    // background-color: #af8766;

    margin-top: 50px;

    &__pic1 {
        width: 80%;
        grid-column: 2 / 5;
        grid-row: 2 / 5;
        box-shadow: 0 2rem 5rem rgba(#000, 0.1);

        justify-self: end;
    }

    &__pic2 {
        width: 100%;
        grid-column: 4 / 6;
        grid-row: 2 / 4;
        position: relative;
        left: 30%;
        bottom: 20%;

        box-shadow: 0 2rem 5rem rgba(#000, 0.1);
    }

    &__color {
        grid-column: 6 / 8;
        grid-row: 2 / 5;
        width: 100%;
        height: 70%;
        align-self: end;
        background-color: #c5835d;
    }

    &__content {
        // background-color: red;
        grid-column: 6 / 8;
        grid-row: 3 / 5;

        align-self: end;
        width: 80%;
        height: 85%;

        h3 {
            font-size: 5rem;
            text-align: right;
            margin: 10px 0;
            justify-self: end;
        }

        p {
            font-size: 2.5rem;
        }
    }

    &__background {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        background-color: hsl(22, 27%, 66%);
        z-index: -10;
        clip-path: polygon(0 73%, 100% 35%, 100% 100%, 0% 100%);
    }
}

.test {
    margin-left: 50%;
}
</style>
