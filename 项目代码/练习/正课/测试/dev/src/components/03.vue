<template>
    <header>
        {{thisTitleTxt}}
	 <h1>这是03组件！</h1>
    </header>
</template>
<script>
    export default {
        name: 'header-box',
        props: {
            titleTxt: String
        },
        data () {
            return {
                thisTitleTxt: this.titleTxt
            }
        }
    }
</script>