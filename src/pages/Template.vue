<template>
  <div>
      <h1>hello from template</h1>
      <h2>Choose template <span @click="T1 = true; T2 = false; T3 = false">1</span> <span @click="T1 = false; T2 = true; T3 = false">2</span> <span @click="T1 = false; T2 = false; T3 = true">3</span></h2>
      <temp-t1 v-if="T1"></temp-t1>
      <temp-t2 v-if="T2"></temp-t2>
      <temp-t3 v-if="T3"></temp-t3>
      <hr>
      <router-link to="/">Go back</router-link>
      <router-link to="/downloadPDF">Download in pdf</router-link>
  </div>
</template>

<script>
import T1 from '../components/Template1.vue'
import T2 from '../components/Template2.vue'
import T3 from '../components/Template3.vue'
export default {
  components: {
    'temp-t1': T1,
    'temp-t2': T2,
    'temp-t3': T3
  },
  data () {
    return {
      T1: true,
      T2: false,
      T3: false
    }
  }
}
</script>

<style lang="scss" scoped>
    h2 span {
        cursor: pointer;
        &:hover {
            color:red;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
