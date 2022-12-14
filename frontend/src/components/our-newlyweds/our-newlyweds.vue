<template>
  <div class="newlyweds">
    <div class="container">
      <div class="mini-title">наши молодожены</div>
      <div class="big-title">Мечтаете <br />о красивой свадьбе?</div>
      <swiper
        :pagination="{
          type: 'fraction',
        }"
        :breakpoints="swiperOption.breakpoints"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.img" alt="" class="newlyweds-slider__img" />
          <div class="newlyweds-slider__title">{{ slide.title }}</div>
          <div class="newlyweds-slider__place">{{ slide.place }}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperOption = {
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        993: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    };
    const slides = ref([
      {
        img: require("../../assets/image/slide1.png"),
        title: "Александра и Дмитрий",
        place: "Forest Country Hall",
      },
      {
        img: require("../../assets/image/slide2.png"),
        title: "Анастасия и Святослав",
        place: "Выездная регистрация",
      },
      {
        img: require("../../assets/image/slide1.png"),
        title: "Александра и Дмитрий",
        place: "Forest Country Hall",
      },
      {
        img: require("../../assets/image/slide2.png"),
        title: "Анастасия и Святослав",
        place: "Выездная регистрация",
      },
    ]);
    return {
      modules: [Pagination, Navigation],
      slides,
      swiperOption,
    };
  },
};
import "./our-newlyweds.scss";
</script>