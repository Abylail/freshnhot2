<template>
  <div class="out" :class="{show: show}">
    <div class="container">
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
      if (val) this.$el.addEventListener("click", this.clickListener)
      else this.$el.removeEventListener("click", this.clickListener)
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
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: .1s;
    animation-duration: .3s;
    animation-name: show;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
  .container {
    display: block;
    min-height: 300px;
    margin: 10px;
    width: 80%;
    max-width: 350px;
    background-color: white;
    border-radius: 10px;
  }
  @keyframes show {
    0% {opacity: 0}
    100% {opacity: 1}
  }
</style>