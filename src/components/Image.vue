<template>
    <div class="image">
        <h1>Image</h1>
        <form @submit.prevent="saveImage">
            <input type="file" @change="previewImage" accept="image/*" v-if="image.length < 1">
            <button type="submit" v-if="imageData.length > 0 && image.length < 1">Save</button>
        </form>
        <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
        </div>
        <button type="submit" @click="deleteImage" v-if="image.length > 0">Delete picture</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      imageData: ''
    }
  },
  computed: {
    ...mapGetters({
      image: 'image/image'
    })
  },
  methods: {
    ...mapActions({
      fetchImage: 'image/fetchImage',
      deleteImage: 'image/deleteImage'
    }),
    previewImage: function (event) {
      let input = event.target
      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    saveImage: function () {
      this.fetchImage(this.imageData)
    },
    deleteImage: function () {
      this.imageData = ''
      this.$store.dispatch('image/deleteImage', this.imageData)
    }
  }
}
</script>

<style scoped>
    img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>
