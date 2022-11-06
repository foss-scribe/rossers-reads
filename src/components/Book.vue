<template>
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
</template>

<script>
export default {
    name: "Book",
    props: ['book']

}
</script>