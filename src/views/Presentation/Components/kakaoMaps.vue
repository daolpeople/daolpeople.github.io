<script setup>
import { useKakao } from 'vue3-kakao-maps/@utils';
import { KakaoMap,KakaoMapMarker } from 'vue3-kakao-maps';

useKakao('cc7edbdcd48e53f4c893ae6431362a95');

const coordinate = {
  lat: 37.60439004898764,
  lng: 127.14087414702317
};

</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl height-600"
      :style="{
        backgroundImage:
          'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark height-600">
            <h3 class="text-white text-lg-center">경기도 구리시 건원대로 34번길 9, 6층 604호(인창동, 세신리빙프라자)</h3>
                  <div class="map-container">
            <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true"  width="100%">
              <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"
                              :infoWindow="{content: '　경기도 구리시 건원대로 34번길 9, 6층 604호(인창동, 세신리빙프라자)　'}">
              </KakaoMapMarker>
            </KakaoMap>
          </div>
      </span>

    </div>
  </div>
</template>

<style scoped>
.map-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .map-container {
    width: 95%; /* 작은 화면에서는 더 넓게 */
    padding: 10px;
  }
}
</style>