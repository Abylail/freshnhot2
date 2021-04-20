<template>
  <div :class="[{show: show}, {dense:dense},'out']">
    <div class="container">
      <header><p class="title">{{title}}</p><button @click="$emit('close')" class="close"><span class="close"/></button></header>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      containerEl: null
    }
  },
  props: {
    show: {
      type: Boolean,
      default: () => false
    },
    dense: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      default:() => ""
    }
  },
  methods: {
    clickListener(event) {
      if (!event.path.includes(this.containerEl)) this.$emit("close");
    }
  },
  mounted() {
    this.containerEl = this.$el.getElementsByClassName("container")[0];
  },
  watch: {
    show(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        this.$el.addEventListener("click", this.clickListener);
      }
      else {
        document.body.style.overflow = "auto";
        this.$el.removeEventListener("click", this.clickListener);
      }
    }
  }
}
</script>

<style scoped>
  .out {
    display: none;
    top: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .3);
    z-index: 51;
    transition: .3s;
    opacity: 0;
  }
  .show {
    display: block;
    animation-delay: .1s;
    animation-duration: .3s;
    animation-name: show;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
  .container {
    display: block;
    min-height: 300px;
    margin: auto;
    margin-top: 180px;
    width: 80%;
    max-width: 350px;
    background-color: white;
    border-radius: 10px;
    padding: 30px 10px;
    padding-top: 0;
  }
  header {
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-areas: "title close";
  }
  p.title {
    grid-area: title;
  }
  button.close {
    grid-area: close;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
  }
  span.close {
    padding-top: 10px;
    height: 40px;
    width: 40px;
    transform: rotate(45deg);
  }
  span.close:before, span.close:after {
    content: "";
    position: absolute;
    background-color: gray;
    width: 3px;
    height: 28px;
    margin-left: -2px;
    border-radius: 5px;
  }
  span.close:after {
    transform: rotate(90deg);
  }
  @keyframes show {
    0% {opacity: 0}
    100% {opacity: 1}
  }
</style>