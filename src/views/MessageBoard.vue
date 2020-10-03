<template>
    <div class="message-board">
        <div class="background"><h4>線上諮詢</h4></div>
        <div class="slide-btn-inner">
            <button class="slidebtn" @click="show = !show">我要留言</button>
        </div>
        <!-- <button class="btn" @click="slide">xxxx</button> -->
        <transition name="slide">
            <keep-alive>
                <Message
                    class="mes"
                    v-if="show"
                    :totalMessages="totalMessages"
                    @close="show = false"
                />
            </keep-alive>
        </transition>
        <div class="message-board-inner">
            <div v-for="(item, index) in messages" :key="index" class="board-row">
                <div class="date-name">
                    <!-- <div>{{ item.index }}</div> -->
                    <div class="date">
                        <span class="date-title">留言日期</span>
                        <span class="colon"> : </span>
                        <span class="date-time">{{ item.postTime }}</span>
                    </div>
                    <div class="name">
                        <span class="name-title">留言者</span>
                        <span class="colon"> : </span>
                        <span class="name-time">{{ item.consumer }}</span>
                    </div>
                </div>
                <div class="content">{{ item.content }}</div>
                <div class="replay-date"></div>
                <div class="reply">{{ item.replay }}</div>
            </div>

            <div class="messageboard-pages">
                <Pagination :totalPages="totalPages" @loadPage="loadPage" />
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init.js'
// import $ from 'jquery'

export default {
    name: 'MessageBoard',
    data() {
        return {
            messages: [],
            totalMessages: null,
            totalPages: null,
            show: false,
        }
    },
    methods: {
        loadPage(cur) {
            let i = 0
            db.collection('messages')
                .orderBy('index', 'desc')
                .startAt(this.totalMessages - (cur - 1) * 3)
                .endAt(this.totalMessages - (cur - 1) * 3 - 2)
                // .endAt(cur * 3)

                // .orderBy('postTime', 'desc')
                // .limit(cur * 3)
                // .limitToLast(1)
                .get()
                .then((QuerySnapshot) => {
                    QuerySnapshot.forEach((QueryDocumnetSanpshot) => {
                        // return {consumer = QueryDocumnetSanpshot.get('consumer'),
                        // content = QueryDocumnetSanpshot.get('content'),
                        // postTime = QueryDocumnetSanpshot.get('postTime') }
                        this.$set(this.messages, i, {
                            consumer: QueryDocumnetSanpshot.get('consumer'),
                            content: QueryDocumnetSanpshot.get('content'),
                            postTime: QueryDocumnetSanpshot.get('postTime'),
                            // index: QueryDocumnetSanpshot.get('index'),
                        })
                        i += 1
                    })
                })
        },

        // slide() {
        //     console.log(1234)

        //     $('.mes').slideToggle('slow')
        // },
    },
    mounted() {},
    computed: {
        // totalShowPage() {
        //     We need pass a number to child component,
        //     telling child component how many pagination should show
        //     We will return a number and pass it to child component,
        //     then child component could loop it to create the right number of  li tag.
        //     if messages > 6 show 3 pagination,
        //     if  3 < messages <=6 show 2 pagination.
        //     if (this.messages.length > 6) {
        //         return [1, 2, 3]
        //     }
        //     if (this.messages.length >= 3 && this.messages.length < 6) {
        //         return [1, 2]
        //     }
        //     return [1]
        // },
        // totalArray() {
        //     return Array.from(Array(this.totalPage).keys())
        // },
    },
    components: {
        Pagination: () => import('@/components/Pagination.vue'),
        Message: () => import('@/components/Message.vue'),
    },
    created() {
        // when go to messagesboard page, fetch the newest 3 message from db
        db.collection('messages')
            .orderBy('index', 'desc')
            .limit(3)
            .get()
            .then((QuerySnapshot) => {
                QuerySnapshot.forEach((QueryDocumnetSanpshot) => {
                    this.messages.push({
                        consumer: QueryDocumnetSanpshot.get('consumer'),
                        content: QueryDocumnetSanpshot.get('content'),
                        postTime: QueryDocumnetSanpshot.get('postTime'),
                        // index: QueryDocumnetSanpshot.get('index'),
                    })
                })
            })
        // get the total documents of the collection
        db.collection('messages')
            .get()
            .then((QuerySnapshot) => {
                this.totalMessages = QuerySnapshot.size
            })
            .then(() => {
                // calculate one pages show how many messages
                this.totalPages = Math.ceil(this.totalMessages / 3)
            })
    },
}
</script>

<style lang="scss" scoped>
.message-board {
    background-color: rgba(19, 29, 46, 0.877);
    padding-bottom: 50px;
}

.background {
    height: 350px;
    background-image: url('../assets/img/message/message.jpg');
    background-position: center;
    background-size: cover;
    opacity: 0.88;

    position: relative;
    // for h4

    h4 {
        position: absolute;
        left: 50%;
        top: 65%;
        transform: translate(-50%, -50%);

        opacity: 1;
        color: white;
        font-size: 3rem;
    }
}

// message transition show

.slide-enter {
    max-height: 0;
    overflow: hidden;
}

.slide-enter-active {
    transition: all 2s;
    overflow: hidden;
}

.slide-enter-to {
    max-height: 800px;
}

.slide-leave {
    max-height: 800px;
    overflow: hidden;
}

.slide-leave-active {
    transition: all 2s;
}

.slide-leave-to {
    overflow: hidden;
    max-height: 0px;
}

// slide buttion
.slide-btn-inner {
    max-width: 1160px;
    margin: 0 auto;

    margin-top: 50px;

    display: flex;
    // justify-content: flex-end;
    .slidebtn {
        margin-left: 15%;
        padding: 5px 10px;

        background-color: #c0a392;
        color: white;

        border-radius: 5px;

        cursor: pointer;
        outline: none;
    }
}
.slidebtn {
    border: none;
}

// message board
.message-board-inner {
    max-width: 880px;
    margin: 0 auto;
    margin-top: 30px;

    background-color: rgb(240, 239, 239);
    border-radius: 10px;

    padding: 20px 20px;
    .board-row {
        border: 1px solid #c0a392;

        margin: 10px 0;
        padding: 10px;

        // message date and commenter
        .date-name {
            display: flex;
            .date {
                .date-title {
                    font-weight: 800;
                    font-size: 1.8rem;
                }
                .colon {
                    font-weight: 600;
                    font-size: 1.6rem;
                }
                .date-time {
                    color: #666666;
                    font-size: 1.5rem;
                }
            }

            .name {
                margin-left: 5%;
                .name-title {
                    font-weight: 800;
                    font-size: 1.8rem;
                }
                .colon {
                    font-weight: 600;
                    font-size: 1.6rem;
                }
                .name-time {
                    color: #666666;
                    font-size: 1.5rem;
                }
            }
        }

        // message content
        .content {
            margin-top: 10px;

            color: #666666;
            font-size: 1.5rem;
        }
    }

    .messageboard-pages {
        display: flex;
        justify-content: center;
    }
}
</style>
