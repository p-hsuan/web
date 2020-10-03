<template>
    <header class="header">
        <div class="layout-navbar">
            <Navbar />
        </div>
        <div class="layout-slider">
            <Slider />
        </div>
    </header>
</template>

<script>
export default {
    components: {
        Navbar: () => import('@/components/Navbar.vue'),
        Slider: () => import('@/components/Slider.vue'),
    },
}
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    .layout-navbar {
        position: fixed;
        // height: 100%;
        width: 100%;
        z-index: 1;
        @include rwd(small) {
            // position: static;
            // height: 100%;
        }
        // background-color: rgb(124, 21, 21);
    }
    .layout-slider {
        height: 100%;
        // background-color: rgb(247, 231, 144);
        position: relative;
        z-index: 0;
    }
}
</style>
