<template>
<div>
    <h1>Template 1</h1>
    <img :src="image[0]">
    <div v-if="baseInfo.length">
        <h3>Name: {{baseInfo[0].firstName}} {{baseInfo[0].lastName}}</h3>
        <h4>Home adress: {{baseInfo[0].homeAdress}}</h4>
        <h4>E-mail: {{baseInfo[0].mailAd}}</h4>
        <h4>Phone: {{baseInfo[0].phoneNum}}</h4>
    </div>
    <div v-if="experiances.length">
        <ul>
            <li v-for="experience in experiances" :key="experience.id">
                <h4>Company name: {{experience.compName}}</h4>
                <h5>Job title: {{experience.jobTitle}}</h5>
                <h6>Start working {{experience.startDate}} and worked until {{experience.endDate}}</h6>
                <h6>Job description: {{experience.desc}}</h6>
            </li>
        </ul>
    </div>
    <div v-if="educations.length">
        <ul>
            <li v-for="edu in educations" :key="edu.id">
                <h4>School name: {{edu.schoolName}}</h4>
                <h5>School degree: {{edu.degreeTitle}}</h5>
                <h6>Start {{edu.startDate}} until {{edu.endDate}}</h6>
                <h6>{{edu.comment}}</h6>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'baseInfo': 'baseInfo/baseInfo',
      'image': 'image/image',
      'educations': 'education/educations',
      'experiances': 'experience/experiances'
    })
  }
}
</script>

<style lang="scss" scoped>
    img {
        width: 200px;
    }
</style>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
