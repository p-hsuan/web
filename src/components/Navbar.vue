<template>
    <div class="navbar">
        <div class="navbar__search">
            <svg class="magnifier">
                <use xlink:href="@/assets/svg/search.svg#Capa_1" />
            </svg>
        </div>

        <nav class="navbar__nav">
            <router-link class="link" :to="{}">首頁</router-link>
            <router-link class="link" :to="{}">作品</router-link>
            <div class="logo">
                <img src="@/assets/img/logo/logo.png" alt="" />
            </div>

            <router-link class="link" :to="{}">報價</router-link>
            <router-link class="link" :to="{}">關於</router-link>
        </nav>
        <div class="navbar__member">
            <svg class="member">
                <use xlink:href="@/assets/svg/user.svg#Capa_1" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    margin: 0 2vw;

    &__search {
        align-self: center;
        .magnifier {
            display: block;

            width: 30px;
            height: 30px;
        }
    }
    &__nav {
        flex: 1 1 auto;

        display: flex;
        justify-content: center;

        .logo {
            width: 50px;
            img {
                display: block;
                width: 100%;
                border-radius: 50%;
                margin: 5px 0;
            }
        }

        .link {
            display: flex;
            align-items: center;

            font-size: 2rem;
            padding: 0 10px;
            margin: 0 5%;
            color: black;
        }
    }

    &__member {
        align-self: center;
        .member {
            width: 30px;
            height: 30px;
        }
    }
}
</style>
