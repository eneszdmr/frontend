<template>
    <div>
        <SectionHeader :title="sectionTitle" text="hello welcome to vue project"/>
    </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";

export default {
    name: "HomeView",

    components: { SectionHeader },
    data(){
        return{
            sectionTitle:"Wilkommen Home Page"
        }
    }
}
</script>

<style lang="sass" scoped>

</style>