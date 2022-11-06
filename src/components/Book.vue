<template>
    <img v-if="book.cover" :src="book.cover" :alt="book.title" class="border-round-left" style="max-height: 300px;">
    <div class="p-3 flex-column justify-content-between flex">
        <div>
            <div class="font-bold text-2xl text-900 line-height-3 ">{{book.title}}</div>
            <em><span v-if="book.series">{{book.series}}</span><span v-if="book.series_no" > #{{book.series_no}}</span></em>
            <div class="font-medium text-sm block mt-1">By {{book.author}}</div>
            <span v-if="book.pages">{{book.pages}} pages </span>
            <span v-if="book.genre">| {{book.genre}}</span>
        </div>
        
        <div class="line-height-3 text-700 text-sm mb-3">{{book.description}}</div>

        <div v-if="book.medium" class="">
            <span v-if="book.status == 'currently-reading'">Reading</span>
            <span v-else-if="book.status == 'read'">Read</span>
            <span v-else>To read</span>
            on {{book.medium}}
        </div>
        
        <div class="">
            
        </div>
        <div class="inline-flex align-items-center">
                <a class="mr-3" v-if="book.amazon" :href="book.amazon">
                    <i  class="pi pi-amazon"></i>
                </a>
                <a class="mr-3" v-if="book.apple" :href="book.apple">
                    <i class="pi pi-apple"></i>
                </a>
                <a class="mr-3" v-if="book.kobo" :href="book.kobo">Kobo</a>
                
         </div>
    </div>
</template>

<script>
export default {
    name: "Book",
    props: ['book']

}
</script>

<style scoped>

a:link, a:visited {
    color: black
}
</style>