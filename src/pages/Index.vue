<template>
    <div>
        <div class="cv-maker">
            <user-image></user-image>
            <base-info></base-info>
            <education></education>
            <experience></experience>
        </div>
        <div class="suggestions">
            suggestions
        </div>
    </div>
</template>

<script>
import BaseInfoExample from '../components/BaseInfoExample.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Image from '../components/Image.vue'
export default {
  components: {
    'base-info': BaseInfoExample,
    'education': Education,
    'experience': Experience,
    'user-image': Image
  }
}
</script>
