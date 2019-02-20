<template>
    <header-box :title-txt="showTitleTxt"></header-box>
</template>
<script>
    import Header from './header'
    export default {
        name: 'index',
        components: {
            'header-box': Header
        },
        data () {
            return {
                showTitleTxt: {
                    name: '首页'
                }
            }
        }
    }
</script>