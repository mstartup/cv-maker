<template>
    <div class="education">
        <form id="educationForm" @submit.prevent="onUpdateEducation">
            <label for="schoolName">School name</label>
            <input type="text" id="schoolName" name="schoolName" v-model="schoolName" placeholder="Enter school name here" required>
            <label for="degreeTitle">Degree title</label>
            <input type="text" id="degreeTitle" name="degreeTitle" v-model="degreeTitle" placeholder="Enter your degree title here" required>
            <label for="startDate">StartDate</label>
            <input type="date" id="startDate" name="startDate" v-model="startDate" placeholder="Enter date when you started it">
            <label for="endDate">StartDate</label>
            <input type="date" id="endDate" name="endDate" v-model="endDate" placeholder="Enter date when you quit">
            <label for="comment">Comment</label>
            <textarea col="3" row="30" id="comment" name="comment" v-model="comment" placeholder="Comment" cols="30" rows="10"></textarea>
            <button type="submit" :disabled="!formIsValid">Submit</button>
        </form>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default ({
  props: ['edu'],
  data () {
    return {
      schoolName: this.edu.schoolName,
      degreeTitle: this.edu.degreeTitle,
      startDate: this.edu.startDate,
      endDate: this.edu.endDate,
      comment: this.edu.comment,
      id: this.edu.id,
      upOpen: false
    }
  },
  computed: {
    formIsValid () {
      return this.schoolName !== '' && this.degreeTitle !== '' && this.startDate !== ''
    },
    ...mapGetters({
      'educations': 'education/educations'
    })
  },
  methods: {
    onUpdateEducation () {
      if (!this.formIsValid) {
        return
      }
      let edu = {
        schoolName: this.schoolName,
        degreeTitle: this.degreeTitle,
        startDate: this.startDate,
        endDate: this.endDate,
        comment: this.comment,
        id: this.id
      }
      this.$store.dispatch('education/updateEducation', edu)
      this.upOpen = false
      this.$emit('closeForm', this.upOpen)
    },
    ...mapActions({
      updateEducation: 'education/updateEducation'
    })
  }
})
</script>

<style scoped>
    .education {
        width: 40%;
        margin: 10px auto;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>
