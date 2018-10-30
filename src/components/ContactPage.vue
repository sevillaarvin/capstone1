<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row" slot="search">
            <div class="col-12">
                <slot name="search"></slot>
            </div>
        </div>

        <div class="row" slot="content">
            <header class="col-12 pt-5">
            	<h1 class="text-center my-3 text-custom-primary">Get In Touch</h1>
            </header>
            <main class="col-12 pb-3 text-center">
                <p class="p-0 m-0 font-italic">{{ appData.contact.description }}</p>
                <small><strong>{{ appData.contact.attribution }}</strong></small>
            </main>

            <nav class="col-12 col-md-6 offset-md-3 py-3">
                <b-nav tabs justified>
                    <b-nav-item :active="dept === currentDepartment" v-for="dept in appData.contact.nav" @click="changeDepartment(dept)">{{ dept }}</b-nav-item>
                </b-nav>
            </nav>
            
            <section class="col-12 col-md-8 offset-md-2 py-3">
                <app-department :deptData="currentDeptData"></app-department>
            </section>

            <section class="col-12 py-3 text-center bg-custom-primary text-light">
                <header class="py-3">
                    <h2 class="my-3">Main Phone Numbers</h2>
                </header>
                <section> 
                    <p>Phone1: {{ appData.contact.details.phone1 }}</p>
                    <p>Phone2: {{ appData.contact.details.phone2 }}</p>
                    <p>Phone3: {{ appData.contact.details.phone3 }}</p>
                </section>
            </section>

            <section class="col-12 py-3">
                <header class="py-3">
                    <h2 class="text-center my-3 text-custom-primary">Company Address</h2>
                </header>
                <div class="row">
                    <div class="col-12 col-md-4 offset-md-2 text-center text-md-left">
                        <h3 class="text-custom-primary"><strong>{{ appData.contact.details.name }}</strong></h3>
                        <p>{{ appData.contact.details.address }}</p>
                        <p>{{ appData.contact.details.email }}</p>
                    </div>
                    <div class="col-12 col-md-5 embed-responsive embed-responsive-4by3">
                        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4101322936885!2d121.04148385087574!3d14.632645089731954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7afe6a39331%3A0xd367e6dc5e274032!2sCaswynn+Building%2C+134+Timog+Ave%2C+Diliman%2C+Quezon+City%2C+Metro+Manila%2C+Philippines!5e0!3m2!1sen!2sin!4v1540603840894" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

        </div>

        <div class="row" slot="footer">
            <div class="col-12">
                <slot name="footer"></slot>
            </div>
        </div>
    </app-page>
</template>
<script>
    import Page from './Page.vue'
    import ContactDepartment from './ContactDepartment.vue'

    export default {
        data() {
            return {
                selectedComponent: "app-sales",
                currentDepartment: "Sales",
                currentDeptData: this.appData.contact.sales
            }
        },
        props: {
            appData: Object
        },
        methods: {
            changeDepartment(dept) {
                switch (dept) {
                    case "Sales":
                        this.selectedComponent = "app-sales"
                        this.currentDepartment = "Sales"
                        this.currentDeptData = this.appData.contact.sales
                    break
                    case "Technical Support":
                        this.selectedComponent = "app-tech-support"
                        this.currentDepartment = "Technical Support"
                        this.currentDeptData = this.appData.contact.technical
                    break
                    case "Account Management":
                        this.selectedComponent = "app-acct-mgmt"
                        this.currentDepartment = "Account Management"
                        this.currentDeptData = this.appData.contact.account
                    break
                }
            }
        },
        components: {
            appPage: Page,
            appDepartment: ContactDepartment,
        }
    }
</script>
<style>
</style>
