<template>
    <div class="navbar barhide">
        <!-- <div class="navbar__search">
            <svg class="magnifier">
                <use xlink:href="@/assets/svg/search.svg#Capa_1" />
            </svg>
        </div> -->
        <div class="navbar__logo">
            <img src="@/assets/img/logo/logo.png" alt="" />
        </div>
        <!-- <transition name="mobileAnimation"> -->
        <nav class="navbar__nav">
            <router-link class="link" :to="{ name: 'Home' }">首頁</router-link>
            <router-link class="link" :to="{ name: 'About' }">關於辰俔</router-link>

            <router-link class="link" :to="{ name: 'Portfolio' }">作品欣賞</router-link>

            <!-- <div class="logo">
                    <img src="@/assets/img/logo/logo.png" alt="" />
                </div> -->

            <router-link class="link" :to="{ name: 'Process' }">專案流程</router-link>
            <router-link class="link" :to="{ name: 'Contact' }">聯絡我們</router-link>
            <router-link class="link" :to="{ name: 'MessageBoard' }">線上諮詢</router-link>
        </nav>
        <!-- </transition> -->

        <div class="navbar__member">
            <svg class="member">
                <use xlink:href="@/assets/svg/user.svg#Capa_1" />
            </svg>
        </div>
        <button
            @click="hamburgerShow"
            :class="{ 'is-active': hamburgerState }"
            class="navbar__hamburger hamburger hamburger--spin"
            type="button"
        >
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <!-- mobile -->
        <transition name="mobileAnimation">
            <nav v-if="!show" class="mobile_navbar__nav">
                <!-- <a @click="x" class="link">Home</a>
                <a @click="x" class="link">About</a> -->
                <router-link @click.native="x" class="link" :to="{ name: 'Home' }"
                    >首頁</router-link
                >
                <router-link @click.native="x" class="link" :to="{ name: 'About' }"
                    >關於辰俔</router-link
                >
                <router-link @click.native="x" class="link" :to="{ name: 'Portfolio' }"
                    >作品欣賞</router-link
                >
                <router-link @click.native="x" class="link" :to="{ name: 'Process' }"
                    >專案流程</router-link
                >
                <router-link @click.native="x" class="link" :to="{ name: 'Contact' }"
                    >聯絡我們</router-link
                >
                <router-link @click.native="x" class="link" :to="{ name: 'MessageBoard' }"
                    >線上諮詢</router-link
                >
            </nav>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            hamburgerState: false,
            show: true,
        }
    },
    methods: {
        hamburgerShow() {
            this.hamburgerState = !this.hamburgerState
            this.show = !this.show
            // document.querySelector('.navbar__nav').style.opacity = 1
        },
        x() {
            this.show = !this.show
            this.hamburgerState = false
        },
        // y() {
        //     this.$router.push({ name: 'About' })
        // },
    },
    created() {
        // const pre = window.innerWidth
        // if (window.innerWidth < 767) {
        //     this.show = false
        //     console.log(1)
        // }
        // window.addEventListener('resize', () => {
        //     // const cur = window.innerWidth
        //     if (window.innerWidth < 767) {
        //         this.show = false
        //         console.log(1)
        //     } else {
        //         this.show = true
        //     }
        // })
    },
    mounted() {
        // let prevScrollpos = window.pageYOffset
        // console.log(prevScrollpos)
        // console.log(document.querySelector('.barhide'))
        // window.onscroll = () => {
        //     const currentScrollPos = window.pageYOffset
        //     console.log(prevScrollpos, currentScrollPos)
        //     if (prevScrollpos > currentScrollPos) {
        //         document.querySelector('.barhide').style.transform = 'translateY(0%)'
        //     } else {
        //         document.querySelector('.barhide').style.transform = 'translateY(-80%)'
        //     }
        //     prevScrollpos = currentScrollPos
        // }
        // console.log(window.innerWidth)
        // document.getElementsByTagName('body')[0].addEventListener('resize', () => {
        //     console.log(window.innerWidth)
        // })
    },
    watch: {},
}
</script>

<style lang="scss" scoped>
$hamburger-layer-color: rgb(255, 255, 255) !default;
@import '~hamburgers/_sass/hamburgers/hamburgers.scss';

.navbar {
    display: flex;
    // margin: 0 0;
    background-color: rgb(27, 27, 27);
    // background-image: url('../assets/img/header/header_bg.png');

    // &__search {
    //     align-self: center;
    //     .magnifier {
    //         display: block;

    //         width: 30px;
    //         height: 30px;
    //     }

    //     @include rwd(small) {
    //         display: none;
    //     }
    // }

    &__logo {
        flex: 0 1 50px;
        margin-left: 30px;
        img {
            display: block;
            width: 100%;
            border-radius: 50%;
            margin: 10px 0;
        }
    }
    &__nav {
        flex: 1 1 auto;

        display: flex;
        justify-content: center;

        .link {
            display: flex;
            align-items: center;

            font-size: 2rem;
            padding: 0 10px;
            margin: 0 3%;
            color: #d1d1d1;
            transition: color 0.4s ease 0s;

            @include rwd(small) {
                // display: none;
            }
        }

        .link:hover {
            color: #8b8b8b;
        }

        .a {
            color: #b47f61;
        }
    }

    &__member {
        align-self: center;
        margin-right: 30px;
        // mobile member icon don't show
        fill: rgb(255, 255, 255);
        @include rwd(small) {
            display: none;
        }
        .member {
            width: 30px;
            height: 30px;
        }
    }

    &__hamburger {
        outline: none;
        display: none;
        position: absolute;
        @include rwd(small) {
            display: block;
            right: 0;
            margin-top: 10px;
        }
    }
}

// bar hide when scroll
.barhide {
    // transition: transform 0.7s;
    // top: 100%;
    // left: 50%;
    // left: -50%;
}

// mobile navbar rwd
.navbar {
    @include rwd(small) {
        display: flex;
        flex-direction: column;
        // margin: 0 0;
        position: fixed;
        top: 0;
        z-index: 5;
        width: 100%;
    }
    &__logo {
        @include rwd(small) {
            display: block;
            width: 50px;

            img {
                display: block;
                width: 100%;
                border-radius: 50%;
                margin: 10px 0;
                margin-left: 15px;
            }
        }
    }
    &__nav {
        @include rwd(small) {
            display: none;
        }
    }
}

.mobile_navbar__nav {
    display: none;
    @include rwd(small) {
        flex-direction: column;
        position: absolute;
        top: 70px;
        width: 100%;

        height: calc(120vh - 70px);
        z-index: 10;

        background-color: rgb(41, 41, 41);
        display: flex;
    }
    .link {
        display: flex;
        @include rwd(small) {
            font-size: 2rem;
            padding: 20px 0;
            justify-content: center;
            color: rgb(255, 255, 255);
        }
    }
}

// mobile animation

.mobileAnimation-enter {
    opacity: 0;
}

.mobileAnimation-enter-active {
    transition: opacity 0.7s;
}

.mobileAnimation-leave {
}

.mobileAnimation-leave-active {
    opacity: 0;
    transition: opacity 0.7s;
}

// transition

.show {
    opacity: 1;
}
</style>
