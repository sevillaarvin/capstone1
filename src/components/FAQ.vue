<template>
    <div class="row">
        <header class="col-12 py-5">
        	<h1 class="text-center my-3">FAQs</h1>
        </header>
        <section class="col-12">
            <div role="tablist">
                <b-card no-body class="mb-1" v-for="qna in faqData.list">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn class="text-center" block href="#" v-b-toggle="qna.id" variant="secondary">{{ qna.question }}</b-btn>
                    </b-card-header>
                    <b-collapse :id="qna.id" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text text-custom-tertiary">
                                {{ qna.answer }}
                            </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        props: {
            faqData: Object
        }
    }
</script>
<style scoped>
</style>



