<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
export default {
    components: {
        Home: () => import('@/views/Home.vue'),
    },
}
</script>

<style scss="scss">
@import './style/_base.scss';
</style>
