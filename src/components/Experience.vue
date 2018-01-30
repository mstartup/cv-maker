<template>
    <div class="experience">
        <!-- each experience input has company name, job title, start date, end date, description -->
        <form id="experForm">
            <label for="compName">Company name</label>
            <input type="text" id="compName" name="compName" ref="compName" placeholder="Enter company name here" required>
            <label for="jobTitle">Job title</label>
            <input type="text" id="jobTitle" name="jobTitle" ref="jobTitle" placeholder="Enter your job title here" required>
            <label for="startDate">StartDate</label>
            <input type="date" id="startDate" name="startDate" ref="startDate" placeholder="Enter date when you started it">
            <label for="endDate">StartDate</label>
            <input type="date" id="endDate" name="endDate" ref="endDate" placeholder="Enter date when you quit">
            <label for="desc">Describe your job</label>
            <textarea col="3" row="30" id="desc" name="desc" ref="desc" placeholder="How whould you describe your job" cols="30" rows="10"></textarea>
            <button type="submit" @click.prevent="getFormValues()">Submit</button>
        </form>
</div>
</template>

<script>
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
  methods: {
    getFormValues () {
      this.compName = this.$refs.compName.value
      this.jobTitle = this.$refs.jobTitle.value
      this.startDate = this.$refs.startDate.value
      this.endDate = this.$refs.endDate.value
      this.desc = this.$refs.desc.value
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
