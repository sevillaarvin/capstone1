<template>
    <div class="row">
        <form class="col-12 col-md-6 p-3 p-lg-5">
            <div class="form-group row" v-for="input in contactData.inputs">
                <label class="col-3 col-lg-2" for="">{{ input.name }}</label>
                <input class="col-9 col-lg-10 form-control" id="" :type="input.type" :placeholder="input.placeholder">
            </div>
            <div class="form-group row">
                <label class="col-3 col-lg-2" for="">Message</label>
                <textarea class="col-9 col-lg-10 form-control" id="" rows="3" placeholder="Message"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Send</button>
        </form>
        <aside class="col-12 col-md-6 p-3 p-lg-5">
            <div class="p-1 text-center text-md-left">
                <p><strong>{{ contactData.details.name }}</strong></p>
                <p>{{ contactData.details.email }}</p>
                <p>{{ contactData.details.phone1 }}</p>
                <p>{{ contactData.details.phone2 }}</p>
                <p>{{ contactData.details.phone3 }}</p>
                <p>{{ contactData.details.address }}</p>
            </div>
        </aside>
    </div>
</template>
<script>
    export default {
        props: {
            contactData: Object
        },
    }
</script>
<style>
</style>
