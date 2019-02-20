<template>
	<div>
	<h1>父-->子通信！</h1>
    <header-box :title-txt="showTitleTxt"></header-box>
    <h1>这是02组件！</h1>
    </div>
</template>
<script>
    import Header from './03'
    export default {
        name: 'index',
        components: {
            'header-box': Header
        },
        data () {
            return {
                showTitleTxt: '首页'
            }
        }
    }
</script>