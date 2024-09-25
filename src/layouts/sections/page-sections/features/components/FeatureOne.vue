<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
</script>

<template>
  <section class="py-90">
    <div class="container d-flex flex-column align-items-center">
      <div class="d-flex flex-column w-100">

        <!-- 연혁 내용 -->
        <div class="full-width w-100">
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2023"
                  content="09 LF POS 시스템 개선<br />
                    <span class='indented'>08 한진 원클릭Pro 시스템 개발</span><br />
                    <span class='indented'>06 한진 체적관리/협력사관리 시스템 개선</span><br />
                    <span class='indented'>01 현대오토에버 유럽 Online Sales System 유지보수</span><br />
                    <span class='indented'>01 LX판토스 WM / TM 모바일 시스템 유지보수</span>"
                />
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2022"
                  content="04 CJ푸드빌 뚜레쥬르 브랜드APP 구축<br />
                    <span class='indented'>03 CJ대한통운 Next WMS모바일 구축</span></br />
                    <span class='indented'>02 삼성닷컴 쇼핑몰 유지보수</span></br />
                    <span class='indented'>02 현대오토에버 유럽 Online Sales System 구축</span></br />
                    <span class='indented'>02 현대오토에버 유럽 DIH / IDM 시스템 유지보수</span></br />
                    <span class='indented'>01 LX판토스 TMS 모바일 시스템 구축</span></br />"
                />
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2021"
                  content="12 LX판토스 글로벌 템플릿 시스템 구축<br />
                    <span class='indented'>12 빅솔론 WEBASP 시스템 구축</span></br />
                    <span class='indented'>11 한진 화주포탈 시스템 구축</span></br />
                    <span class='indented'>08 LG 물류공상평 물류/배송 모바일 시스템 구축</span></br />
                    <span class='indented'>08 한진 계약정산 시스템 구축</span></br />
                    <span class='indented'>06 IR큐더스 주주배당 시스템 구축</span></br />
                    <span class='indented'>05 HME IDM for CTB(통합계정관리 시스템 유지보수)</span></br />
                    <span class='indented'>05 GS리테일 MD 계약 및 자동정산 시스템 고도화</span></br />
                    <span class='indented'>04 HME Online Sales System Mockup</span></br />
                    <span class='indented'>04 ebay 옥션 주문번호 변경 개발</span></br />
                    <span class='indented'>03 GS리테일 유통기한 임박상품 판매시스템 개발</span></br />
                    <span class='indented'>01 홈플러스 Smart Delivery System App 유지보수</span></br />"
                />
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2020"
                  content="11 홈플러스 배송App 시스템 유지보수<br />
                    <span class='indented'>11 홈플러스 제휴사이트 시스템 유지보수</span></br />
                    <span class='indented'>05 홈플러스 네이버 장보기 연동 개발</span></br />
                    <span class='indented'>04 ㈜다올피플로 상호변경</span></br />
                    <span class='indented'>01 세스코 현장경영 관련 시스템 유지보수</span></br />"
                />
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2019"
                  content="10 쿠쿠전자 영업관리시스템 개발<br />
                    <span class='indented'>04 세스코 FS ACT 모바일 앱 시스템 개발</span></br />
                    <span class='indented'>01 세스코 현장경영 관련 시스템 유지보수</span></br />"
                />
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="about-us-option-container">
                <AboutUsOption
                  iconNumber="2018"
                  content="12 홈플러스 EOS 대상 시스템 업그레이드<br />
                    <span class='indented'>10 한국후지쯔 BGF채권관리 BPM 추가 개발</span></br />
                    <span class='indented'>08 동진산업 Groupware Solutions 유지보수</span></br />
                    <span class='indented'>05 SPC HappyTaster Sensory DB 구축</span></br />
                    <span class='indented'>03 SPC B2B 배송시스템 유지보수</span></br />
                    <span class='indented'>03 SPC 맥분DB분석 시스템 유지보수</span></br />
                    <span class='indented'>03 SPC 점포이력관리 시스템 유지보수</span></br />
                    <span class='indented'>03 ㈜엘앤이케이솔루션 법인 설립</span></br />"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="history w-100 mb-4">
          <div class="row">
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/hanjin.png" alt="Hajin" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/LXLogo.png" alt="LX" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/homeplus.jpg" alt="Homeplus" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/GS.jpg" alt="GS" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/cjFoodVill.jpg" alt="CJ Foodvill" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/autoEver.png" alt="AutoEver" />
              </div>
            </div>
            <div class="col-4 col-sm-3 col-md-2 mb-3">
              <div class="image-container">
                <img src="@/assets/img/logos/company-logos/cesco.jpg" alt="Cesco" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* 기본 이미지 컨테이너 높이 */
  padding: 10px; /* 이미지 주변 여백 추가 */
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 이미지 비율 유지하며 컨테이너에 맞춤 */
}

.about-us-option-container {
  border-top: 1px solid black;
  color: black;
  padding: 10px;
}

.indented {
  display: block;
  margin-left: 50px;
}


@media (max-width: 768px) {
  .history {
    margin-top: 20px;

  }

  .image-container {
    height: 80px;
  }

  .about-us-option-container {
    margin-bottom: 20px;
  }

  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
