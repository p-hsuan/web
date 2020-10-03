<template>
    <div class="home">
        <div class="container">
            <!-- <section class="sec-header"></section> -->
            <section class="sec-slider">
                <Slider />
            </section>
            <!-- <router-view> </router-view> -->
            <section class="sec-mission">
                <HomeMission />
            </section>
            <section class="sec-newproject">
                <HomeNewProject />
            </section>
            <section class="sec-process">
                <HomeProcess />
            </section>
            <!-- <section class="sec-idea">
                <Idea />
            </section> -->
            <!-- <section class="sec-collections">
                <Collections />
            </section> -->
            <section class="sec-gallery">
                <Gallery />
            </section>
            <section class="new"></section>
            <section class="contact"></section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
        Slider: () => import('@/components/Slider.vue'),
        // Navbar: () => import("@/components/Navbar.vue"),
        HomeMission: () => import('@/components/HomeMission.vue'),
        HomeNewProject: () => import('@/components/HomeNewProject.vue'),
        HomeProcess: () => import('@/components/HomeProcess.vue'),
        // Idea: () => import('@/components/Idea.vue'),
        // Collections: () => import('@/components/Collections.vue'),
        Gallery: () => import('@/components/Gallery.vue'),
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-rows:
        80vh min-content min-content
        min-content min-content min-content;
    grid-template-columns:
        [start] minmax(50px, 1fr) [left-side content-start]
        repeat(12, [col-start] minmax(min-content, 110px) [col-end])
        [content-end right-side] minmax(50px, 1fr) [end];
    /*  */
    grid-row-gap: 50px 100px;
    @include rwd(small) {
        grid-template-rows:
            90vh min-content min-content
            min-content;
    }

    @include rwd(mobile) {
        grid-template-rows:
            90vh min-content min-content
            min-content min-content min-content;
    }
}
.sec-header {
    grid-column: start / end;
}

.sec-slider {
    /* background-color: rgb(134, 118, 118); */
    grid-column: start / end;
}

.sec-mission {
    grid-column: start / end;
    // background-color: #e6e6e6;
}

.sec-newproject {
    grid-column: start / end;
    // background-color: #e6e6e6;
}

.sec-process {
    grid-column: start / end;
    // background-color: #e6e6e6;
}
// .sec-idea {
//     grid-column: start / end;
// }

.sec-collections {
    grid-column: start / end;
    background-color: #f9f9f9;
}

.sec-gallery {
    grid-column: start / end;
    // background-color: #e6e6e6;
}
</style>
