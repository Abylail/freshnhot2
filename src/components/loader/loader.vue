<template>
    <div class="loader-page">
        <div class="loader-container">
            <div class="loader-logo-container">
                <img src="../../assets/logo.svg" alt="logo"/>
                <p>Fresh<span style="color:#fddc3b;">N</span>hot</p>
            </div>
            <div class="loader">
                <span class="loader"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'loader',
}
</script>
<style scoped>
.loader-page{
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    background-color: black;
    color:white;
    z-index: 99;
    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
}
.loader-container{
    max-width: 300px;

    display: flex;
    flex-direction: column;
}
.loader-logo-container{
    display: flex;
    flex-direction: column;

    margin-bottom: 0px;
}
.loader-logo-container img{
    height: 150px;
}
.loader-logo-container p{
    font-size: 26px;
}

span.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #FFF;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}
 
@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
</style>