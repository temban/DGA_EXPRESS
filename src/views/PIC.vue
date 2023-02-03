<!--<template>
  <div>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
    </div>    
  </div>
</template>
<script>
export default {
    name: "PIC",
  data() {
      return {
        files: null
      };
    },
    methods: {
        uploadFile (event) {
        this.files = event.target.files
        },
        handleSubmit() {


var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
 for (const i of Object.keys(this.files)) {
            data.append('file', this.files[i]);
          }
var config = {
  method: 'put',
  url: '/upload/article/images/942cd26a-559a-4108-80a5-2426912c68c8',
  headers: { 
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

        }  
    }
}
</script>
<style lang="scss" scoped>
.container {
  max-width: 600px;
}
</style>-->