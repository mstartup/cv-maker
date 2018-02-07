<template>
    <div class="base-info">
      <!-- name, title, linkedin url etc -->
    <h1>Base Info</h1>
    <ul>
      <li v-for="baseInfo in baseInfos" :key="baseInfo.id">
        <h3>{{baseInfo.firstName}} {{baseInfo.lastName}}</h3>
        <h4>{{baseInfo.homeAdress}}</h4>
        <h4>{{baseInfo.mailAd}}</h4>
        <h4>{{baseInfo.phoneNum}}</h4>
        <button id='updateBtn' @click='openUpdate(baseInfo)'>Update base info</button>
        <button id="deleteBtn" @click='onDeleteBaseInfo(baseInfo)'>Delete this data</button>
      </li>
    </ul>
    <upBaseInfo v-if="upOpen" :info="inObj" @closeForm="upOpen = openUpdate($event)"></upBaseInfo>
    <crBaseInfo v-if="isOpen" @closeForm="isOpen = toggle($event)"></crBaseInfo>
    <button id='showBtn' @click='toggle()' v-if="baseInfos.length < 1">Add base info</button>
    </div>
</template>

<script>
import crBaseInfo from '../components/CreateBaseInfo.vue'
import upBaseInfo from '../components/UpdateBaseInfo.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    'crBaseInfo': crBaseInfo,
    'upBaseInfo': upBaseInfo
  },
  data: function () {
    return {
      isOpen: false,
      upOpen: false,
      inObj: {}
    }
  },
  computed: {
    ...mapGetters({
      'baseInfos': 'baseInfo/baseInfo'
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
        document.getElementById('showBtn').textContent = 'Add base info'
      }
    },
    onDeleteBaseInfo (data) {
      let res = confirm('Are you sure')
      if (!res) {
        return null
      } else {
        let info = data
        this.$store.dispatch('baseInfo/deleteBaseInfo', info)
      }
    },
    openUpdate: function (data) {
      if (this.isOpen) {
        this.toggle()
      }
      this.upOpen = !this.upOpen
      this.inObj = data
      if (this.upOpen) {
        document.getElementById('updateBtn').textContent = 'Close form'
      } else {
        document.getElementById('updateBtn').textContent = 'Update info'
      }
    },
    ...mapActions({
      fetchBaseInfo: 'baseInfo/fetchBaseInfo',
      deleteBaseInfo: 'baseInfo/deleteBaseInfo'
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
