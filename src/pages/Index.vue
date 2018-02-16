<template>
    <div>
        <div class="cv-maker">
            <user-image></user-image>
            <base-info></base-info>
            <education></education>
            <experience></experience>
            <hr>
            <router-link to="Template">Choose template</router-link>
        </div>
    </div>
</template>

<script>
import BaseInfo from '../components/BaseInfo.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Image from '../components/Image.vue'
export default {
  components: {
    'base-info': BaseInfo,
    'education': Education,
    'experience': Experience,
    'user-image': Image
  }
}
</script>
