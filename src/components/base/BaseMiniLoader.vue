<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "BaseMiniLoader"
}
</script>

<style scoped>
.loader {
  border: 3px solid white;
  border-right-color: transparent;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  animation: load2 1s linear infinite;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>