<template>
  <div class="calc-price">
    <div class="container">
      <div class="mini-title">стоимость</div>
      <div class="calc-price__title">Сколько стоит ваша свадьба?</div>
      <div class="calc-price__subtitle">
        Узнайте все о свадьбе Вашей мечты, ответив на несколько вопросов
      </div>
      <div class="calc-price__button">
        <router-link to="/calculate" >
        Рассчитать стоимость
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0754 22L14.3183 21.2521L21.3169 14.2628H4.34668V13.1918H21.3169L14.3183 6.20241L15.0754 5.45455L23.3481 13.7273L15.0754 22Z" fill="white"/>
</svg>

        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 

    setup(){

    }
};
import "./calc-price.scss";
</script>
