<template>
    <div class="row">
        <header class="col-12 text-center">
            <h1>{{ deptData.name }}</h1>
            <p>Consult with our experts</p>
        </header>
        <main class="col-12">
            <b-card-group columns>
                <b-card v-for="team in deptData.list" :header="team.name" border-variant="primary" header-bg-variant="primary" header-text-variant="white" align="center">
                    <p class="card-text">{{ team.phone }}</p>
                </b-card>
            </b-card-group>
        </main>
    </div>
</template>
<script>
    export default {
        props: {
            deptData: Object
        }
    }
</script>
<style scoped>
</style>

