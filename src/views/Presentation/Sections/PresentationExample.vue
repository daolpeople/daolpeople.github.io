<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// image
import DoppBusi from "@/assets/img/dopp-busi.png";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">

            <h1 class="text-dark mb-0">사업 분야</h1>
          </div>
          <p class="lead row justify-content-center">
            <img :src="`${DoppBusi}`"  alt=""/>
          </p>
      </div>
    </div>
  </section>
</template>

