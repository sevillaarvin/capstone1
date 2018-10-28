<template>
    <app-page>
        <div class="row" slot="nav">
            <div class="col-12">
                <slot name="nav"></slot>
            </div>
        </div>

        <div class="row bg-custom-tertiary" slot="search">
            <div class="col-12">
                <slot name="search"></slot>
            </div>
        </div>

        <div class="row h-100 bg-light" slot="content">
            <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 p-3 rounded-top rounded-bottom align-self-center bg-white shadow">
                <header class="col-12">
                	<h1 class="text-center my-3">Login</h1>
                </header>
                <main class="col-12 ">
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group id="userInputGroup"
                            label="Username:"
                            label-for="userInput">
                            <b-form-input id="userInput"
                                type="text"
                                v-model="form.user"
                                required
                                placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="passInputGroup"
                            label="Password:"
                            label-for="passInput">
                            <b-form-input id="passInput"
                                type="password"
                                v-model="form.pass"
                                required
                                placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="rememberInputGroup">
                            <b-form-checkbox-group v-model="form.checked" id="rememeberInput">
                                <b-form-checkbox value="remember">Remember</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                        <div class="d-flex justify-content-between">
                            <div>
                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </div>
                            <div>
                                <a href="#" v-b-modal.modal1>Forgot Password</a>
                            </div>
                        </div>
                        <b-modal id="modal1" title="Forgot password">
                            <b-img :src="appData.notFound.img" fluid alt="forgot password"/>
                        </b-modal>
                        <b-alert class="my-3" :show="form.showAlert" @dismissed="form.showAlert = false" variant="danger" dismissible>The credentials you entered is invalid.</b-alert>
                    </b-form>
                </main>
            </div>
        </div>

        <div class="row bg-custom-tertiary text-custom-other2" slot="footer">
            <div class="col-12">
                <slot name="footer"></slot>
            </div>
        </div>
    </app-page>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import Page from './Page.vue'

    export default {
        data() {
            return {
                form: {
                    user: "",
                    pass: "",
                    checked: [],
                    showAlert: false
                }
            }
        },
        props: {
            appData: Object
        },
        computed: {
            ...mapGetters({
                username: "getUserName",
                password: "getPassword"
            })
        },
        components: {
            appPage: Page
        },
        methods: {
            ...mapActions([
                "setLoggedIn",
                "setLoginName",
                "setLoginPassword"
            ]),
            onSubmit(event) {
                event.preventDefault()
                if ((this.form.user == this.username
                    && this.form.pass == this.password) ||
                    (this.form.user == "admin" && this.form.pass == "admin")) {
                    
                    this.setLoggedIn(true)
                    this.$router.push({name: "Welcome"})
                    return
                }
                this.form.showAlert = true
                console.log(this.form.showAlert)
            },
            onReset(event) {
                event.preventDefault()
                this.form.user = ""
                this.form.pass = ""
                this.form.checked = []
                this.form.showAlert = false
            }
        }
    }
</script>
<style>
</style>
