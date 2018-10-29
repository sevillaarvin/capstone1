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

        <div class="row flex-grow-1 bg-light" slot="content">
            <div class="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 p-3 rounded-top rounded-bottom align-self-center bg-white shadow">
                <header class="col-12">
                	<h1 class="text-center my-3">Register</h1>
                </header>
                <main class="col-12 ">
                    <b-form @submit="onSubmit">
                        <b-form-group id="nameInputGroup"
                            horizontal
                            label="Full Name:"
                            label-for="nameInput">
                            <b-form-input id="nameInput"
                                type="text"
                                v-model="form.fullName"
                                required
                                placeholder="Enter full name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="userInputGroup"
                            horizontal
                            label="Username:"
                            label-for="userInput">
                            <b-form-input id="userInput"
                                type="text"
                                v-model="form.user"
                                required
                                placeholder="Enter username">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="emailInputGroup"
                            horizontal
                            label="Email:"
                            label-for="emailInput">
                            <b-form-input id="emailInput"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="passInputGroup"
                            horizontal
                            label="Password:"
                            label-for="passInput">
                            <b-form-input id="passInput"
                                type="password"
                                v-model="form.pass"
                                required
                                placeholder="Enter password">
                            </b-form-input>
                        </b-form-group>
                        <hr>
                        <b-form-group>
                            <b-button type="submit" variant="primary" block>Sign Up</b-button>
                        </b-form-group>
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
    import { mapActions } from 'vuex'
    import Page from './Page.vue'

    export default {
        data() {
            return {
                form: {
                    /*
                    fullName: "",
                    */
                    user: "",
                    email: "",
                    pass: "",
                }
            }
        },
        props: {
            appData: Object
        },
        components: {
            appPage: Page
        },
        /*
        computed: {
            fullName: {
                get() {
                    return this.$store.getters.getFullName
                },
                set(name) {
                    this.$store.dispatch('setFullName', name)
                }
            }
        },
        */
        methods: {
            ...mapActions([
                'setFullName',
                'setUserName',
                'setPassword'
            ]),
            onSubmit(event) {
                event.preventDefault()
                this.setFullName(this.form.fullName)
                this.setUserName(this.form.user)
                this.setPassword(this.form.pass)
                this.$router.push({name: "Thanks"})
            }
        }
    }
</script>
<style>
</style>
