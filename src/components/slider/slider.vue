<template>
    <hooper  :settings="hooperSettings" id="hooper">
        <slide>
                slide 1
        </slide>
        <slide>
                slide 2
        </slide>
        <slide>
                slide 3
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</template>
<script>
import {Hooper,Slide, Navigation as HooperNavigation} from 'hooper'
import 'hooper/dist/hooper.css';
export default {
    name:'slider',
    components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data(){
      return{
          hooperSettings:{
            itemsToShow: 1,
            centerMode: true,
            autoPlay:true,
            playSpeed:10000
          }
      }
  },
  mounted(){
      
  }
}
</script>
<style scoped>
    .hooper{
        height: inherit;
        border:none;

        overflow-y:hidden;
    }
</style>