<template>
    <section>
        <div class="container">
            <SectionHeader title="Books Title "
                text="this books page. To specify prop validations, you can provide an object with validation requirements to the defineProps() macro, instead of an array of strings. For example:" />
            <BooksList :books="paginatedBook" />
            <Pagination :currentPage="currentPage" :totalPages="totalPages" />
        </div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import BooksList from "@/components/BooksList.vue";
import books from '@/db.js';
import Pagination from "@/components/Pagination.vue";
export default {
    name: "BooksView",
    components: {
        SectionHeader,
        BooksList,
        Pagination,
    },
    data() {
        return {
            books: books,
            currentPage: 1,
            itemsPerPage: 4
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.books.length / this.books.itemsPerPage)
        },
        paginatedBook() {
            const startindex = (this.currentPage - 1) * this.itemsPerPage;
            const endindex = startindex + this.itemsPerPage;
            return this.books.slice(startindex, endindex);

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