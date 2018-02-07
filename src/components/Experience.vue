<template>
    <div>
        <h1>Experience</h1>
        <ul>
            <li v-for="experience in experiances" :key="experience.id">
                <h4>Company name: {{experience.compName}}</h4>
                <h5>Job title: {{experience.jobTitle}}</h5>
                <h6>Start working {{experience.startDate}} and worked until {{experience.endDate}}</h6>
                <h6>Job description: {{experience.desc}}</h6>
                <button id='updateBtn' @click='openUpdate(experience)'>Update experience</button>
                <button id="deleteBtn" @click='onDeleteExperience(experience)'>Delete this enter</button>
            </li>
        </ul>
        <upExperience v-if="upOpen" :exp="expObj" @closeForm="upOpen = openUpdate($event)"></upExperience>
        <crExperience v-if="isOpen" @closeForm="isOpen = toggle($event)"></crExperience>
        <button id='showBtn' @click='toggle()'>Add experience</button>
    </div>
</template>

<script>
import crExperience from '../components/CreateExperience.vue'
import upExperience from '../components/UpdateExperience.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Experience',
  components: {
    'crExperience': crExperience,
    'upExperience': upExperience
  },
  data: function () {
    return {
      isOpen: false,
      upOpen: false,
      expObj: {}
    }
  },
  computed: {
    ...mapGetters({
      'experiances': 'experience/experiances'
    })
  },
  methods: {
    toggle: function () {
      if (this.upOpen) {
        this.openUpdate()
      }
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.getElementById('showBtn').textContent = 'Close form'
      } else {
        document.getElementById('showBtn').textContent = 'Add experience'
      }
    },
    onDeleteExperience (data) {
      let res = confirm('Are you sure')
      if (!res) {
        return null
      } else {
        let exp = data
        this.$store.dispatch('experience/deleteExperience', exp)
      }
    },
    openUpdate: function (data) {
      if (this.isOpen) {
        this.toggle()
      }
      this.upOpen = !this.upOpen
      this.expObj = data
      if (this.upOpen) {
        document.getElementById('updateBtn').textContent = 'Close form'
      } else {
        document.getElementById('updateBtn').textContent = 'Update experience'
      }
    },
    ...mapActions({
      fetchExperience: 'experience/fetchExperience',
      deleteExperience: 'experience/deleteExperience'
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
