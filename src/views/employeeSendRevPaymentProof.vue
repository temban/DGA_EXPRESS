<template>
  <div class="padding">
    <div class="card user-card-full">
      <div class="row m-l-0 m-r-0">
        <div class="col-sm-5 bg-c-lite-green user-profile">
          <div class="card-block text-center text-white">
            <div id="block1">
              <div class="m-b-25">
                <img
                  src="@/assets/img/logo.png"
                  class="img-radius"
                  alt="user-profile-Image"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-7"> 
          <div class="card-block">
            <div id="block2">
              <div class="wrapper-2">
                <h4>Envoi des preuves de paiement!</h4>

                <div class="container d-flex justify-content-center mt-5">
                  <div class="card1">
                    <div class="top-container">
                      <img
                        v-if="profile === ''"
                        src="@/assets/img/hotels/59710428.png"
                        class="img-fluid profile-image"
                        width="70"
                      />
                      <img
                        v-else
                        v-bind:src="urel + '/' + profile"
                        class="img-fluid profile-image"
                        width="70"
                      />
                      <div class="ml-3">
                        <h2 class="name">{{ firstname + " " + lastname }}</h2>
                        <p class="mail">{{ email }}</p>
                      </div>
                    </div>
                    <div
                      class="middle-container d-flex justify-content-between align-items-center mt-3 p-0"
                    >
                      <div class="recent-border">
                        <span style="position: relative; margin-left: 6px">
                          Method de Paiement:
                        </span>
                      </div>
                      <i
                        class="fa fa-credit-card"
                        style="font-size: 28px; color: blue; margin-left: 150px"
                        v-if="paymentMethod.length >= 19"
                      ></i>
                      <i
                        class="fa fa-mobile"
                        style="
                          font-size: 32px;
                          color: orangered;
                          margin-left: 150px;
                        "
                        v-else
                      ></i
                      ><span class="recent-orders">
                        {{ this.paymentMethod }}</span
                      >
                      <h2 class="d-flex flex-column text-right mr-">
                        <a
                          v-if="cop"
                          style="position: relative; margin-right: 10px"
                          ><i
                            v-on:click="copyText()"
                            class="fa fa-copy mye"
                            style="font-size: 28px; color: green"
                          ></i>
                        </a>

                        <a
                          style="
                            position: relative;
                            margin-right: 10px;
                            color: gray;
                          "
                          v-else
                          ><i
                            v-on:click="copyText()"
                            class="fa fa-copy mye"
                            style="font-size: 28px"
                          ></i>
                        </a>
                      </h2>
                    </div>

                    <!-- Upload Area -->
                    <div id="uploadArea" class="upload-area">
                      <!-- Header -->
                      <div class="upload-area__header" style="display: none">
                        <h1 class="upload-area__title">Upload your file</h1>
                        <p class="upload-area__paragraph">
                          File should be an image
                          <strong class="upload-area__tooltip">
                            Like
                            <span class="upload-area__tooltip-data"></span>
                            <!-- Data Will be Comes From Js -->
                          </strong>
                        </p>
                      </div>
                      <!-- End Header -->

                      <!-- Drop Zoon -->
                      <div
                        id="dropZoon"
                        class="upload-area__drop-zoon drop-zoon"
                      >
                        <span class="drop-zoon__icon">
                          <i class="fa fa-image" style="font-size: 88px"></i>
                        </span>
                        <p class="drop-zoon__paragraph">
                          Drop your file here or Click to browse
                        </p>
                        <span id="loadingText" class="drop-zoon__loading-text"
                          >Please Wait</span
                        >
                        <img
                          src=""
                          alt="Preview Image"
                          id="previewImage"
                          class="drop-zoon__preview-image"
                          draggable="false"
                        />
                        <input
                          type="file"
                          id="fileInput"
                          class="drop-zoon__file-input"
                          accept="image/*"
                        />
                      </div>
                      <!-- End Drop Zoon -->

                      <!-- File Details -->
                      <div
                        id="fileDetails"
                        class="upload-area__file-details file-details"
                      >
                        <h3 class="file-details__title">Uploaded File</h3>

                        <div id="uploadedFile" class="uploaded-file">
                          <div class="uploaded-file__icon-container">
                            <i
                              class="bx bxs-file-blank uploaded-file__icon"
                            ></i>
                            <span class="uploaded-file__icon-text"></span>
                            <!-- Data Will be Comes From Js -->
                          </div>

                          <div
                            id="uploadedFileInfo"
                            class="uploaded-file__info"
                          >
                            <span class="uploaded-file__name">Proejct 1</span>
                            <span class="uploaded-file__counter">0%</span>
                          </div>
                        </div>
                      </div>
                      <!-- End File Details -->
                    </div>
                    <!-- End Upload Area -->
                  </div>
                </div>
              </div>
            </div>
            <div class="wrapper-1"></div>

            <div style="position: relative; display: flex">
              <a style="position: relative; margin-left: 100px" @click="Home()">
                <button class="go-home">
                  <i class="fa fa-home" aria-hidden="true"></i> Acceuil
                  <div
                    style="position: relative; margin-left: 10px"
                    class="spinner-border text-light spinner-border-sm"
                    role="status"
                    v-if="login1"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
              </a>

              <div
                style="
                  position: relative;
                  margin-left: 100px;
                  margin-top: -40px;
                "
              >
                <div class="flex">
                  <a @click="sendProof()" class="btn btn-download"
                    >Envoyer
                    <div
                      style="position: relative; margin-left: 10px"
                      class="spinner-border text-light spinner-border-sm"
                      role="status"
                      v-if="login"
                    >
                      <span class="sr-only">Loading...</span>
                    </div></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      urel: this.$url,
      login1: false,
      login: false,
      cop: false,
      Revid: JSON.parse(localStorage.getItem("sendPaymentProof")).id,
      id: JSON.parse(localStorage.getItem("sendPaymentProof")).announcementDto
        .userDto.id,
      lastname: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.userDto.lastName,
      firstname: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.userDto.firstName,
      email: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.userDto.email,
      paymentMethod: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.paymentMethod,
      profile: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.userDto.profileimgage,
      departuretown: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.departuretown,
      destinationtown: JSON.parse(localStorage.getItem("sendPaymentProof"))
        .announcementDto.destinationtown,
      payProofFile: "",
    };
  },
  components: {},
  mounted() {
    $("body").on("change", "#fileInput", function (evt) {
      var currentdate = new Date();

      var date =
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " " +
        " " +
        " " +
        currentdate.getDate() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getFullYear();
      var name =
        JSON.parse(localStorage.getItem("sendPaymentProof")).announcementDto
          .userDto.lastName +
        " " +
        JSON.parse(localStorage.getItem("sendPaymentProof")).announcementDto
          .userDto.firstName;
      var opration = "Paiement de Voyage";
      const input = evt.currentTarget;
      const previousFile = input.files[0];
      //   const oldfilename = input.files[0].name;
      const newName = "_" + name + "_" + date + "_" + opration;
      const newFile = new File([previousFile], newName);

      // hack to update the selected file
      const dT = new DataTransfer();
      dT.items.add(newFile);
      input.files = dT.files;
      console.log("pay file: " + input.files.item(0).name);
    });

    // Design By
    // - https://dribbble.com/shots/13992184-File-Uploader-Drag-Drop

    // Select upload-area
    const uploadArea = document.querySelector("#uploadArea");

    // Select Drop-Zoon Area
    const dropZoon = document.querySelector("#dropZoon");

    // Loading Text
    const loadingText = document.querySelector("#loadingText");

    // Slect File Input
    const fileInput = document.querySelector("#fileInput");

    // Select Preview Image
    const previewImage = document.querySelector("#previewImage");

    // File-Details Area
    const fileDetails = document.querySelector("#fileDetails");

    // Uploaded File
    const uploadedFile = document.querySelector("#uploadedFile");

    // Uploaded File Info
    const uploadedFileInfo = document.querySelector("#uploadedFileInfo");

    // Uploaded File  Name
    const uploadedFileName = document.querySelector(".uploaded-file__name");

    // Uploaded File Icon
    const uploadedFileIconText = document.querySelector(
      ".uploaded-file__icon-text"
    );

    // Uploaded File Counter
    const uploadedFileCounter = document.querySelector(
      ".uploaded-file__counter"
    );

    // ToolTip Data
    const toolTipData = document.querySelector(".upload-area__tooltip-data");

    // Images Types
    const imagesTypes = ["jpeg", "png", "svg", "gif"];

    // Append Images Types Array Inisde Tooltip Data
    toolTipData.innerHTML = [...imagesTypes].join(", .");

    // When (drop-zoon) has (dragover) Event
    dropZoon.addEventListener("dragover", function (event) {
      // Prevent Default Behavior
      event.preventDefault();

      // Add Class (drop-zoon--over) On (drop-zoon)
      dropZoon.classList.add("drop-zoon--over");
    });

    // When (drop-zoon) has (dragleave) Event
    dropZoon.addEventListener("dragleave", function (event) {
      // Remove Class (drop-zoon--over) from (drop-zoon)
      dropZoon.classList.remove("drop-zoon--over");
      console.log(event);
    });

    // When (drop-zoon) has (drop) Event
    dropZoon.addEventListener("drop", function (event) {
      // Prevent Default Behavior
      event.preventDefault();

      // Remove Class (drop-zoon--over) from (drop-zoon)
      dropZoon.classList.remove("drop-zoon--over");

      // Select The Dropped File
      const file = event.dataTransfer.files[0];

      // Call Function uploadFile(), And Send To Her The Dropped File :)
      uploadFile(file);
    });

    // When (drop-zoon) has (click) Event
    dropZoon.addEventListener("click", function (event) {
      // Click The (fileInput)
      fileInput.click();
      console.log(event);
    });

    // When (fileInput) has (change) Event
    fileInput.addEventListener("change", function (event) {
      // Select The Chosen File
      const file = event.target.files[0];

      // Call Function uploadFile(), And Send To Her The Chosen File :)
      uploadFile(file);
    });

    // Upload File Function
    function uploadFile(file) {
      // FileReader()
      const fileReader = new FileReader();
      // File Type
      const fileType = file.type;
      // File Size
      const fileSize = file.size;

      // If File Is Passed from the (File Validation) Function
      if (fileValidate(fileType, fileSize)) {
        // Add Class (drop-zoon--Uploaded) on (drop-zoon)
        dropZoon.classList.add("drop-zoon--Uploaded");

        // Show Loading-text
        loadingText.style.display = "block";
        // Hide Preview Image
        previewImage.style.display = "none";

        // Remove Class (uploaded-file--open) From (uploadedFile)
        uploadedFile.classList.remove("uploaded-file--open");
        // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
        uploadedFileInfo.classList.remove("uploaded-file__info--active");

        // After File Reader Loaded
        fileReader.addEventListener("load", function () {
          // After Half Second
          setTimeout(function () {
            // Add Class (upload-area--open) On (uploadArea)
            uploadArea.classList.add("upload-area--open");

            // Hide Loading-text (please-wait) Element
            loadingText.style.display = "none";
            // Show Preview Image
            previewImage.style.display = "block";

            // Add Class (file-details--open) On (fileDetails)
            fileDetails.classList.add("file-details--open");
            // Add Class (uploaded-file--open) On (uploadedFile)
            uploadedFile.classList.add("uploaded-file--open");
            // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
            uploadedFileInfo.classList.add("uploaded-file__info--active");
          }, 500); // 0.5s

          // Add The (fileReader) Result Inside (previewImage) Source
          previewImage.setAttribute("src", fileReader.result);

          // Add File Name Inside Uploaded File Name
          uploadedFileName.innerHTML = file.name;

          // Call Function progressMove();
          progressMove();
        });

        // Read (file) As Data Url
        fileReader.readAsDataURL(file);
      } else {
        // Else

        this; // (this) Represent The fileValidate(fileType, fileSize) Function
      }
    }

    // Progress Counter Increase Function
    function progressMove() {
      // Counter Start
      let counter = 0;

      // After 600ms
      setTimeout(() => {
        // Every 100ms
        let counterIncrease = setInterval(() => {
          // If (counter) is equle 100
          if (counter === 100) {
            // Stop (Counter Increase)
            clearInterval(counterIncrease);
          } else {
            // Else
            // plus 10 on counter
            counter = counter + 10;
            // add (counter) vlaue inisde (uploadedFileCounter)
            uploadedFileCounter.innerHTML = `${counter}%`;
          }
        }, 100);
      }, 600);
    }

    // Simple File Validate Function
    function fileValidate(fileType, fileSize) {
      // File Type Validation
      let isImage = imagesTypes.filter(
        (type) => fileType.indexOf(`image/${type}`) !== -1
      );

      // If The Uploaded File Type Is 'jpeg'
      if (isImage[0] === "jpeg") {
        // Add Inisde (uploadedFileIconText) The (jpg) Value
        uploadedFileIconText.innerHTML = "jpg";
      } else {
        // else
        // Add Inisde (uploadedFileIconText) The Uploaded File Type
        uploadedFileIconText.innerHTML = isImage[0];
      }

      // If The Uploaded File Is An Image
      if (isImage.length !== 0) {
        // Check, If File Size Is 2MB or Less
        if (fileSize <= 2000000) {
          // 2MB :)
          return true;
        } else {
          // Else File Size
          return alert("Please Your File Should be 2 Megabytes or Less");
        }
      } else {
        // Else File Type
        return alert("Please make sure to upload An Image File Type");
      }
    }

    // :)
  },

  methods: {
    Home() {
      this.login1 = true;
      window.location.href = "/employeeDashboard";
    },
    sendProof() {
      this.login = true;
      let paid = () => {
        var axios = require("axios");

        var config = {
          method: "get",
          url: this.$url + "/traveller/paid?reservationId=" + this.Revid,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            Swal.fire("Succès !", "Fichier envoyé", "success");
            window.location.href = "/employeeAllReservations";
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire("Échec !", "Quelque chose s'est mal passé!", "error");
          });
      };

      this.payProofFile = document.getElementById("fileInput").files[0];
      console.log(" pay new:", this.payProofFile);

      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("file", this.payProofFile);

      var config = {
        method: "put",
        url: this.$url + "/send/bill?userid=" + this.id,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access-token"),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          paid();
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire("Échec !", "Quelque chose s'est mal passé!", "error");
        });
    },

    copyText() {
      navigator.clipboard.writeText(this.paymentMethod).then(() => {
        this.cop = true;
        alert("text copied: " + this.paymentMethod);
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  /* outline:1px solid ;*/
}
body {
  background: #ffffff;
  background: linear-gradient(to bottom, #ffffff 0%, #e1e8ed 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e1e8ed',GradientType=0 );
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.flex {
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square {
  width: 50px;
  height: 50px;
  background-color: #333;
  color: #fafafa;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
}
.square:hover {
  opacity: 0.8;
}
.rectangle {
  background-color: #333;
  margin: 10px 0;
  padding: 20px;
  width: 175px;
  color: #fafafa;
}
.img-absolute {
  position: absolute;
  left: 50%;
  top: 0;
  width: 56%;
}
.btn-download {
  display: inline-block;
  text-decoration: none;
  background-color: salmon;
  color: #fafafa;
  padding: 10px 62px;
  margin: 10px auto;
  box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
}
.btn-download:hover {
  opacity: 0.8;
}

/* NEW STYLE EDIT */
#block1 {
  font-family: "Times New Roman", serif;
}

.wrapper-1 {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper-2 {
  padding: 30px;
  text-align: center;
}
h4 {
  font-family: "Kaushan Script", cursive;
  font-size: 3em;
  letter-spacing: 3px;
  color: #ff8001;
  margin-top: -40px;
  margin-bottom: 60px;
}

.go-home {
  color: #fff;
  background: #58c5ff;
  border: none;
  padding: 10px 50px;
  margin: -40px 0;
  border-radius: 6px;
  height: 45px;
  text-transform: capitalize;
  box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
}

@media (min-width: 360px) {
  h1 {
    font-size: 4.5em;
  }
  .go-home {
    margin-bottom: 20px;
  }
}

@media (min-width: 600px) {
  .content {
    max-width: 1000px;
    margin: 0 auto;
  }
  .wrapper-1 {
    height: initial;
    max-width: 820px;
    box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
  }
}

.padding {
  padding: 3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  position: relative;
  margin-top: -30px;
  margin-bottom: -30px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  height: auto;
  display: "flex";
  justifycontent: "center";
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.user-card-full .user-profile {
  border-radius: 5px 0 0 5px;
  height: auto;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f29263),
    to(#1998ff)
  );
  background: linear-gradient(to right, #1998ff, #75c1ff, #f29263);
}

.user-profile {
  padding: 20px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 5px;
  height: 520px;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #919aa3 !important;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 600;
}

.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card1 {
  position: relative;
  margin-top: -40px;
  background-color: #fff;
  width: 600px;
}
.top-container {
  display: flex;
  align-items: center;
}
.profile-image {
  border-radius: 10px;
  border: 2px solid #00a4fc;
}
.name {
  font-size: 20px;
  font-weight: bold;
  color: #272727;
  position: relative;
  top: 8px;
}
.mail {
  font-size: 14px;
  color: grey;
  position: relative;
  top: 2px;
}
.middle-container {
  background-color: #eee;
  border-radius: 12px;
}
.middle-container:hover {
  border: 1px solid #5957f9;
}
.dollar-div {
  background-color: #5957f9;
  padding: 12px;
  border-radius: 10px;
}
.round-div {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.dollar {
  font-size: 16px !important;
  color: #5957f9 !important;
  font-weight: bold !important;
}

.current-balance {
  font-size: 15px;
  color: #272727;
  font-weight: bold;
}
.amount {
  color: #5957f9;
  font-size: 16px;
  font-weight: bold;
}
.dollar-sign {
  font-size: 16px;
  color: #272727;
  font-weight: bold;
}

.recent-border {
  border-left: 2px solid #5957f9;
  display: flex;
  align-items: center;
}
.recent-border:hover {
  border-bottom: 1px solid #dee2e6 !important;
}

.recent-orders {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin-left: 2px;
}

.wishlist {
  font-size: 16px;
  font-weight: 700;
  color: #272727;
}
.wishlist-border:hover {
  border-bottom: 1px solid #dee2e6 !important;
}
.fashion-studio {
  font-size: 16px;
  font-weight: 700;
  color: #272727;
}
.fashion-studio-border:hover {
  border-bottom: 1px solid #dee2e6 !important;
}

/* General Styles */

* {
  box-sizing: border-box;
}

:root {
  --clr-white: rgb(255, 255, 255);
  --clr-black: rgb(0, 0, 0);
  --clr-light: rgb(245, 248, 255);
  --clr-light-gray: rgb(196, 195, 196);
  --clr-blue: rgb(63, 134, 255);
  --clr-light-blue: rgb(171, 202, 255);
}

/* End General Styles */

/* Upload Area */
.upload-area {
  width: 100%;
  max-width: 36rem;
  height: 330px;
  background-color: var(--clr-white);
  box-shadow: 0 10px 60px rgb(218, 229, 255);
  border: 2px solid var(--clr-light-blue);
  border-radius: 24px;
  padding: 2rem 1.875rem 5rem 1.875rem;
  margin: 0.625rem;
  text-align: center;
}

.upload-area--open {
  /* Slid Down Animation */
  animation: slidDown 500ms ease-in-out;
}

@keyframes slidDown {
  from {
    height: 28.125rem; /* 450px */
  }

  to {
    height: 35rem; /* 560px */
  }
}

/* Header */
.upload-area__header {
}

.upload-area__title {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.3125rem;
}

.upload-area__paragraph {
  font-size: 0.9375rem;
  color: var(--clr-light-gray);
  margin-top: 0;
}

.upload-area__tooltip {
  position: relative;
  color: var(--clr-light-blue);
  cursor: pointer;
  transition: color 300ms ease-in-out;
}

.upload-area__tooltip:hover {
  color: var(--clr-blue);
}

.upload-area__tooltip-data {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -125%);
  min-width: max-content;
  background-color: var(--clr-white);
  color: var(--clr-blue);
  border: 1px solid var(--clr-light-blue);
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  opacity: 0;
  visibility: hidden;
  transition: none 300ms ease-in-out;
  transition-property: opacity, visibility;
}

.upload-area__tooltip:hover .upload-area__tooltip-data {
  opacity: 1;
  visibility: visible;
}

/* Drop Zoon */
.upload-area__drop-zoon {
  position: relative;
  height: 13.25rem; /* 180px */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed var(--clr-light-blue);
  border-radius: 15px;
  margin-top: -1.1875rem;
  cursor: pointer;
  transition: border-color 300ms ease-in-out;
}

.upload-area__drop-zoon:hover {
  border-color: var(--clr-blue);
}

.drop-zoon__icon {
  display: flex;
  font-size: 3.75rem;
  color: var(--clr-blue);
  transition: opacity 300ms ease-in-out;
}

.drop-zoon__paragraph {
  font-size: 1.5375rem;
  font-weight: 600;
  margin: 0;
  color: #bbb;
  margin-top: 0.625rem;
  transition: opacity 300ms ease-in-out;
}

.drop-zoon:hover .drop-zoon__icon,
.drop-zoon:hover .drop-zoon__paragraph {
  opacity: 0.7;
}

.drop-zoon__loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  color: var(--clr-light-blue);
  z-index: 10;
}

.drop-zoon__preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.3125rem;
  border-radius: 10px;
  display: none;
  z-index: 1000;
  transition: opacity 300ms ease-in-out;
}

.drop-zoon:hover .drop-zoon__preview-image {
  opacity: 0.8;
}

.drop-zoon__file-input {
  display: none;
}

/* (drop-zoon--over) Modifier Class */
.drop-zoon--over {
  border-color: var(--clr-blue);
}

.drop-zoon--over .drop-zoon__icon,
.drop-zoon--over .drop-zoon__paragraph {
  opacity: 0.7;
}

/* (drop-zoon--over) Modifier Class */
.drop-zoon--Uploaded {
}

.drop-zoon--Uploaded .drop-zoon__icon,
.drop-zoon--Uploaded .drop-zoon__paragraph {
  display: none;
}

/* File Details Area */
.upload-area__file-details {
  height: 0;
  visibility: hidden;
  opacity: 0;
  text-align: left;
  transition: none 500ms ease-in-out;
  transition-property: opacity, visibility;
  transition-delay: 500ms;
}

/* (duploaded-file--open) Modifier Class */
.file-details--open {
  height: auto;
  visibility: visible;
  opacity: 1;
}

.file-details__title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--clr-light-gray);
}

/* Uploaded File */
.uploaded-file {
  display: flex;
  align-items: center;
  padding: 0.625rem 0;
  visibility: hidden;
  opacity: 0;
  transition: none 500ms ease-in-out;
  transition-property: visibility, opacity;
}

/* (duploaded-file--open) Modifier Class */
.uploaded-file--open {
  visibility: visible;
  opacity: 1;
}

.uploaded-file__icon-container {
  position: relative;
  margin-right: 0.3125rem;
}

.uploaded-file__icon {
  font-size: 3.4375rem;
  color: var(--clr-blue);
}

.uploaded-file__icon-text {
  position: absolute;
  top: 1.5625rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--clr-white);
}

.uploaded-file__info {
  position: relative;
  top: -0.3125rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.uploaded-file__info::before,
.uploaded-file__info::after {
  content: "";
  position: absolute;
  bottom: -0.9375rem;
  width: 0;
  height: 0.5rem;
  background-color: #ebf2ff;
  border-radius: 0.625rem;
}

.uploaded-file__info::before {
  width: 100%;
}

.uploaded-file__info::after {
  width: 100%;
  background-color: var(--clr-blue);
}

/* Progress Animation */
.uploaded-file__info--active::after {
  animation: progressMove 800ms ease-in-out;
  animation-delay: 300ms;
}

@keyframes progressMove {
  from {
    width: 0%;
    background-color: transparent;
  }

  to {
    width: 100%;
    background-color: var(--clr-blue);
  }
}

.uploaded-file__name {
  width: 100%;
  max-width: 6.25rem; /* 100px */
  display: inline-block;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.uploaded-file__counter {
  font-size: 1rem;
  color: var(--clr-light-gray);
}
</style>
