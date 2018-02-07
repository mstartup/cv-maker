<template>
    <div>
        <div class="form" v-if="editing">
            <input type="text" placeholder="Ime i prezime" v-model="baseInfo.name">
            <input type="text" placeholder="Adresa" v-model="baseInfo.address">
            <input type="email" placeholder="Email" v-model="baseInfo.email">
            <input type="text" placeholder="Kontakt telefon" v-model="baseInfo.phone">
            <button @click="validateAndSave"></button>
        </div>
        <div v-if="!editing">
            <div @click="edit">edit</div>
            <div>{{ baseInfo.name }}</div>
            <div>{{ baseInfo.address }}</div>
            <div>{{ baseInfo.email }}</div>
            <div>{{ baseInfo.phone }}</div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      editing: true
    }
  },
  computed: {
    ...mapGetters({
      baseInfo: 'baseInfo/baseInfoExample'
    })
  },
  methods: {
    ...mapActions({
      saveBaseInfo: 'baseInfo/setBaseInfoAction'
    }),
    validateAndSave () {
      // if valid
      this.saveBaseInfo(this.baseInfo)
      this.editing = false
    },
    edit () {
      this.editing = true
    }
  }
}
</script>
