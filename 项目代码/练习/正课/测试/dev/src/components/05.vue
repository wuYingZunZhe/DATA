<template>
    <header @click="changeTitleTxt">
        {{thisTitleTxt.name}}
    </header>
</template>
<script>
    export default {
        name: 'header-box',
        props: {
            titleTxt: Object
        },
        data () {
            return {
                thisTitleTxt: this.titleTxt.name
            }
        },
        metheds: {
            changeTitleTxt () {
                this.titleTxt.name = '切换'
            }
        }
    }
</script>