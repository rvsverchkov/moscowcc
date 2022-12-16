<template>
  <div class="proposal-tab">
    <div class="container">
      <div class="proposal-tab__title">{{titleSlide}}</div>
      <div class="proposal-tab__subtitle">
        {{slider?.mainTitle}}
      </div>
    </div>
    <div class="proposal-tab-content">
      <div
        :style="{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.8) 23% ,transparent 74%) , url(' +
            slider?.img +
            ') no-repeat',
          backgroundSize: 'cover',
        }"
        class="proposal-tab-content__img"
      ></div>
      <div class="proposal-tab-content__slider">
        <swiper
          :breakpoints="swiperOption.breakpoints"
          :modules="modules"
          :spaceBetween="24"
          @swiper="initSwiper"
          @slideChange="onSlideChange"
          class="proposal-tab__slider"
        >
          <swiper-slide v-for="(slide, index) in slider?.slide" :key="index">
            <img :src="slide?.img" alt="" />
            <div class="proposal-tab__slider-title">{{ slide.title }}</div>
            <div class="proposal-tab__slider-subtitle">
              {{ slide.subtitle }}
            </div>
            <a href="#" class="proposal-tab__slider-link">Подробнее →</a>
          </swiper-slide>
        </swiper>
        <div class="proposal-tab-content__slider-navigate">
          <div class="swiper-button-prev" @click="changePrev(true)"></div>
          <div class="proposal-tab-content__slider-title">
            {{ title }}
          </div>
          <div class="swiper-button-next" @click="changeNext(true)"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slider: Object,
    titleSlide:String,
    
  },
  setup(props) {
    const title = ref();
    const isSwiper = ref();
    const initSwiper = (item) => {
      isSwiper.value = item;
    };
    const changeNext = (item) => {
      const button = document.querySelector(
        ".proposal-tab-content__slider .swiper-button-next"
      );

      if (item) {
        isSwiper.value.slideNext();
      }
      if (isSwiper.value.activeIndex > 0) {
        const prev = document.querySelector(
          ".proposal-tab-content__slider .swiper-button-prev"
        );
        prev.classList.remove("swiper-button-disabled");
      }
      if (isSwiper.value.activeIndex + 1 == isSwiper.value.slides.length) {
        button.classList.add("swiper-button-disabled");
      } else {
        button.classList.remove("swiper-button-disabled");
      }
      findData(isSwiper.value.activeIndex);
    };
    const changePrev = (item) => {
      const button = document.querySelector(
        ".proposal-tab-content__slider .swiper-button-prev"
      );

      if (item) {
        isSwiper.value.slidePrev();
      }
      if (isSwiper.value.activeIndex + 1 != isSwiper.value.slides.length) {
        const next = document.querySelector(
          ".proposal-tab-content__slider .swiper-button-next"
        );
        next.classList.remove("swiper-button-disabled");
      }
      if (isSwiper.value.activeIndex == 0) {
        button.classList.add("swiper-button-disabled");
      } else {
        button.classList.remove("swiper-button-disabled");
      }
      findData(isSwiper.value.activeIndex);
    };
    const swiperOption = {
      breakpoints: {
        360: {
          slidesPerView: "auto",
          centeredSlides: true,
        },
        993: {
          slidesPerView: "auto",
          centeredSlides: true,
        },
      },
    };
    const onSlideChange = (item) => {
      const index = item.activeIndex;
      const button1 = document.querySelector(
        ".proposal-tab-content__slider .swiper-button-next"
      );
      const button2 = document.querySelector(
        ".proposal-tab-content__slider .swiper-button-prev"
      );
      if (index == 0) {
        button2.classList.add("swiper-button-disabled");
        button1.classList.remove("swiper-button-disabled");
      } else if (index + 1 == isSwiper.value.slides.length) {
        button2.classList.remove("swiper-button-disabled");
        button1.classList.add("swiper-button-disabled");
      } else {
        button2.classList.remove("swiper-button-disabled");
        button1.classList.remove("swiper-button-disabled");
      }
      findData(index);
    };
    const findData = (index) => {
      title.value = props?.slider?.slide[index].title;
    };
    onMounted(() => {
      changePrev();
    });
    watch(() => {
      if (props?.slider?.slide) {
        findData(0);
      }
    });
    return {
      swiperOption,
      initSwiper,
      isSwiper,
      changeNext,
      changePrev,
      title,
      findData,
      onSlideChange,
    };
  },
};
import "./proposal-tab.scss";
</script>