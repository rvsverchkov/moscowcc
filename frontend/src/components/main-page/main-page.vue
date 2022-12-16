<template>
        <MainBanner/>
        <OurNewlyweds/>
        <Proposal/>
        <Services/>
        <calcPrice/>
        <mainStatist/>
</template>


<script>
 import MainBanner from '../main-banner/main-banner.vue'
 import OurNewlyweds from '../our-newlyweds/our-newlyweds.vue'
 import Proposal from '../proposal/proposal.vue'
 import Services from '../additional-services/additional-services.vue'
 import calcPrice from '../calc-price/calc-price.vue'
 import mainStatist from  '../main-statist/main-statist.vue'

export default {
      components: {
     MainBanner,
     OurNewlyweds,
     Proposal,
     Services,
     calcPrice,
     mainStatist
  }
}
</script>