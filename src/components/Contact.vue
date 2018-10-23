<template>
    <div class="flex-grow-1">
        <h1 class="text-center my-3">Contact Us</h1>
        <form class="">
            <!--
            <div class="form-group">
                <label class="col-3 col-md-2" for="">Name</label>
                <input class="col-9 col-md 10 form-control" id="" type="text" placeholder="John Doe">
            </div>
            <div class="form-group">
                <label class="col-3 col-md-2" for="">Email</label>
                <input class="col-9 col-md 10 form-control" id="" type="email" placeholder="john.doe@example.com">
            </div>
            <div class="form-group">
                <label class="col-3 col-md-2" for="">Phone</label>
                <input class="col-9 col-md 10 form-control" id="" type="text" placeholder="09123456789">
            </div>
            -->

            <div class="form-group" v-for="input in inputs">
                <label class="col-3 col-md-2" for="">{{ input.name }}</label>
                <input class="col-9 col-md 10 form-control" id="" :type="input.type" :placeholder="input.placeholder">
            </div>
            <div class="form-group">
                <label class="col-3 col-md-2" for="">Message</label>
                <textarea class="col-9 col-md 10 form-control" id="" rows="3" placeholder="Message"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
    export default {
        props: {
            appData: Object
        },
        data() {
            return {
                inputs: this.appData.contact
            }
        }
    }
</script>
<style>
</style>
