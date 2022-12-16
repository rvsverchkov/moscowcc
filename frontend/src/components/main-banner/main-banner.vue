<template>
  <div class="main-banner">
    <video autoplay loop muted class="bgvideo" id="bgvideo">
      <source src="../../assets/video/svadba.mp4" type="video/mp4" />
    </video>
    <div class="main-banner-text">
      
        <div class="main-banner-text__title">
          Ваша неповторимая свадьба за городом
        </div>
        <div class="main-banner-text__subtitle">Загородный гольф-клуб Moscow Country Club — идеальное место для свадебного торжества, которое навсегда останется в вашем сердце!
        </div>
        <div class="main-banner-text__calc">
        <router-link to="/calculate" >
        Рассчитать стоимость
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0754 22L14.3183 21.2521L21.3169 14.2628H4.34668V13.1918H21.3169L14.3183 6.20241L15.0754 5.45455L23.3481 13.7273L15.0754 22Z" fill="#044222"/>
</svg>

        </router-link>
      </div>
    
    </div>
  </div>
</template>


<script>

export default {};
import "./main-banner.scss";
</script>