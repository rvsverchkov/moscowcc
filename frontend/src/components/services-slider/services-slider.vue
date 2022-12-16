<template>
  <div class="services-slider">
    <div class="mini-title">спецпредложения для молодоженов</div>
    <swiper
          :breakpoints="swiperOption.breakpoints"
          :modules="modules"
          :pagination="{
          type: 'fraction',
        }"
         :navigation="true"
          class="services-slider__block"
      
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="services-slider__block_pad">
            <div class="services-slider__title">{{ slide.title }}</div>
            
            <template v-for="(text,inx) in slide.text" :key="inx">
            <div class="services-slider__text">{{text[0] }}</div>
            <template v-if="text[1]">
                <div class="services-slider__desc">{{text[1] }}</div>
            </template>
        </template>
    </div>
          </swiper-slide>
        </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import "swiper/css/navigation";
export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    const swiperOption = {
      breakpoints: {
        360: {
          slidesPerView: 'auto',
          spaceBetween: 21,
        },
        993: {
          slidesPerView: 'auto',
          spaceBetween: 21,
        },
      },
    };
    const slides = ref([
        {
            title:'ПИТАНИЕ В ПОДАРОК',
            text:[['Комплимент в номер для новобрачных'],['Романтический завтрак в номер для двоих'],['Каравай от шеф-повара']]
        },
        {
            title:'Проживание',
            text:[['Бесплатный номер для молодоженов','При проведении свадебного банкета на сумму от 200 000 ₽'],['Скидка 10% на проживание в номере для гостей']]
        },
        {
            title:'Аренда',
            text:[['Аренда ресторанов, залов и шатров бесплатно','При проведении свадебного банкета на сумму от 450 000 ₽'],['Площадка для выездной регистрации бесплатно']]
        },
        {
            title:'ПИТАНИЕ В ПОДАРОК',
            text:[['Комплимент в номер для новобрачных'],['Романтический завтрак в номер для двоих'],['Каравай от шеф-повара']]
        },
        {
            title:'Проживание',
            text:[['Бесплатный номер для молодоженов','При проведении свадебного банкета на сумму от 200 000 ₽'],['Скидка 10% на проживание в номере для гостей']]
        },
        {
            title:'Аренда',
            text:[['Аренда ресторанов, залов и шатров бесплатно','При проведении свадебного банкета на сумму от 450 000 ₽'],['Площадка для выездной регистрации бесплатно']]
        }
    ])
    return{
        modules: [Pagination, Navigation],
        slides,
        swiperOption
    }
  }
}
import './services-slider.scss'
</script>
