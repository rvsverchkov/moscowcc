<template>
  <div class="services">
    <div class="container">
      <div class="mini-title">Это еще не все</div>
      <div class="big-title">Дополнительные услуги</div>
      <div class="title-description">
        Чтобы сделать вашу свадьбу ещё более яркой
      </div>
      <div class="services-content">
        <div
          class="services-content__item"
          v-for="(item, index) in isData"
          :key="index"
          :style="{
            background: ' url(' + item?.img + ') no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <div class="services-content__item-block">
            <div class="services-content__item-block_position">
            <div class="services-content__item-block-num">{{ item.num }}</div>
            <img src="../../assets/image/services/line.svg" alt="" />
            <div class="services-content__item-block-title">{{ item.title }}</div>
            <div class="services-content__item-block-desc">{{ item.description }}</div>
        </div>
          </div>
        </div>
      </div>

<servicesSlider/>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import servicesSlider from '../services-slider/services-slider.vue'
export default {
    components:{
        servicesSlider
    },
  setup() {
    const isData = ref([
      {
        img: require("@/assets/image/services/serv1.svg"),
        num: "01",
        title: "Услуги дизайнера интерьеров и декоратора",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv2.svg"),
        num: "02",
        title: "Эксклюзивная мебель в аренду",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv3.svg"),
        num: "03",
        title: "Дополнительное оборудование в аренду",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv4.svg"),
        num: "04",
        title: "Услуги артистов и аниматоров",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv5.svg"),
        num: "05",
        title: "Услуги фотографа/видеографа",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv6.svg"),
        num: "06",
        title: "Салон красоты",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv7.svg"),
        num: "07",
        title: "Арт-студия",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
      {
        img: require("@/assets/image/services/serv8.svg"),
        num: "08",
        title: "Конные прогулки",
        description:
          "Украсим свадебные пространства под ваши эстетические предпочтения, подберем декоративные конструкции и аксессуары, предложим цветовые и текстильные решения",
      },
    ]);
    return {
      isData,
    };
  },
};
import "./additional-services.scss";
</script>