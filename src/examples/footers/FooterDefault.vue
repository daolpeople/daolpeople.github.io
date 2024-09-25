<script setup>
import daolLogo from "@/assets/img/daol_log.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "DAOL-People ",
      logo: daolLogo,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      // {
      //   icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
      //   link: "https://www.facebook.com/CreativeTim/"
      // },
      // {
      //   icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
      //   link: "https://twitter.com/creativetim"
      // },
      // {
      //   icon: '<i class="fab fa-dribbble text-lg opacity-8"></i>',
      //   link: "https://dribbble.com/creativetim"
      // },
      // {
      //   icon: '<i class="fab fa-github text-lg opacity-8"></i>',
      //   link: "https://github.com/creativetimofficial"
      // },
      // {
      //   icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
      //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
      // }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "(주)다올피플",
        items: [
          { name: "대표번호 : 0507-1410-7901", href: "https://iradesign.io/" },
          {
            name: "E-MAIL : dopp@dopp.co.kr",
            href: "https://www.creative-tim.com/affiliates/new"
          },
          {
            name: "경기도 구리시 건원대로 34번길 9, 6층 604호(인창동, 세신리빙프라자)",
            href: "https://www.creative-tim.com/bits"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <div>
            <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-sm-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item nav-link" v-for="item of items" :key="item.name">
                {{ item.name }}
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              DAOL-People Co., Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
