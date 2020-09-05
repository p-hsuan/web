<template>
    <div class="container">
        <section class="sec-header">
            <Header />
        </section>

        <section class="sec-collections">
            <Collections />
        </section>
        <section class="sec-shop-collection">
            <!-- <Shop /> -->
        </section>
        <section class="new"></section>
        <section class="contact"></section>
        <footer class="footer"></footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
        Header: () => import('@/components/Header.vue'),
        // Shop: () => import('@/components/Shop.vue'),
        Collections: () => import('@/components/Collections.vue'),
    },
}
</script>

<style scss="scss" scoped>
.container {
    display: grid;
    grid-template-rows:
        min-content min-content min-content
        min-content min-content min-content;
    grid-template-columns:
        [start] minmax(50px, 1fr) [left-side content-start]
        repeat(10, [col-start] minmax(min-content, 140px) [col-end])
        [content-end right-side] minmax(50px, 1fr) [end];
}

.sec-header {
    /* background-color: rgb(134, 118, 118); */
    grid-column: start / end;
}

.sec-inspiration {
    grid-column: left-side / right-side;
}

.sec-collections {
    grid-column: left-side / right-side;
}
</style>
