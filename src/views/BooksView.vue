<template>
    <section>
        <div class="container">
            <SectionHeader title="Books Title "
                text="this books page. To specify prop validations, you can provide an object with validation requirements to the defineProps() macro, instead of an array of strings. For example:" />
        </div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";

export default {
    name: "BooksView",
    components: {
        SectionHeader
    }
}
</script>

<style lang="sass" scoped>

</style>