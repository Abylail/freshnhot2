<template>
    <button @click="$emit('click')" :class="[{primary: primary}, {little: little}, {big: big}, {block, block}]">
        <slot/>
    </button>
</template>
<script>
export default {
    name: "BaseButton",
    props: {
        primary: {
            type: Boolean,
            default:() => false
        },
        little: {
            type: Boolean,
            default:() => false
        },
        big: {
            type: Boolean,
            default:() => false
        },
        block: {
            type: Boolean,
            default:() => false
        }
    }
}
</script>
<style scoped>
    button {
        width: 170px;
        height: 38px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 30px;
        font-size: 20px;
    }
    button:hover {
        opacity: .9;
    }
    button:active {
        opacity: .6;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>