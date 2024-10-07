<script setup>
//import ExampleCard from "../Components/ExampleCard.vue";
//import MaterialBadge from "../../../components/MaterialBadge.vue";

// 이미지 가져오기
import DoppBusiWeb from "@/assets/img/dopp-busi.png"; // 웹용 이미지
import DoppBusiMobile from "@/assets/img/dopp_busi_resize.png"; // 모바일용 이미지
</script>

<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row justify-content-center text-center my-sm-5">
        <div class="col-lg-6">
          <h1 class="text-dark mb-0">사업 분야</h1>
        </div>
        <p class="lead row justify-content-center">
          <picture>
            <!-- 모바일 해상도에서 사용할 이미지 -->
            <source media="(max-width: 768px)" srcset="~@/assets/img/dopp_busi_resize.png" type="image/png">
            <!-- 웹 해상도에서 사용할 이미지 -->
            <source media="(min-width: 769px)" srcset="~@/assets/img/dopp-busi.png" type="image/png">
            <!-- 기본 이미지 (브라우저가 <source>를 지원하지 않을 경우 사용) -->
            <img :src="DoppBusiWeb" alt="사업 분야 이미지" class="responsive-img" />
          </picture>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 기본 이미지 스타일 */
.responsive-img {
  max-width: 100%;
  height: auto;
  margin-top: 40px;
}
</style>
