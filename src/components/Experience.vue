<template>
    <div>
        <h1>Experience</h1>
        <ul>
            <li v-for="experience in experiances" :key="experience.id">
                <h4>Company name: {{experience.compName}}</h4>
                <h5>Job title: {{experience.jobTitle}}</h5>
                <h6>Start working {{experience.startDate}} and worked until {{experience.endDate}}</h6>
                <h6>Job description: {{experience.desc}}</h6>
            </li>
        </ul>
        <button id='showBtn' @click='toggle()'>Add experience</button>
        <crExperience v-show="isOpen"></crExperience>
    </div>
</template>

<script>
import crExperience from '../components/CreateExperience.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Experience',
  components: {
    'crExperience': crExperience
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      'experiances': 'experience/experiances'
    })
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.getElementById('showBtn').textContent = 'Close form'
      } else {
        document.getElementById('showBtn').textContent = 'Add experience'
      }
    },
    ...mapActions({
      fetchLanguages: 'experience/fetchExperience'
    })
  }
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
