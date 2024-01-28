<template>
    <div class="text-center mb-1 mt-1">
        <h1 class="display-4 font-weight-bolder">{{ title }}</h1>
        <p class="lead">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: "SectionHeader",
    props:{
        title:String,
        text:String,
        required:true
    }
}
</script>

<style lang="scss" scoped></style>