<template>
    <div id="app">
        <Navbar />
        <router-view></router-view>
        <Footer />
        <!-- <Quiz /> -->
    </div>
</template>

<script>
export default {
    components: {
        // Home: () => import('@/views/Home.vue'),
        // Index: () => import('@/views/Index.vue'),
        Navbar: () => import('@/components/Navbar.vue'),
        Footer: () => import('@/components/Footer.vue'),
        // Quiz: () => import('@/components/Quiz.vue'),
    },
}
</script>

<style lang="scss">
// @import './style/base.scss';
// @import './style/_rwd.scss';
// $desktop: 1200px;
</style>
