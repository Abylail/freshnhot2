<template>
  <div>
    <div class="row" v-for="promocode in promocodes" :key="promocode.id">
      <p><span class="static-text">Код: </span>{{promocode.code}}</p>
      <p><span class="static-text">Значение: </span>{{promocode.value}}%</p>
      <button @click="deleteHandle(promocode.id)">Удалить</button>
    </div>
    <div class="row add">
      <input placeholder="Название промо" v-model="newPromo.code"/>
      <input placeholder="Скидка промо" type="number" v-model="newPromo.value"/>
      <div class="error-container"><p class="error-message" v-show="errorMessage">{{errorMessage}}</p></div>
      <button class="add-promo" @click="addPromoHandle">Добавить промокод</button>
    </div>
  </div>
</template>

<script>
import { getList, addPromo, deletePromo } from "@/api/promocodes";
export default {
  name: "promoEditView",
  data() {
    return {
      promocodes: [],
      newPromo: {},
      errorMessage:""
    }
  },
  async mounted() {
    let { data } = await getList();
    this.promocodes = data.data;
  },
  methods: {
    addPromoHandle() {
      this.errorMessage = "";
      setTimeout(async () => {
        if (!this.newPromo.code || !this.newPromo.value) {
          this.errorMessage = "Не все поля введены";
          return;
        }
        let {data} = await addPromo(this.newPromo);
        if (data.success) {
          this.promocodes.push(data.data);
        }
        this.newPromo = {};
      }, 10);
    },
    async deleteHandle(id) {
      let { data } = await deletePromo(id)
      if (data.result) {
        let list = [ ...this.promocodes ];
        let index = list.findIndex(promo => promo.id === id);
        if (index > -1) {
          list.splice(index, 1);
        }
        this.promocodes = list;
      }
    }
  }
}
</script>

<style scoped>
  .row {
    min-height: 100px;
    background-color: #efefef;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .add {
    background-color: white;
  }
  .static-text {
    color: gray;
  }
  .add input{
    margin: 3px;
    height: 24px;
    font-size: 16px;
    max-width: 300px;
  }
  button {
    background-color: red;
    color: white;
    font-size: 16px;
    border-radius:  5px;
    border: none;
    padding: 5px;
    max-width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
  }
  .error-container {
    height: 24px;
  }
  .error-message {
    color : red;
    text-align: center;
    animation-name: bounce;
    animation-duration: 0.3s;
  }
  @keyframes bounce {
    0% {
      transform: translateX(0px);
      timing-function: ease-in;
    }
    27% {
      transform: translateX(25px);
      timing-function: ease-out;
    }
    40% {
      transform: translateX(-25px);
      timing-function: ease-in;
    }
    60% {
      transform: translateX(10px);
      timing-function: ease-out;
    }
    72% {
      transform: translateX(-10px);
      timing-function: ease-in;
    }
    91% {
      transform: translateX(3px);
      timing-function: ease-out;
    }
    96% {
      transform: translateX(-3px);
      timing-function: ease-in;
    }
    100% {
      transform: translateX(0px);
      timing-function: ease-in;
    }
  }
</style>