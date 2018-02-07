<template>
  <div class="base-info">
      <form id="baseInfoForm" @submit.prevent="onUpdateBaseInfo">
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
import {mapGetters, mapActions} from 'vuex'
export default ({
  props: ['info'],
  data () {
    return {
      firstName: this.info.firstName,
      lastName: this.info.firstName,
      homeAdress: this.info.homeAdress,
      mailAd: this.info.mailAd,
      phoneNum: this.info.phoneNum,
      id: this.info.id,
      upOpen: false
    }
  },
  computed: {
    formIsValid () {
      return this.fristName !== '' && this.lastName !== '' && this.homeAdress !== '' && this.mailAd !== '' && this.phoneNum !== ''
    },
    ...mapGetters({
      'baseInfo': 'baseInfo/baseInfo'
    })
  },
  methods: {
    onUpdateBaseInfo () {
      let bInfo = {
        firstName: this.firstName,
        lastName: this.lastName,
        homeAdress: this.homeAdress,
        mailAd: this.mailAd,
        phoneNum: this.phoneNum,
        id: this.id
      }
      console.log(bInfo)
      this.$store.dispatch('baseInfo/updateBaseInfo', bInfo)
      this.upOpen = false
      this.$emit('closeForm', this.upOpen)
    },
    ...mapActions({
      updateBaseInfo: 'baseInfo/updateBaseInfo'
    })
  }
})
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
