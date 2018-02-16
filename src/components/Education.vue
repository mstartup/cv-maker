<template>
    <div>
        <h1>Education</h1>
        <ul>
            <li v-for="edu in educations" :key="edu.id">
                <h4>School name: {{edu.schoolName}}</h4>
                <h5>Degree title: {{edu.degreeTitle}}</h5>
                <h6>Start {{edu.startDate}} until {{edu.endDate}}</h6>
                <h6>{{edu.comment}}</h6>
                <button id='updateBtn' @click='openUpdate(edu)'>Update experience</button>
                <button id="deleteBtn" @click='onDeleteEducation(edu)'>Delete this enter</button>
            </li>
        </ul>
        <upEducation v-if="upOpen" :edu="eduObj" @closeForm="upOpen = openUpdate($event)"></upEducation>
        <crEducation v-if="isOpen" @closeForm="isOpen = toggle($event)"></crEducation>
        <button id='showBtn' @click='toggle()'>Add education</button>
    </div>
</template>

<script>
import crEducation from '../components/CreateEducation.vue'
import upEducation from '../components/UpdateEducation.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Education',
  components: {
    'crEducation': crEducation,
    'upEducation': upEducation
  },
  data: function () {
    return {
      isOpen: false,
      upOpen: false,
      eduObj: {}
    }
  },
  computed: {
    ...mapGetters({
      'educations': 'education/educations'
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
        document.getElementById('showBtn').textContent = 'Add education'
      }
    },
    onDeleteEducation (data) {
      let res = confirm('Are you sure')
      if (!res) {
        return null
      } else {
        let edu = data
        this.$store.dispatch('education/deleteEducation', edu)
      }
    },
    openUpdate: function (data) {
      if (this.isOpen) {
        this.toggle()
      }
      this.upOpen = !this.upOpen
      this.eduObj = data
      if (this.upOpen) {
        document.getElementById('updateBtn').textContent = 'Close form'
      } else {
        document.getElementById('updateBtn').textContent = 'Update education'
      }
    },
    ...mapActions({
      fetchEducation: 'education/fetchEducation',
      deleteEducation: 'education/deleteEducation'
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
