<template>
  <div id="Header" v-if="getItem.length != 0">
    <div class="row row_one">
      <div class="col-xl-6 bar_info">
        <div class="row row_two">
          <div class="col-xl-6 text_center_h text_small">
            <i class="far fa-clock"></i>
            {{getItem[0].companyWorkingTime}}
          </div>
          <div class="col-xl-6 mail_text_center text_small">
            <i class="far fa-envelope"></i>
            {{getItem[0].companyEmail}}
          </div>
        </div>
      </div>
      <div class="col-xl-6 bar_icon">
        <div class="row row_thired">
          <div class="col-xl-12 bar_s_icon">
            <a :href="'https://' + getItem[0].FacebookLink">
              <i class="fab fa-facebook-square s_icon"></i>
            </a>
            <a :href="'https://' + getItem[0].InstagramLink">
              <i class="fab fa-instagram-square s_icon"></i>
            </a>
            <a :href="'https://' + getItem[0].GoogleLink">
              <i class="fab fa-google-plus-square s_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr class="hr" />

    <!-- Model Start  -->

    <div>
      <div class="mt-3"></div>

      <!-- <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Search"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        hide-footer
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div>
            <b-input-group size="sm" class="mb-3">
              <b-form-input></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Button" variant="secondary">
                  <i class="fas fa-search"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </form>
      </b-modal>-->
    </div>

    <!-- Model End -->
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      getItem: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.$http.get("/Settings").then(response => {
        //console.log(response.data);
        this.getItem.push(response.data.display[0]);
        //console.log(this.getItem);
      });
    }
  }
};
</script>
<style scoped>
.row_one {
  /* background-color: red; */
  height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(206, 206, 206);
}
.row_two {
  /* background-color: blue; */
  height: 40px;
  margin-top: -12px;
  border-bottom: 1px solid rgb(206, 206, 206);
}
.row_thired {
  /* background-color: green; */
  height: 40px;
  margin-top: -12px;
  border-bottom: 1px solid rgb(206, 206, 206);
}
.hr {
  display: none;
}
.text_small {
  font-size: 12px;
}
.bar_info {
  /* border-bottom: 1px solid rgb(206, 206, 206); */
}
.text_center_h {
  text-align: right;
}
.bar_icon {
  /* border-bottom: 1px solid rgb(206, 206, 206); */
  padding-right: 100px;
}
.bar_s_icon {
  padding-right: 100px;
  text-align: right;
}
.s_icon {
  padding-left: 20px;
  cursor: pointer;
  font-size: 20px;
}
.s_icon:hover {
  color: gray;
}
.s_search_icon {
  margin-top: -12px;
  margin-left: 20px;
  cursor: pointer;
}
.s_search_icon:hover {
  color: gray;
}

@media screen and (max-width: 1024px) {
  .row_one {
    /* background-color: red; */
    height: 40px;
    margin-bottom: 100px;
    border-bottom: none;
    width: 100%;
  }
  .row_two {
    /* background-color: blue; */
    height: 40px;
    margin-top: -30px;
    border-bottom: none;
  }
  .row_thired {
    /* background-color: green; */
    height: 40px;
    margin-top: 10px;
    border-bottom: none;
  }
  .s_icon {
    /* color: red; */
    font-size: 22px;
  }
  .s_search_icon {
    /* color: blue;
    background-color: #74b9ff; */
    /* margin-left:  75%; */
    /* font-size: 12px; */
    margin-right: -50px;
    float: right;
    padding: 5px;
  }
  .bar_s_icon {
    padding-right: 0px;
  }
  .text_center_h {
    text-align: center;
  }
  .mail_text_center {
    text-align: center;
  }
  .bar_icon {
    top: -50px;
    border: none;
  }

  .bar_info {
    top: 70px;
  }
  .s_icon {
    padding-left: 20px;
    cursor: pointer;
  }
  .bar_s_icon {
    margin-left: 50px;
    /* background-color: green; */
    text-align: left;
  }
}
</style>