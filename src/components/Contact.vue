<template>
    <div class="row flex-grow-1">
        <header class="col-12">
            <h1 class="text-center my-3">Contact Us</h1>
        </header>
        <form class="col-12 p-3 bg-light">
            <div class="form-group row" v-for="input in inputs">
                <label class="col-3 col-md-2" for="">{{ input.name }}</label>
                <input class="col-9 col-md 10 form-control" id="" :type="input.type" :placeholder="input.placeholder">
            </div>
            <div class="form-group row">
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
