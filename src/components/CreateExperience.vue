<template>
    <div class="experience">
        <!-- each experience input has company name, job title, start date, end date, description -->
        <form id="experForm" @submit.prevent="onCreateExperience">
            <label for="compName">Company name</label>
            <input type="text" id="compName" name="compName" v-model="compName" placeholder="Enter company name here" required>
            <label for="jobTitle">Job title</label>
            <input type="text" id="jobTitle" name="jobTitle" v-model="jobTitle" placeholder="Enter your job title here" required>
            <label for="startDate">StartDate</label>
            <input type="date" id="startDate" name="startDate" v-model="startDate" placeholder="Enter date when you started it">
            <label for="endDate">StartDate</label>
            <input type="date" id="endDate" name="endDate" v-model="endDate" placeholder="Enter date when you quit">
            <label for="desc">Describe your job</label>
            <textarea col="3" row="30" id="desc" name="desc" v-model="desc" placeholder="How whould you describe your job" cols="30" rows="10"></textarea>
            <button type="submit" :disabled="!formIsValid">Submit</button>
        </form>
</div>
</template>

<script>
let id = 1
export default ({
  data () {
    return {
      compName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      desc: ''
    }
  },
  computed: {
    formIsValid () {
      return this.compName !== '' && this.jobTitle !== ''
    }
  },
  methods: {
    onCreateExperience () {
      if (!this.formIsValid) {
        return
      }
      let exp = {
        compName: this.compName,
        jobTitle: this.jobTitle,
        startDate: this.startDate,
        endDate: this.endDate,
        desc: this.desc,
        id: id
      }
      this.$store.dispatch('experience/fetchExperience', exp)
      id++
      document.getElementById('compName').value = ''
      document.getElementById('jobTitle').value = ''
      document.getElementById('startDate').value = ''
      document.getElementById('endDate').value = ''
      document.getElementById('desc').value = ''
    }
  }
})
</script>

<style scoped>
    .experience {
        width: 40%;
        margin: 10px auto;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>
