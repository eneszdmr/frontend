<template>
    <div class="row">
        
        <div class="col-sm-6 col-md4 col-xl-3 mb-4" v-for="book in books" :key="book.id">
            <BookItem :book="book"/>

        </div>
    </div>
</template>

<script>
import BookItem from '@/components/BookItem.vue'
export default {
    name: "BooksList",
    components: {
        BookItem
    },
    props: {
        books: {
            type: Array,
            default: () => (["empty"])
        }
    }
}
</script>

<style lang="scss" scoped></style>