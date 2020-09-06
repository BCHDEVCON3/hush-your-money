<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Shuffler</h2>
        </div>

        <hr class="my-1" />

        <div class="row">
            <div class="col-4 text-right">
                Deposit:
            </div>
            <div class="col-8">
                {{displayAddress('deposit')}}
            </div>
        </div>

        <div class="row">
            <div class="col-4 text-right">
                Change:
            </div>
            <div class="col-8">
                {{displayAddress('change')}}
            </div>
        </div>

        <div class="row">
            <div class="col-4 text-right">
                Privacy:
            </div>
            <div class="col-8">
                {{displayAddress('nito')}}
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col">
                <p>
                    Ex eram instituendarum, se quorum cupidatat. De ullamco est probant, e an
                    tractavissent. An eram nulla amet mandaremus si quamquam esse legam incurreret
                    aliqua te te fugiat se veniam, ab e amet tempor nisi. An occaecat
                    familiaritatem, eu quo duis eram enim.Commodo praesentibus de senserit in
                    doctrina ex summis eu aute vidisse admodum, possumus id probant in id sunt
                    multos irure mandaremus quo de aute appellat expetendis ut sunt officia quo sint
                    quorum, veniam exquisitaque ullamco minim senserit.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            address: null,
        }
    },
    computed: {
        ...mapGetters([
            'getAddress',
            'getMasterSeed',
        ]),

    },
    methods: {
        ...mapActions([
            'toast',
        ]),

        displayAddress(_account) {
            if (this.getAddress(_account)) {
                /* Retrieve address. */
                const address = this.getAddress(_account)

                return address.slice(12, 20) + ' ... ' + address.slice(-8)
                // return address.slice(12)
            } else {
                return null
            }
        },

    },
    created: async function () {
        //
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
