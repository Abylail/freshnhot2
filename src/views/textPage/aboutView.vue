<template>
    <div class="text-view">
        <smart-header
            logo
            phone
        />
        <base-text-block
            title="О Freshnhot"
            subTitle="Самые вкусные суши в алматы"
            :text="['Freshnot особая кухня и особый вкус от лучших поваров']"
        />
    </div>
</template>
<script>
import BaseTextBlock from "@/components/base/BaseTextBlock";
import SmartHeader from '../../components/header/smartHeader.vue';
export default {
    name: "aboutView",
    components: {BaseTextBlock, SmartHeader}
}
</script>