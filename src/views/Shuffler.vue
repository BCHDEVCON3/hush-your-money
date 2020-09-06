<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Shuffler</h2>
        </div>

        <hr class="my-1" />

        <div class="row">
            <div class="col">
                <pre v-html="output" />
            </div>
        </div>

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
            output: null,
        }
    },
    computed: {
        ...mapGetters([
            'getAddress',
        ]),

    },
    methods: {
        ...mapActions([
            'toast',
        ]),

    },
    created: async function () {
        /* Request address. */
        this.address = await this.getAddress
            .catch(err => {
                console.error('ADDRESS ERROR:', err)
                this.output = JSON.stringify(err, null, 2)
            })

        console.log('ADDRESS', this.address)

        if (this.address) {
            this.output = this.address
        }
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
