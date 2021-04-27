<template>
    <section class="text-block">
        <h1 v-if="title">{{title}}</h1>
        <h2 v-if="subTitle">{{subTitle}}</h2>
        <p v-for="(t, i) in text" :key="i">{{t}}</p>
    </section>
</template>

<script>
export default {
    name: "BaseTextBlock",
    props: {
        title: String,
        subTitle: String,
        text: Array
    }
}
</script>
<style scoped>
    .text-block {
        min-height: 500px;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    h1, h2, p {
        text-align: center;
        padding: 0 10px;
    }
    h1 {
        margin: 20px 0;
        font-size: 22px;
    }
    h2 {
        font-size: 18px;
        color: gray;
    }
    p {
        margin-top: 10px;
        font-size: 16px;
    }
    @media (max-width: 500px) {
        h1, p {
            color: white;
        }
    }
</style>