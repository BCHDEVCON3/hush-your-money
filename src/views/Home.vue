<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Hush Your Money</h2>
        </div>

        <hr class="my-1" />

        <div class="row">
            <div class="col-5 text-right">
                Badger:
            </div>
            <div class="col-7">
                {{status.badger}}
            </div>
        </div>
        <div class="row">
            <div class="col-5 text-right">
                Android:
            </div>
            <div class="col-7">
                {{status.android}}
            </div>
        </div>
        <div class="row">
            <div class="col-5 text-right">
                iOS:
            </div>
            <div class="col-7">
                {{status.ios}}
            </div>
        </div>

        <div class="row">
            <div class="col">
                <p>
                    Fabulas quae commodo deserunt, sunt iudicem do incididunt. Probant ex eiusmod ne
                    eiusmod imitarentur ex admodum quo laboris labore fabulas voluptate id duis
                    incurreret non eram quorum hic possumus fugiat nostrud ab ita dolore doctrina
                    praetermissum hic cernantur nisi irure appellat velit, id laborum qui ingeniis.
                </p>
            </div>

            <div class="col">
                <p>
                    Incididunt ubi aute senserit et do cernantur ea occaecat, tamen cohaerescant
                    incurreret labore vidisse, summis ab deserunt an velit o incididunt sunt multos
                    ut cillum id ab fore duis anim voluptate ut tamen iudicem a aliquip, iis
                    proident consectetur. Est dolore possumus. Do admodum distinguantur, cernantur
                    se deserunt.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
/* Import modules. */
import bchLink from 'bitcoincom-link'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            output: null,
            status: null,
        }
    },
    created: function () {

        /* Request provider statuses. */
        this.status = bchLink.getWalletProviderStatus()
        console.log('Provider statuses:', this.status)

        this.output = JSON.stringify(this.status, null, 2)
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
