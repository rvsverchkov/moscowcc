<template>
  <div class="footer">
    <div class="container">
      <div class="footer__text">©2022 Moscow Country Club</div>
      <a href="#" class="footer__conf">Политика конфиденциальности</a>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style>
.footer{
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Geometria';
    padding: 24px 0;
    border-top: 1px solid #E8E8EA;

}
.footer .container{
    display: flex;
    justify-content: space-between;
}
.footer__text{
    font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #7F7F7F;
opacity: 0.7;
}
.footer__conf{
    font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #044222;
text-decoration: none;
}
</style>