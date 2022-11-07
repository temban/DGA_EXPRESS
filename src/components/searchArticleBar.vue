<template>
  

<form action="#" id="header-search-people" class="form-area" novalidate="novalidate" autocomplete="off">
  <div class="row">
      <div class="col-md-10">
          <div class="styled-input wide multi">
              <div class="first-name" id="input-first-name">
                  <input type="text" name="fn" id="fn" autocomplete="off" data-placeholder-focus="false" required v-model="ArticleName" 
                  onkeyup="if(this.value.length > 0) document.getElementById('search_button').disabled = false; else document.getElementById('reservation_button').disabled = true;"/>
                  <label >Article</label>
                  <svg class="icon--check" width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                          <g id="UI-Elements-Forms" transform="translate(-255.000000, -746.000000)" fill-rule="nonzero" stroke="#81B44C" stroke-width="3">
                              <polyline id="Path-2" points="257 754.064225 263.505943 760.733489 273.634603 748"></polyline>
                          </g>
                      </g>
                  </svg>
                  <svg class="icon--error" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                          <g id="UI-Elements-Forms" transform="translate(-550.000000, -747.000000)" fill-rule="nonzero" stroke="#D0021B" stroke-width="3">
                              <g id="Group" transform="translate(552.000000, 749.000000)">
                                  <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy"></path>
                                  <path d="M0,11.1298982 L11.1298982,-5.68434189e-14" id="Path-2-Copy-2" transform="translate(5.564949, 5.564949) scale(-1, 1) translate(-5.564949, -5.564949) "></path>
                              </g>
                          </g>
                      </g>
                  </svg>
              </div>
            
   
              <div class="state" id="select-state">
                  <select name="state" v-model="catId" required>
                      <option value="All">Cathegory</option>
                      <option v-for="item in cates" :value="item" v-bind:key="item.id" >{{ item.name }}</option>
                     
                  </select>
                  <svg class="chevron-down" width="17px" height="10px" viewBox="0 0 17 10" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="UI-Elements-Forms" transform="translate(-840.000000, -753.000000)" stroke="#4A4A4A" stroke-width="0.9">
                              <g id="Done-Copy-2" transform="translate(622.000000, 727.000000)">
                                  <polyline id="Rectangle-16" transform="translate(226.400000, 27.400000) rotate(-45.000000) translate(-226.400000, -27.400000) "
                                      points="231.8 32.8 221 32.8 221 22"></polyline>
                              </g>
                          </g>
                      </g>
                  </svg>
              </div>
          </div>
      </div>
      <div class="col-md-2 no-pad-left-10">
       
        <router-link  :to="{ name: 'articleSearch', params: { catId: this.catId.id, ArtName: this.ArticleName}}"  >  <button id="search_button" disabled type="submit" class="primary-btn serach-btn">Recherche
        </button></router-link>
      </div>
  </div>
</form>

</template>

<script>
export default {
  data() {
    return {
      cathegory: {},
      cate: {},
      cates: [],
      item: [],
      ArticleName:"",
      CatRealId:"",
      catId:''
    };
  },


       components: {
  },

  mounted() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access-token"));

    var requestOptions = {
      method: 'GET', 
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://46.105.36.240:3000/cathegories", requestOptions)
      .then(response => response.text())
      .then(result => this.cates = JSON.parse(result))
      .catch(error => console.log('error', error));
  },
methods: {
  SarchItem(){
    // this.catId = this.item;
    this.catId.id = this.CatRealId;
    console.log("item",this.ArticleName);
    console.log("cath", this.catId.id);
   }
}
}
</script>

<style>

form {
  max-width: 1000px;
}

/* Search Form */

.styled-input {
  float: left;
  background: rgb(246, 251, 255);
  border: 2px solid #efefef;
  border-radius: 15px;
  -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0,0,0,0.20);
          box-shadow: inset 0 -1px 4px 0 rgba(0,0,0,0.20);
  width: 100%;
    max-height: 65px;
  position: relative; 
  margin-bottom: 10px;
  font-family: "Lato", sans-serif;
}

.styled-input.multi {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 12px;
}

.styled-input label {
  color: #f78400;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  margin-top: 7px;
  top: 0;
  left: 60px;
  -webkit-transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  -o-transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
  pointer-events: none;
}

.styled-input.multi label {
  padding: 1px 0 0;
}

.styled-input.active {
  border: 1px solid #d0e5ba;
  -webkit-box-shadow: inset 0 -2px 4px 0 #d5eebb;
  box-shadow: inset 0 -2px 4px 0 #d5eebb;
}

.styled-input .icon--check,
.styled-input .icon--error,
.styled-input .chevron-down {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 2%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 0;
}

.styled-input .icon--check,
.styled-input .icon--error {
  display: none;
}

.styled-input .icon--check {
  right: 0%;
}

.styled-input input.success ~ .icon--check,
.styled-input input.error ~ .icon--error {
  display: inline-block;
}

