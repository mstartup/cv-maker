<template>
  <div class="base-info">
      <form id="baseInfoForm" @submit.prevent="onCreateBaseInfo">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" v-model="firstName">
          <label for="lastname">Last Name</label>
          <input type="text" name="lastName" id="lastName" v-model="lastName">
          <label for="homeAdress">Home adress</label>
          <input type="text" name="homeAdress" id="homeAdress" v-model="homeAdress">
          <label for="mailAd">Mail</label>
          <input type="email" name="mailAd" id="mailAd" v-model="mailAd">
          <label for="phoneNum">Phone Num</label>
          <input type="text" name="phoneNum" id="phoneNum" v-model="phoneNum">
          <button type="submit" :disabled="!formIsValid">Submit</button>
      </form>
  </div>
</template>

<script>
let id = 1
export default {
  data () {
    return {
      schoolTitle: '',
      degreeTitle: '',
      homeAdress: '',
      mailAd: '',
      phoneNum: ''
    }
  },
  computed: {
    formIsValid () {
      return this.fristName !== '' && this.lastName !== '' && this.homeAdress !== '' && this.mailAd !== '' && this.phoneNum !== ''
    }
  },
  methods: {
    onCreateBaseInfo () {
      if (!this.formIsValid) {
        return
      }
      let info = {
        firstName: this.firstName,
        lastName: this.lastName,
        homeAdress: this.homeAdress,
        mailAd: this.mailAd,
        phoneNum: this.phoneNum,
        id: id
      }
      this.$store.dispatch('baseInfo/fetchBaseInfo', info)
      this.$emit('closeForm', this.closeForm)
      id++
    }
  }
}
</script>

<style scoped>
    .base-info {
        width: 40%;
        margin: 10px auto;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>
