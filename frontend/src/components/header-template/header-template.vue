<template>
  <div class="header" :class="{'header-fix': isActive}">
    <div class="container">
      <div class="header-links">
        <a class="header-links__item">Услуги</a>
        <a class="header-links__item">О комлексе</a>
        <a class="header-links__item">Отзывы</a>
        <a class="header-links__item">Контакты</a>
      </div>
      <img src="../../assets/image/logo.svg" alt="" class="header__logo"/>
      <div class="header-callback">
        <div>+7 (499) 406-01-15</div>
        <div  class="header-callback__col">
            <div class="header-callback__col_white">Обратный звонок</div>
            <div class="header-callback__col_pink">Ежедневно 9:00 – 20:00</div>
        </div>
        <div class="header-calc">
        <div>Рассчитать стоимость</div>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import {  onMounted, ref } from 'vue';
export default {
    
setup(){
    const isActive = ref(false)
    window.onscroll = function () {
        console.log(window.pageYOffset)
        if(window.pageYOffset!=0){
            isActive.value=true
        }
        else{
            isActive.value=false
        }
    }
    onMounted(()=>{

})
    return{
        isActive
    }
}
};
import "./header-template.scss";
</script>