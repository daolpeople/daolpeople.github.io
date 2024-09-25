<template>
  <div class="p-3-container d-flex flex-column align-items-center">
    <div
      class="icon icon-shape text-center border-radius-xl"
      :class="`icon-${size} ${backgroundColor(variant, color)} shadow-${color}`"
    >
      <span class="icon-number">{{ iconNumber }}</span>
    </div>
    <div class="description mt-3">
      <p class="mb-0" v-html="content"></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "gradient",
  },
  color: {
    type: String,
    default: "success",
  },
  size: {
    type: String,
    default: "md",
  },
  icon: {
    type: [String, Object],
    required: true,
    component: String,
    color: String,
  },
  iconNumber :{
    type: [String, Number], // 아이콘 번호를 문자열 또는 숫자로 설정
    default: ""
  },
  content: {
    type: String,
    required: true,
  },
});

function backgroundColor(variant, color) {
  let colorValue;

  if (variant === "gradient") {
    colorValue = "bg-gradient-" + color;
  } else if (variant === "contained") {
    colorValue = "bg-" + color;
  }

  return colorValue;
}
</script>

<style scoped>
/* 전역 폰트 변수 설정 */
:root {
  --custom-font: 'Roboto', sans-serif; /* 원하는 폰트로 변경 */
}

.description {
  width: 100%;
  text-align: left; /* 가운데 정렬 */
}
.p-3-container{
  padding: 0px;
}

p {
  font-family: var(--custom-font); /* 폰트 패밀리 설정 */
  font-size: 1rem; /* 기본 폰트 크기 설정 */
  color: #7b809a;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem; /* 아이콘 크기 조정 */
  height: 3rem; /* 아이콘 높이 조정 */
  width: 7rem; /* 아이콘 너비 조정 */
  border: solid 2px white;
  position: relative;
}

.icon-number {
  font-size: 2rem; /* 아이콘 번호의 텍스트 크기 조정 */
  color: white; /* 아이콘 번호의 텍스트 색상 조정 */
}


/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .icon {
    font-size: 1.5rem; /* 작은 화면에서 아이콘 크기 조정 */
    height: 3rem; /* 아이콘 높이 조정 */
    width: 3rem; /* 아이콘 너비 조정 */
  }

  .icon-number {
    font-size: 0.75rem; /* 작은 화면에서 아이콘 번호의 텍스트 크기 조정 */
  }

  p {
    font-family: var(--custom-font); /* 작은 화면에서 폰트 패밀리 유지 */
    font-size: 1rem; /* 작은 화면에서 폰트 크기 조정 */

  }
}

@media (max-width: 480px) {
  .icon {
    font-size: 1.25rem; /* 더 작은 화면에서 아이콘 크기 조정 */
    height: 2.5rem; /* 아이콘 높이 조정 */
    width: 2.5rem; /* 아이콘 너비 조정 */
  }

  .icon-number {
    font-size: 0.625rem; /* 더 작은 화면에서 아이콘 번호의 텍스트 크기 조정 */
  }

  p {
    font-family: var(--custom-font); /* 더 작은 화면에서 폰트 패밀리 유지 */
    font-size: 0.875rem; /* 더 작은 화면에서 폰트 크기 조정 */
  }
}
</style>
