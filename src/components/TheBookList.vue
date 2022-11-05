<template>
    <h2 class="pt-5">Stats</h2>
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
    </div>

    <h2 class="cursor-pointer" @click="toggleReadingNow">Reading now</h2>
    <div v-if="showReadingList" class="flex flex-column">
        <div v-for="book in readingList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
            <img v-if="book.cover" :src="book.cover" :alt="book.title" class="border-round-left" style="max-height: 300px;">
            <div class="p-4">
                <div class="font-bold text-2xl text-900 line-height-3 ">{{book.title}}</div>
                <em><span v-if="book.series">{{book.series}}</span><span v-if="book.series_no" > book {{book.series_no}}</span></em>
                <div class="font-medium text-sm block mt-1 mb-3">By {{book.author}} 
                    
                </div>
                <div class="line-height-3 text-700 text-sm mb-3">{{book.description}}</div>
                <div class="flex flex-column">
                    <div class="flex-none">Reading on {{book.medium}}</div>
                    <div class="flex-grow-1 flex align-items-center">
                        <a v-if="book.amazon" :href="book.amazon"><i  class="pi pi-amazon"></i></a>
                    </div>
                </div>
                <div class="mt-1">
                    <span v-if="book.pages">{{book.pages}} pages </span>
                    <span v-if="book.genre">| {{book.genre}}</span>
                </div>
                
            </div>
        </div>
    </div>

    <h2 class="cursor-pointer" @click="toggleWantToRead">Want to read</h2>
    <div v-if="showToReadList" class="flex flex-column">
        <div v-for="book in toReadList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
            <img v-if="book.cover" :src="book.cover" :alt="book.title" class="border-round-left" style="max-height: 234px;">
            <div class="p-4">
                <div class="font-bold text-900 mb-3 line-height-3 ">{{book.title}}</div>
                <div class="font-medium text-sm block">{{book.author}}</div>
                <div class="line-height-3 text-700 text-sm mb-3">{{book.description}}</div>
                <div class="flex align-items-center"></div>
            </div>
        </div>
    </div>

    <h2 class="cursor-pointer" @click="toggleReadList">Read</h2>
    <div v-if="showReadList" class="flex flex-column">
        <div v-for="book in readList" class="flex shadow-2 surface-card border-round mr-0 xl:mr-4 mb-6 flex-row">
            <img v-if="book.cover" :src="book.cover" :alt="book.title" class="border-round-left" style="max-height: 234px;">
            <div class="p-4">
                <div class="font-bold text-900 mb-3 line-height-3 ">{{book.title}}</div>
                <div class="font-medium text-sm block">{{book.author}}</div>
                <div class="line-height-3 text-700 text-sm mb-3">{{book.description}}</div>
                <div class="flex align-items-center"></div>
            </div>
        </div>
    </div>

</template>

<script>

import booklist from '../data/booklist.json';

export default {
    name: "TheBookList",
    data() {
        return {
            booklist,
            readingList: [],
            readList: [],
            toReadList: [],
            showReadingList: true,
            showReadList: false,
            showToReadList: false
        }
    },
    mounted() {
        if (this.booklist) {
            this.booklist = this.sortListTitle(this.booklist)
            this.readList = this.booklist.filter((item) => {
                return item.status == 'read'
            })
            this.readingList = this.booklist.filter((item) => {
                return item.status == 'currently-reading'
            })
            this.toReadList = this.booklist.filter((item) => {
                return item.status == 'to-read'
            })
        }
        
    },
    methods: {
        sortListTitle: function(arr) {
            return arr.slice().sort(function(a,b) {
                return a.author_sort.localeCompare(b.author_sort) || a.title > b.title
            });
        },
        toggleWantToRead() {
            if (this.showToReadList == false) {
                this.showToReadList = true;
                this.showReadingList = false;
                this.showReadList = false;
            } else {
                this.showToReadList = false;
            }
        },
        toggleReadingNow() {
            if (this.showReadingList == false) {
                this.showReadingList = true;
                this.showToReadList = false;
                this.showReadList = false;
            } else {
                this.showReadingList = false;
            }
        },
        toggleReadList() {
            if (this.showReadList == false) {
                this.showReadList = true;
                this.showReadingList = false;
                this.showToReadList = false;
            } else {
                this.showReadList = false;
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

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