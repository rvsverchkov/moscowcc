<template>
  <div class="proposal">
    <div class="container">
      <div class="mini-title">что мы предлагаем</div>
      <div class="big-title">Услуги</div>
      <div class="title-description">
        Мы предлагаем широкий выбор услуг для свадебного торжества, включая
        отдых до и после свадьбы
      </div>
      <div class="proposal__slider">
        <swiper
          :breakpoints="swiperOption.breakpoints"
          :modules="modules"
          class="proposal__slider-item"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="proposal__slider-title">{{ slide.main.title }}</div>
            <div class="proposal__slider-subtitle">{{ slide.main.place }}</div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next" @click="changeNext(true)"></div>
        <div class="swiper-button-prev" @click="changePrev(true)"></div>
      </div>
    </div>

    <proposalTab :slider="content" :titleSlide="titleSlide"/>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import proposalTab from "../proposal-tab/proposal-tab.vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

//  @click="activateSlider(index)" на swiper

export default {
  components: {
    Swiper,
    SwiperSlide,
    proposalTab,
  },
  setup() {
    const content = ref()
    const titleSlide = ref()
    const subTitleSlide = ref()
    const changeNext = (item) => {
      const button = document.querySelector(
        ".proposal__slider .swiper-button-next"
      );

      if (item) {
        swiperInit.value.slideNext();
      }
      if (swiperInit.value.activeIndex > 0) {
        const prev = document.querySelector(
          ".proposal__slider .swiper-button-prev"
        );
        prev.classList.remove("swiper-button-disabled");
      }
      if (swiperInit.value.activeIndex + 1 == swiperInit.value.slides.length) {
        button.classList.add("swiper-button-disabled");
      } else {
        button.classList.remove("swiper-button-disabled");
      }
      findData(swiperInit.value.activeIndex)
    };
    const changePrev = (item) => {
      const button = document.querySelector(
        ".proposal__slider .swiper-button-prev"
      );

      if (item) {
        swiperInit.value.slidePrev();
      }
      if (swiperInit.value.activeIndex + 1 != swiperInit.value.slides.length) {
        const next = document.querySelector(
          ".proposal__slider .swiper-button-next"
        );
        next.classList.remove("swiper-button-disabled");
      }
      if (swiperInit.value.activeIndex == 0) {
        button.classList.add("swiper-button-disabled");
      } else {
        button.classList.remove("swiper-button-disabled");
      }
      findData(swiperInit.value.activeIndex)
    };
    const activateSlider = (index) => {
      swiperInit.value.slideTo(index);
      resizeSlider();
    };
    const swiperInit = ref();
    const onSwiper = (item) => {
      swiperInit.value = item;
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

    const slides = ref([
      {
        main: {
          title: "Банкетные площадки",
          place: "Выберите роскошные площадки для вашего торжества",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
          slide: [
            {
              img: require("@/assets/image/proposal-tabs/slide1.svg"),
              title: "Forest Country Hall",
              subtitle:
                "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
            },
            {
              img: require("@/assets/image/proposal-tabs/slide2.svg"),
              title: "Ресторан «Зимний сад»",
              subtitle:
                "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
            },
            {
              img: require("@/assets/image/proposal-tabs/slide3.svg"),
              title: "Ресторан «Времена года»",
              subtitle:
                "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
            },
            {
              img: require("@/assets/image/proposal-tabs/slide4.svg"),
              title: "Свадебные шатры",
              subtitle:
                "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
            },
            {
              img: require("@/assets/image/proposal-tabs/slide1.svg"),
              title: "Forest Country Hall",
              subtitle:
                "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
            },
            {
              img: require("@/assets/image/proposal-tabs/slide2.svg"),
              title: "Forest Country Hall",
              subtitle:
                "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
            },
          ],
        },
      },
      {
        main: {
          title: "Банкетное меню",
          place: "Насладитесь искренностью момента в кругу близких",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
        slide: [
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall2",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Ресторан «Зимний сад»",
            subtitle:
              "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide3.svg"),
            title: "Ресторан «Времена года»",
            subtitle:
              "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide4.svg"),
            title: "Свадебные шатры",
            subtitle:
              "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
        ],
      }
    },
      {
        main: {
          title: "Выездная регистрация",
          place: "Сделайте выбор в пользу романтики",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
        slide: [
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall3",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Ресторан «Зимний сад»",
            subtitle:
              "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide3.svg"),
            title: "Ресторан «Времена года»",
            subtitle:
              "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide4.svg"),
            title: "Свадебные шатры",
            subtitle:
              "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
        ],
      },
    },
      {
        main: {
          title: "Второй день свадьбы",
          place: "Продлите праздник, которого так долго ждали",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
        slide: [
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall4",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Ресторан «Зимний сад»",
            subtitle:
              "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide3.svg"),
            title: "Ресторан «Времена года»",
            subtitle:
              "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide4.svg"),
            title: "Свадебные шатры",
            subtitle:
              "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
        ],
        }
      },
      {
        main: {
          title: "Выездная регистрация",
          place: "Сделайте выбор в пользу романтики",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
        slide: [
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Ресторан «Зимний сад»",
            subtitle:
              "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide3.svg"),
            title: "Ресторан «Времена года»",
            subtitle:
              "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide4.svg"),
            title: "Свадебные шатры",
            subtitle:
              "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
        ],
        }
      },
      {
        main: {
          title: "Второй день свадьбы",
          place: "Продлите праздник, которого так долго ждали",
        },
        slides: {
          img: require("@/assets/image/proposal-tab.png"),
          mainTitle:'Мы предлагаем несколько роскошных площадок для вашего торжества: банкетный зал «Forest Country Hall», ресторан «Зимний сад», ресторан «Времена года», а также шатры',
        slide: [
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Ресторан «Зимний сад»",
            subtitle:
              "В оформлении ресторана использованы итальянские мотивы и стилистика патио, широко распространенная в Средиземноморье со времен Античности. Самым популярным местом является открытая терраса, где гости могут насладиться зеленым убранством окружающей природы",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide3.svg"),
            title: "Ресторан «Времена года»",
            subtitle:
              "Интерьер выполнен в образцовом классическом стиле с особенным панорамным окном на потолке в центре зала. Такая конструкция обеспечивает комфортное естественное освещение, а в вечернее время позволяет любоваться ночным звёздным небом",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide4.svg"),
            title: "Свадебные шатры",
            subtitle:
              "Большой и малый свадебные шатры вместимостью до 300 гостей банкетом и до 400 гостей фуршетом, установленные на берегу реки. Сложно представить более подходящий выбор для летнего торжества",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide1.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
          {
            img: require("@/assets/image/proposal-tabs/slide2.svg"),
            title: "Forest Country Hall",
            subtitle:
              "Современный классический интерьер в спокойных приятных тонах буквально создан для свадебных фотографий. В зале есть выход на открытую веранду, с которой открывается живописный вид на сосновый лес. Дополнительное преимущество — отсутствие ограничений по звуку",
          },
        ],
        }
      },
    ]);
const findData = (index) =>{
    content.value = slides.value[index].slides
    titleSlide.value=slides.value[index].main.title
}
    const resizeSlider = () => {
      const swiperContainer = ref();
      swiperContainer.value = document.querySelector(
        ".proposal__slider-item .swiper-wrapper"
      );

      const mm = swiperContainer.value.style.transform
        .split("(")[1]
        .split("px");
      swiperContainer.value.style.marginLeft = -mm[0] + "px";
    };
    onMounted(() => {
      resizeSlider();
      changePrev();
      findData(0)
    });
    return {
      slides,
      swiperOption,
      activateSlider,
      onSwiper,
      swiperInit,
      resizeSlider,
      changeNext,
      changePrev,
      content,
      findData,
      titleSlide

    };
  },
};
import "./proposal.scss";
</script>