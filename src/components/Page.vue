<template>
    <div class="row flex-column h-min-full">
        <div class="col-12">
            <slot name="nav"></slot>
        </div>
        <div class="col-12 bg-custom-secondary">
            <slot name="search"></slot>
        </div>
        <div class="col-12 d-flex flex-grow-1 animated fadeIn">
            <slot name="content"></slot>
        </div>
        <div class="col-12 bg-custom-secondary">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
    .h-min-full {
        min-height: 100vh;
    }
</style>

