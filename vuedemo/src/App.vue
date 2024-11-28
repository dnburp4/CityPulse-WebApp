<script setup>
import {ref} from 'vue'
const count = ref(0)
</script>




<template>


<p>

Wussten Sie count ist: {{ count }}

</p>

  <button  @click= "count++" >Count is: {{ count }}</button>


</template>


<style scoped>

</style>


