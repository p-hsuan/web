<template>
    <div class="pagination">
        <ul>
            <li v-if="first" @click="btnFirst">{{ symbolFirst }}</li>
            <li v-if="pre" @click="btnPre">{{ symbolprevious }}</li>
            <li v-if="pre">|</li>
            <li
                v-for="(item, index) in arrayPagination"
                :key="index"
                @click="toPage"
                class="number"
                :class="{ active: currentPage === item }"
            >
                {{ item }}
            </li>
            <li v-if="next">|</li>
            <li v-if="next" @click="btnNext">{{ symbolNext }}</li>
            <li v-if="last" @click="btnLast">{{ symbolLast }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['totalPages'],
    data() {
        return {
            arrayPagination: [1, 2, 3],

            currentPage: 1,

            first: false,
            pre: false,
            next: true,
            last: true,

            // << >>
            symbolFirst: '<<',
            symbolprevious: '<',
            symbolNext: '>',
            symbolLast: '>>',
        }
    },
    methods: {
        btnFirst() {
            this.currentPage = 1
            this.arrayPagination = [1, 2, 3]
        },

        btnNext() {
            // this.arrayPagination = this.arrayPagination.map((x) => x + 1)

            // Change currentPage value to currentPage
            // this.currentPage += 1

            if (this.currentPage === 1) {
                // first page 1 and page , their arrayPagination is same
                // but the currentpage is different
                this.currentPage += 1
                this.arrayPagination = [1, 2, 3]
            } else if (this.currentPage === this.totalPages - 1) {
                this.currentPage += 1
                this.arrayPagination = [
                    this.currentPage - 2,
                    this.currentPage - 1,
                    this.currentPage,
                ]
            } else {
                this.arrayPagination = this.arrayPagination.map((x) => x + 1)

                // Change currentPage value to currentPage
                this.currentPage += 1
            }
        },
        btnPre() {
            // this.arrayPagination = this.arrayPagination.map((x) => x - 1)

            // // Change currentPage value to currentPage
            // this.currentPage -= 1

            if (this.currentPage === 2) {
                this.currentPage -= 1
                this.arrayPagination = [1, 2, 3]
            } else if (this.currentPage === this.totalPages) {
                this.currentPage -= 1
                this.arrayPagination = [
                    this.currentPage - 1,
                    this.currentPage,
                    this.currentPage + 1,
                ]
            } else {
                this.arrayPagination = this.arrayPagination.map((x) => x - 1)

                // Change currentPage value to currentPage
                this.currentPage -= 1
            }
        },

        btnLast() {
            // console.log(typeof this.totalPages, 1234)
            this.currentPage = this.totalPages

            this.arrayPagination = [this.totalPages - 2, this.totalPages - 1, this.totalPages]
        },

        toPage($event) {
            // set new pagination that show on Browser
            // this.arrayPagination = [
            //     parseInt($event.target.innerText, 10) - 1,
            //     parseInt($event.target.innerText, 10),
            //     parseInt($event.target.innerText, 10) + 1,
            // ]

            // special condition happened in first and last
            const place = parseInt($event.target.innerText, 10)
            this.currentPage = place
            // console.log($event.target.innerText === toString(this.totalPages))

            // console.log($event.target.innerText, typeof $event.target.innerText)
            // console.log('totalpages', this.totalPages, typeof toString(this.totalPages))
            if (this.currentPage === 1) {
                this.arrayPagination = [place, place + 1, place + 2]
            } else if (this.currentPage === this.totalPages) {
                this.arrayPagination = [place - 2, place - 1, place]
            } else {
                this.arrayPagination = [place - 1, place, place + 1]
            }
        },
    },

    create() {},

    watch: {
        // detect currentPage
        //  if current page is 1, then previous btn not show
        //  if current page is max, then next btn not show

        currentPage(newValue) {
            if (this.currentPage === 1) {
                this.first = false
                this.pre = false
                this.next = true
                this.last = true
            } else if (this.currentPage === this.totalPages) {
                // If user go to last message, then make next btn and last btn not show

                this.first = true
                this.pre = true
                this.next = false
                this.last = false
            } else {
                this.first = true
                this.pre = true
                this.next = true
                this.last = true
            }

            this.$emit('loadPage', newValue)
            // console.log(newValue)
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
}

li {
    list-style-type: none;
    // border: 1px solid black;

    font-size: 1.6rem;
    padding: 8px;
    margin: 0 5px;

    cursor: pointer;
}

.number {
    color: #aaacaf;
}

// currentpage class

.active {
    color: #000;
    border-bottom: 1px solid #666;
}
</style>