.styled-input label.error,
.styled-input input:focus ~ label.error,
.styled-input input#fn:valid ~ label.error,
.styled-input input#ln:valid ~ label.error {
  font-size: 15px;
  text-transform: none;
  letter-spacing: normal;
  color: #ff523d;
  top: 53px;
  left: -3px;
}

.styled-input.multi.error {
  margin-bottom: 20px;
}

.styled-input.multi > div {
  position: relative;
  width: 100%;
  border-right: 3px solid #ccc;
}

.styled-input.multi > div:nth-last-of-type(1) {
  border-right: 0;
}

.styled-input.multi > div input,
.styled-input.multi > div label {
  padding-left: 12px;
}

.styled-input.multi > div input {
  padding-top: 20px;
}

.styled-input input:focus,
.styled-input textarea:focus,
.styled-input select:focus {
  outline: none;
}

.styled-input input,
.styled-input textarea,
.styled-input select {
  color: #070707;
  border: 0;
  width: 90%;
  font-size: 18px;
  padding-top: 20px;
  background: transparent;
}

.styled-input select {
  width: 100%;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  z-index: 1;
  left: 11px;
}

/* Focus Label */

/* Focus Label */

.styled-input input:focus ~ label,
.styled-input input#fn:valid ~ label,
.styled-input input#ln:valid ~ label,
.styled-input input#city[filled="true"]:valid ~ label,
.styled-input #select-state label {
  font-size: 14px;
  letter-spacing: 1.56px;
  color: #00aeff;
  top: -12.8px;
  -webkit-transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
  -o-transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
  transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
}

@media (min-width: 991px) {
  .styled-input.multi {
    height: 70px;
  }
}

@media (min-width: 768px) and (max-width: 990px) {
  .styled-input.multi {
    height: 60px;
    padding: 8px 0;
  }
  .styled-input.multi > div input {
    padding-top: 18px;
  }
  .styled-input.multi label {
    padding: 7px 0 0;
  }
  .styled-input input#fn:valid ~ label,
  .styled-input input#ln:valid ~ label,
  .styled-input input#city[filled="true"]:valid ~ label,
  .styled-input.multi input:focus ~ label,
  .styled-input #select-state label {
    top: -9px;
  }
  .styled-input.multi.error {
    margin-bottom: 30px;
  }
  .styled-input label.error,
  .styled-input input:focus ~ label.error,
  .styled-input input#fn:valid ~ label.error,
  .styled-input input#ln:valid ~ label.error {
    font-size: 13px;
    top: 53px;
  }
  .search-area .form-area button.serach-btn {
    height: 60px;
    padding: 0;
  }
}

@media (max-width: 767.98px) {
  .examples [class^="col-"] {
    padding: 0;
  }

  .styled-input.multi > div {
    background-color: #fff;
    margin-bottom: 10px;
    display: block;
    border: 1px solid #efefef;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 4px 0 rgba(0, 0, 0, 0.2);
    width: 50%;
    padding: 16px 16px 8px 11.2px;
  }

  .styled-input.multi {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent;
    margin-bottom: 0;
  }

  .styled-input.multi > div label {
    padding: 12px 0 0 12px;
  }
  .styled-input.multi > div input:valid ~ label,
  .styled-input.multi > div input:focus ~ label,
  .styled-input.multi #select-state > label {
    padding-top: 15px;
  }

  .styled-input.multi > div input {
    padding-left: 0;
    padding-top: 2px;
    position: relative;
    z-index: 2;
    width: 100%;
  }
  .styled-input select {
    left: 0;
    padding-top: 2px;
  }

  .styled-input.multi.error {
    margin-bottom: 0;
  }

  .styled-input.multi > div.error {
    margin-bottom: 30px;
  }

  .styled-input.multi > div.error label.error {
    padding-top: 0;
  }
}

/* Button */

.no-pad-left-10 {
  padding-left: 5px;
}

@media (max-width: 991px) and (min-width: 768px) {
  .no-pad-left-10 {
    padding-left: 0px;
    margin-left: -5px;
    width: calc(16.66666667% + 5px);
  }
}

@media (max-width: 767px) {
  .no-pad-left-10 {
    padding-left: 15px;
    margin-left: 0;
  }
}

.form-area button.serach-btn {
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border: none;
  font-size: 14px;
  background: #ff9837;
  text-align: center;
  color: white;
  font-weight: 700;
  letter-spacing: 0.8px;
  width: 125%;
  height: 60px;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
}

.form-area button.serach-btn:hover {
  background: #ff8800;
  -webkit-box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02),
    0 3px 9px 0 rgba(238, 44, 44, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  box-shadow: -2px -2px 4px -4px rgba(0, 0, 0, 0.02),
    0 3px 9px 0 rgba(216, 22, 22, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}

.form-area button.serach-btn:focus {
  outline: none;
}

@media only screen and (max-width: 991px) {
  .form-area button.serach-btn {
    font-size: 20px;
    height: 60px;
    padding: 0;
  }
}

@media only screen and (max-width: 767px) {
  .form-area button.serach-btn {
    font-size: 22px;
    padding: 7px 20px;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    margin-top: -12px;
    margin-bottom: 20px;
  }
}

</style>