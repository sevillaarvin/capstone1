<template>
    <div class="row flex-column h-min-full">
        <div class="col-12">
            <slot name="nav"></slot>
        </div>
        <div class="col-12">
            <slot name="search"></slot>
        </div>
        <!-- TODO: remove bg -->
        <div class="col-12 flex-grow-1 bg-light">
            <slot name="content"></slot>
        </div>
        <div class="col-12">
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

