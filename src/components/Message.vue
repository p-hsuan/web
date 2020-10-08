<template>
    <div class="message">
        <!-- <div class="background"><h4>線上諮詢</h4></div> -->
        <div class="message-inner">
            <div class="messageboard">
                <svg @click="close" class="close">
                    <use xlink:href="@/assets/svg/message/x-mark.svg#Cap1" />
                </svg>
                <h4>我要留言</h4>
                <form @submit.prevent="addMessage">
                    <div class="information">
                        <div class="field name">
                            <label class="inputText" for="name">姓名 : </label>
                            <input v-model="personalData.name" type="text" id="name" placeholder="你的姓名" />
                        </div>
                        <p v-show="feedback.name.condition">
                            {{ feedback.name.text }}
                        </p>
                        <div class="field">
                            <label class="inputText" for="mobile">手機 :</label>
                            <input v-model="personalData.mobile" type="text" id="mobile" placeholder="你的電話" />
                        </div>
                        <p v-show="feedback.mobile.condition">
                            {{ feedback.mobile.text }}
                        </p>

                        <div class="field">
                            <label class="inputText" for="email">e-mail :</label>
                            <input v-model="personalData.email" type="text" id="email" placeholder="你的電子郵件" />
                        </div>
                        <p v-show="feedback.email.condition">
                            {{ feedback.email.text }}
                        </p>

                        <!-- select option -->
                        <div class="field">
                            <label class="inputText" for="region">地區:</label>
                            <select id="region" v-model="personalData.region">
                                <option v-for="(item, index) in region" :key="index">{{ item }}</option>
                            </select>
                            <!-- <select>
                                <option value=""></option>
                            </select> -->
                        </div>
                        <p v-show="feedback.region.condition">
                            {{ feedback.region.text }}
                        </p>

                        <!-- radio  -->
                        <div class="field">
                            <div class="radioTitle">
                                預算:
                            </div>
                            <div class="radio">
                                <div class="radio-item">
                                    <input
                                        v-model="personalData.budget"
                                        type="radio"
                                        id="50wbudget"
                                        name="budget"
                                        value="50"
                                    />
                                    <label class="labelRadio" for="50wbudget">50萬</label>
                                </div>
                                <div class="radio-item">
                                    <input
                                        v-model="personalData.budget"
                                        type="radio"
                                        id="100wbudget"
                                        name="budget"
                                        value="100"
                                    />
                                    <label class="labelRadio" for="100wbudget">100萬</label>
                                </div>
                                <div class="radio-item">
                                    <input
                                        v-model="personalData.budget"
                                        type="radio"
                                        id="150wbudget"
                                        name="budget"
                                        value="150"
                                    />
                                    <label class="labelRadio" for="150wbudget">150萬</label>
                                </div>
                                <div class="radio-item">
                                    <input
                                        v-model="personalData.budget"
                                        type="radio"
                                        id="200wbudget"
                                        name="budget"
                                        value="200"
                                    />
                                    <label class="labelRadio" for="200wbudget">200萬</label>
                                </div>
                            </div>
                        </div>
                        <p v-show="feedback.budget.condition">
                            {{ feedback.budget.text }}
                        </p>

                        <!-- textarea -->
                        <div class="feild-textarea">
                            <div class="contentTitle">需求內容 :</div>
                            <textarea v-model="personalData.content" class="content"> </textarea>
                            <p v-show="feedback.content.condition">
                                {{ feedback.content.text }}
                            </p>
                        </div>

                        <div class="field-btn">
                            <button class="btn">留言</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="wrap"></div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
    name: 'Message',
    props: ['totalMessages'],
    data() {
        return {
            personalData: {
                name: null,
                mobile: null,
                email: null,
                region: null,
                budget: null,
                content: null,
            },

            maxMessage: null,

            postTime: null,
            regionDefault: null,
            region: ['台中', '新竹', '桃園'],

            feedback: {
                name: { text: '請確實填寫姓名', condition: false },
                mobile: { text: '請確實填寫聯絡電話', condition: false },
                email: { text: '請確實填寫電子郵件', condition: false },
                region: { text: '請選擇地區', condition: false },
                budget: { text: '請勾選預算', condition: false },
                content: { text: '請填寫需求內容', condition: false },
            },
        }
    },
    methods: {
        addMessage() {
            Object.entries(this.personalData).forEach(([key, value]) => {
                if (value) {
                    this.feedback[key].condition = false
                } else {
                    this.feedback[key].condition = true
                }
            })

            const result = Object.values(this.personalData).every((item) => item != null)

            if (result) {
                db.collection('messages')
                    .get()
                    .then((QuerySnapshot) => {
                        this.maxMessage = QuerySnapshot.size
                    })
                    .then(() => {
                        db.collection('messages')
                            .add({
                                consumer: this.personalData.name,
                                content: this.personalData.content,
                                postTime: this.postTime,
                                index: this.maxMessage + 1,
                            })
                            .then(() => {
                                // window.location.reload()
                                // window.location.href =
                                //     'http://140.115.236.71/demo-personal/DD106/works/T1901813/1/messageboard'
                                // windows
                                window.location.href = 'http://140.115.236.71/demo-personal/DD106/works/T1901813/1/'
                                // this.$router.push({ name: 'Messageboard' })
                            })
                    })
            }
        },

        // close emit to messageboard
        close() {
            this.$emit('close')
        },
    },

    created() {
        const time = new Date()

        function add(n) {
            return n < 10 ? `0${n}` : `${n}`
        }

        this.postTime = `${time.getFullYear()}-${add(time.getMonth() + 1)}-${time.getDate()}`
    },
}
</script>

