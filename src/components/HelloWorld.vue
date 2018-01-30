<template>
  <div>
    <ul>
      <li v-for="language in languages" :key="language.id"></li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  created () {
    this.fetchLanguages()
  },
  computed: {
    ...mapGetters({
      'languages': 'programmingLanguages/programmingLanguages'
    })
  },
  methods: {
    ...mapActions({
      fetchLanguages: 'programmingLanguages/fetchProgrammingLanguages'
    })
  }
}
</script>

<style scoped>
</style>
