<template>
    <h2 class="pt-5">Lists and stats</h2>
    <div class="flex align-items-center flex-wrap text-sm mb-6">
        <div class="mr-5 mt-3 cursor-pointer" @click="toggleReadingNow">
            <span class="font-medium text-500">Reading now</span>
            <div class="text-700 mt-2">{{readingList.length}}</div>
        </div>
        <div class="mr-5 mt-3 cursor-pointer" @click="toggleWantToRead">
            <span class="font-medium text-500">Want to read</span>
            <div class="text-700 mt-2">{{toReadList.length}}</div>
        </div>
        <div class="mr-5 mt-3 cursor-pointer" @click="toggleReadList">
            <span class="font-medium text-500">Read</span>
            <div class="text-700 mt-2">{{readList.length}}</div>
        </div>
        <div class="mr-5 mt-3 cursor-pointer" @click="toggleTopList">
            <span class="font-medium text-500">Top</span>
            <div class="text-700 mt-2">{{topList.length}}</div>
        </div>
    </div>

    <ProgressSpinner v-if="loading" />

    <div v-if="!loading">
        <h2 class="cursor-pointer" @click="toggleReadingNow">Reading now</h2>
        <div v-if="showReadingList" class="flex flex-column">
            <div v-for="book in readingList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
                <Book :book="book"/>
            </div>
        </div>
        <h2 class="cursor-pointer" @click="toggleWantToRead">Want to read</h2>
        <div v-if="showToReadList" class="flex flex-column">
            <div v-for="book in toReadList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
                <Book :book="book"/>
            </div>
        </div>

        <h2 class="cursor-pointer" @click="toggleReadList">Read</h2>
        <div v-if="showReadList" class="flex flex-column">
            <div v-for="book in readList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
                <Book :book="book"/>
            </div>
        </div>

        <h2 class="cursor-pointer" @click="toggleTopList">Top Rated</h2>
        <div v-if="showTopList" class="flex flex-column">
            <div v-for="book in topList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
                <Book :book="book"/>
            </div>
        </div>
    </div>
    
</template>

<script>

// import booklist from '../data/booklist.json';
import Book from './Book.vue';

export default {
    name: "TheBookList",
    components: {Book},
    data() {
        return {
            loading: true,
            booklist: [],
            readingList: [],
            readList: [],
            toReadList: [],
            topList: [],
            showReadingList: true,
            showReadList: false,
            showToReadList: false,
            showTopList: false
        }
    },
    mounted() {
        this.getBookList();
        // if (this.booklist) {
        //     this.booklist = this.sortListTitle(this.booklist)
        // }
        
    },
    methods: {
        sortListTitle: function(arr) {
            return arr.slice().sort(function(a,b) {
                return a.author_sort.localeCompare(b.author_sort) || a.title > b.title
            });
        },
        getBookList() {
            // fetch('http://localhost:8000/books')
            fetch('https://booklistapi-1-n5184613.deta.app/books')
            .then((response) => response.json())
            .then((data) => {
                this.booklist = this.sortListTitle(data._items);
                
                this.readList = this.booklist.filter((item) => {
                    return item.status == 'read'
                })
                
                this.readingList = this.booklist.filter((item) => {
                    return item.status == 'currently-reading'
                })
                
                this.toReadList = this.booklist.filter((item) => {
                    return item.status == 'to-read'
                })
                this.topList = this.booklist.filter((item) => {
                    return item.rating == 5
                })
                this.loading = false;
            })
        },
        toggleWantToRead() {
            if (this.showToReadList == false) {
                this.showToReadList = true;
                this.showReadingList = false;
                this.showReadList = false;
                this.showTopList = false;
            } else {
                this.showToReadList = false;
            }
        },
        toggleReadingNow() {
            if (this.showReadingList == false) {
                this.showReadingList = true;
                this.showToReadList = false;
                this.showReadList = false;
                this.showTopList = false;
            } else {
                this.showReadingList = false;
            }
        },
        toggleReadList() {
            if (this.showReadList == false) {
                this.showReadList = true;
                this.showReadingList = false;
                this.showToReadList = false;
                this.showTopList = false;
            } else {
                this.showReadList = false;
            }
        },
        toggleTopList() {
            if (this.showTopList == false) {
                this.showTopList = true;
                this.showReadList = false;
                this.showReadingList = false;
                this.showToReadList = false;
            } else {
                this.showTopList = false;
            }
        }
    }
    
}
</script>

<style scoped lang="scss">

.booklist {
    display: flex;
    flex-direction: column;

    .book {
        padding: 0;
        border: 1px solid black;
        border-radius: 2%;
        margin: 2rem;
        display: flex;
        flex-direction: row;
        max-height: 15rem;
        div img {
            border-radius: 2%;
            max-height: 15rem;
        }
    }
}

</style>