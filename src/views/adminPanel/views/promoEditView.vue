<template>
  <div>
    <div class="row"></div>
    <div class="rom add">
      <input placeholder="Название промо" v-model="newPromo.code"/>
      <input placeholder="Скидка промо" v-model="newPromo.value"/>
      <button class="add-promo" @click="addPromo">Добавить промокод</button>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/promocodes";
export default {
  name: "promoEditView",
  data() {
    return {
      promocodes: [],
      newPromo: {},
    }
  },
  async mounted() {
    let { data } = await getList();
    this.promocodes = data.data;
    console.log(this.promocodes);
  },
  methods: {
    addPromo() {

    }
  }
}
</script>

<style scoped>
  .add {
    min-height: 100px;
    background-color: #FFFFFF;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }
  .add input{
    margin: 3px;
    height: 20px;
    font-size: 16px;
  }
  .add-promo {
    background-color: red;
    color: white;
    font-size: 16px;
    border-radius:  5px;
    border: none;
    padding: 5px;
  }
</style>