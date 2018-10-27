<template>
    <div class="row">
        <!-- TODO: fix classes -->
        <div class="col-12 contact h-custom-quarter bg-danger">
        </div>
        <!-- TODO: fix classes -->
        <div class="col-12 contact h-custom-quarter bg-info">
        </div>
        <div class="col-12">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    .h-custom-quarter {
        min-height: 25vh;
    }
</style>

