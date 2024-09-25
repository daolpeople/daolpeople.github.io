<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

// images
import DaolLogo from "@/assets/img/daol_log.png";


</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4"
        >
          <RotatingCard>
            <RotatingCardFront :style="`background-image: url(${DaolLogo})`"
              icon="touch_app"
              title="About"
              description="웹&모바일 시스템 구축 및 유지보수까지 완벽한 전문 기업"
             image=""/>

            <RotatingCardBack
                :style="`background-image: url(${DaolLogo})`"
                icon="touch_app"
              title="About"
              description="㈜다올피플만의 “특별한 차이” 를 통해 고객에게 “가치 있는 경험” 을 제공합니다.
e-Business의 모든 서비스를 제공할 수 있는 Total Service Provider 입니다."
             image=""/>
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="고객감동을 실현하는 기업"
              description="기술적 공헌을 통해 고객에게 경쟁력을 제고하고 발전할 수 있도록 최선을 다하여 고갬나족과 신뢰를 이끌어 냅니다."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="사회적 책임을 다하는 기업"
              description="사회적 기업으로서 창출된 이익을 사회에 환원하며, 따뜻하고 풍요로운 사회를 만들어가는데 기여합니다."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="일하는 보람이 있는 기업"
              description="평가와 보상이 공정한 기업문화를 바탕으로 기술과 열정을 쏟아 부을 수 있는 일터이자, 행복하고 즐겁게 일할 수 있는 놀이 공간입니다."
            />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
