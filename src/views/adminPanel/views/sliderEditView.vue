<template>
    <div>
        <div class="row" v-for="slide in row" :key="slide.id">
            <img :src="`https://api.freshnhot.kz${slide.img_src}`">
            <button class="delete">Удалить слайд</button>
        </div>
        <div class="row add">
          <input type="file" accept="image/*" @change="imageSelected"/>
          <button>Добавить</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "sliderEditView",
    data() {
        return {
          image:null,
            row:[
              {
                id:0,
                img_src:""
              },
              {
                id:1,
                img_src:""
              },
            ],
        }
    },
  methods:{
    imageSelected(event) {
      this.image = event.target.files[0];
      console.log(this.image);
    }
  }
}
</script>
<style scoped>
    .row {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      margin-top: 20px;
      align-items: center;
    }
    .row img{
      height: 200px;
    }
    button.delete{
      font-size: 15px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 15px;
      margin: 10px;
      padding:5px;
      padding-left: 10px;
      padding-right:  10px;
    }
    div.add {
      background-color: white;
      margin:20px;
      border-radius: 5px;
      padding: 10px;
    }
    div.add button{
      background-color: red;
      color: white;
      margin: 10px;
      font-size: 30px;
      border-radius: 5px;
      padding: 10px;
      padding-left: 20px;
      padding-right: 20px;
      border: none;
    }
</style>