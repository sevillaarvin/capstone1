<template>
    <div class="row px-5">
        <div class="col-12 col-md my-3 mx-md-3 text-center" v-for="person in aboutData.team">
            <div class="card border-top-0 border-left-0 border-right-0 border-bottom bg-transparent">
            
                <div class="p-3 primary d-flex justify-content-center">
                    <img class="square-custom img-fluid img-thumbnail rounded-circle d-block" :style="{backgroundImage: 'url(' + person.img + ')', backgroundSize: 'cover', backgroundPosition: 'center'}">
                </div>

                <div class="card-body">
                    <h1 class="card-title">{{ person.name }}</h1>
                    <p class="card-text">{{ person.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            aboutData: Object
        }
    }
</script>
<style scoped>
    .square-custom {
        min-width: 150px;
        min-height: 150px;
    }    
</style>