<style lang="scss" scoped>
.message-inner {
    max-width: 1160px;
    margin: 0 auto;
    // border: 1px solid red;

    // for center messageboard to center of message-inner
    display: flex;

    @include rwd(small) {
        // max-width: none;
        // width: 0%;
        // margin: 0 auto;
    }
    .messageboard {
        border: 1px solid #c0a392;
        background-color: rgb(243, 243, 243);

        // for center messagebo ard to center of message-inner
        margin: 0 auto;

        // for close svg
        position: relative;

        // for content
        padding: 0 20px;
        padding-bottom: 20px;

        // The space to page background and footer
        margin-top: 30px;
        margin-bottom: 30px;

        @include rwd(small) {
            width: 80%;
        }
        .close {
            position: absolute;

            fill: #c0a392;
            background-color: white;

            border-radius: 50%;

            width: 30px;
            height: 30px;

            transform: translate(-50%, -50%);
            left: 100%;

            cursor: pointer;
        }
        h4 {
            text-align: center;
            font-size: 3rem;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        form {
            // for center of information
            display: flex;
            flex-direction: column;
            justify-content: center;

            // border: 1px solid green;

            .information {
                // width: 80%;
                min-width: 360px;
                margin: 0 auto;
                // border: 1px solid rgb(138, 31, 160);

                // padding-left: 20%;

                @include rwd(small) {
                    min-width: 0;
                    // width: 80%;
                    // width: 100%;
                    // margin: 0;
                }
                p {
                    margin-left: 19%;

                    color: rgb(250, 2, 2);

                    font-size: 1rem;

                    margin-bottom: 5px;

                    @include rwd(small) {
                        margin-left: 0;
                    }
                }
                .field {
                    display: flex;
                    align-items: center;
                    margin-top: 8px;

                    font-size: 2rem;

                    @include rwd(small) {
                        flex-direction: column;

                        // make align to left
                        align-items: flex-start;
                    }

                    // ---------Text input ----------//

                    // input type text style
                    input[type='text'] {
                        padding: 6px;
                        border: 1.5px #dadce0 solid;
                        font-size: 2.2rem;

                        transition: border 0.2s cubic-bezier(0.4, 0, 0.2, 1);

                        @include rwd(small) {
                            width: 80%;
                            padding: 3px;

                            font-size: 1.6rem;
                        }
                    }

                    // make placeholder text be disappeared when user click input
                    input:focus::placeholder {
                        color: transparent;
                        // border: 2px solid rgb(32, 33, 36);
                    }

                    input:focus {
                        border: 1.5px solid #1a73e8;
                        // outline-color: rgb(0, 123, 160);
                        // outline-width: medium;
                        // border: none;
                        outline: none;
                    }

                    // aligin vertical
                    label.inputText {
                        // margin-right: 10px;

                        flex: 0 1 19%;

                        @include rwd(small) {
                            margin-bottom: 5px;
                            font-size: 1.8rem;
                        }
                    }

                    // --------------------- //
                    // Select option //
                    select {
                        padding: 2px 3px;
                    }

                    // --------------------- //
                    // Radio input

                    // make radio have space to text
                    input[type='radio'] {
                        margin-right: 3px;
                    }

                    .radioTitle {
                        flex: 0 1 19%;
                    }

                    .labelRadio {
                        margin-right: 8px;
                    }
                }

                // --------------------- //
                // textarea //
                .feild-textarea {
                    display: flex;
                    flex-direction: column;

                    // border: 1px solid blue;

                    font-size: 2rem;

                    // space between to btn
                    margin-bottom: 5px;
                    margin-top: 8px;

                    .contentTitle {
                        margin-bottom: 5px;
                    }

                    textarea {
                        // display: block;
                        resize: none;
                        outline: none;

                        border: 1.5px #dadce0 solid;

                        padding: 5px;

                        font-size: 2rem;

                        box-sizing: border-box;

                        display: block;

                        width: 100%;
                    }

                    textarea:focus {
                        border: 1.5px solid #1a73e8;
                    }

                    // textarea feedback
                    p {
                        margin-left: 0%;

                        color: rgb(250, 2, 2);

                        font-size: 1rem;

                        margin-bottom: 5px;
                    }
                }

                .field-btn {
                    margin-top: 20px;

                    text-align: center;

                    .btn {
                        padding: 2px 10px;

                        border: 1px solid #c0a392;
                        background-color: rgb(245, 245, 245);

                        font-size: 2rem;
                        color: #c0a392;

                        outline: none;
                    }

                    .btn:hover {
                        background-color: #c0a392;
                        color: white;
                    }

                    .btn:active {
                        position: relative;
                        top: 1px;
                    }
                }
            }
        }
    }
}
</style>
