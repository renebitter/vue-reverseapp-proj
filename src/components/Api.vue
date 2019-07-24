<template>

    <div class="card-body">
        <h1 class="mb-3 text-left small">API Component {{ msg }}</h1>

        <div class="mb-3 text-left">
            <h2 class="mb-3 text-left small">API Info</h2>

            <section v-if="errored">
                <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
            </section>

            <section v-else>
                <div v-if="loading">Loading...</div>
                <!--<ul>-->
                    <div v-else v-for="(value, key) in info1">
                        <strong>
                            {{ key }}:
                        </strong>
                        <span class="small">
                            ${{ value | currencydecimal }}
                            <!--if > 4000 color red-->
                        </span>
                    </div>
                <!--</ul>-->

            </section>

            <!--<section v-else>-->
                <!--<div v-if="loading">Loading...</div>-->
                <!--<div v-else v-for="update in info" class="currency">-->
                    <!--{{ update.updated }}:-->
                    <!--<span class="lighten">-->
                    <!--<span v-html="update.updated"></span>{{ update.updatedISO }}-->
                  <!--</span>-->
                <!--</div>-->
            <!--</section>-->

            <!--<div>{{ info2.updated }}</div>-->
            <!--<div>{{ info2.updatedISO }}</div>-->
            <!--<div>{{ info2.updateduk }}</div>-->



        </div>
    </div>

</template>

<script>

    import axios from 'axios';
    // import api from '../js/api';

    export default {
        name: 'Api',
        props: {
            msg: String,
        },
        data() {
            return {
                info1: null,
                info2: null,
                loading: true,
                errored: false
            }
        },
        mounted () {
            axios
                // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                // .then(response => (this.info1 = response.data.bpi))
                // // .then(response => (this.info2 = response.data.time))
                // .catch(error => {
                //     console.log(error)
                //     this.errored = true
                // })
                // .finally(() => this.loading = false)

                // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                // .then(response => (this.info2 = response.data.time))
                // .catch(error => {
                //     // console.log(error)
                //     this.errored = true
                // })
                // .finally(() => this.loading = false)

                .get('https://api.coindesk.com/v1/bpi/historical/close.json')
                .then(response => (this.info1 = response.data.bpi))
                .catch(error => {
                    // console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)


        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },
    }

</script>

<style scoped>

</style>
