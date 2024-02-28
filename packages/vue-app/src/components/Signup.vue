<template>
    <div class="container-center"> 
        <img src="https://vuejs.org/images/logo.png" alt="VueJS logo" width="100" />
        <h1>This is Vue 3 application !</h1>
        <h2>Vue 3 Internal link</h2>
        <router-link to="/">Back to homepage</router-link>
    </div>
</template>



<script>

export default {   
}
</script>
<style scoped>
.container-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
