<template>
    <hooper  :settings="hooperSettings" id="hooper">
        <slide v-for="slide in slides" :key="slide.id" class="slide">
<!--            <img :src="`https://api.freshnhot.kz${slide.img_src}`">-->
          <div class="img" :style="{'background-image': `url(https://api.freshnhot.kz${slide.img_src})`}"></div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</template>
<script>
import {Hooper,Slide, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';
import { mapActions, mapGetters } from 'vuex';
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
            playSpeed:5000,
            wheelControl: false,
          },
          isDataReady: false,
      }
  },
  methods:{
      ...mapActions({
        fetchSlides: "slider/getList"
      })
  },
  computed: {
      ...mapGetters({
          slides: "slider/getList"
      })
  },
  async created(){
      await this.fetchSlides();
      this.isDataReady = true;
  }
}
</script>
<style scoped>
    .hooper{
        height: inherit;
        border:none;

        overflow-y:hidden;
    }
    .slide .img {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    @media (min-width:500px){
        .hooper {
            overflow: hidden;
            -webkit-box-shadow: 0px 5px 14px 8px rgba(0,0,0,0.9);
            -moz-box-shadow: 0px 5px 14px 8px rgba(0,0,0,0.9);
            box-shadow: 0px 5px 30px 20px rgba(0,0,0,0.6)
        }
    }
</style>