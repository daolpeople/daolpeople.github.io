<script setup>
defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12 mx-auto text-center">
        <div class="full-width align-self-center custom-margin">
          <h1>{{ title }}</h1>
        </div>
        <slot />
      </div>
    </div>
  </div>
  <CenteredFooter />
</template>

<style scoped>
/* 기본 컨테이너 스타일 (PC) */
.container {
  width: 100%; /* 기본 너비 설정 */
  max-width: 1140px; /* Bootstrap의 기본 최대 너비 */
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto; /* 중앙 정렬 유지 */
}

/* 모바일 화면에서 반응형 너비 조정 */
@media (max-width: 768px) {
  .container {
    padding-left: 10px; /* 모바일 화면에서 padding 조정 */
    padding-right: 10px; /* 모바일 화면에서 padding 조정 */
  }
}

@media (max-width: 480px) {
  .container {
    padding-left: 5px; /* 더 작은 화면에서 padding 조정 */
    padding-right: 5px; /* 더 작은 화면에서 padding 조정 */
  }
}

.custom-margin {
  margin-bottom: 30px;
}


</style>
