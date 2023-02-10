<script setup>
import TheBookList from "../components/TheBookList.vue";
</script>

<template>
  <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div class="flex align-items-start flex-column md:flex-row">
            <img src="@/assets/logo.svg" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
            <div>
                <span class="text-900 font-medium text-3xl">Rosser's Reads</span>
                <p><a href="https://chrisrosser.net/posts/2022/11/06/reading-lists-arent-big-data/" target="_blank">Because reading lists aren't big data!</a></p>    
            </div>
        </div>
        
    </div>
    
</div>
  <main>
    <TheBookList />
  </main>
</template>
