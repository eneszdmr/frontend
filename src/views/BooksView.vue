<template>
    <section>
        <div class="container">
            <SectionHeader title="Books Title "
                text="this books page. To specify prop validations, you can provide an object with validation requirements to the defineProps() macro, instead of an array of strings. For example:" />
         <BooksList :books="books"/>
      
        </div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import BooksList from "@/components/BooksList.vue";
import books from '@/db.js';
export default {
    name: "BooksView",
    components: {
        SectionHeader,
        BooksList
    },
    data(){
        return{
            books:books
        }
    }
}
</script>

<style scoped>
.auth-box {
    margin-top: -30px;
    font-size: 18px;
}
</style>