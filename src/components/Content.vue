<template>
  <div class="card-body">
    <!--<h2>{{ msg }}</h2>-->
      <div class="text-left">
          <ul>
              <li v-for="(data, index) in items" :key='index'>
                  <button class="btn btn-outline-dark mr-1 mb-1" @click="reverseMessage(items, index)">{{ data.message }}</button>
                  <input class="w-130 float-right" v-model="data.message">
              </li>
          </ul>
      </div>

      <div class="text-left">
          <ul>
              <li v-for="(data, index) in array2" :key='index'>
                  <button class="btn btn-outline-dark mr-1 mb-1" @click="reverseMessage(array2, index)">{{ data.message }}</button>
                  <input class="w-130 float-right" v-model="data.message">
              </li>
          </ul>
      </div>

      <div class="input-list">
          <form @submit.prevent="addSkill">
              <input type="text" placeholder="Enter Your Skill..." v-model="skill" v-validate="'min:5'" name="skill">

                  <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                      <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
                  </transition>


              <!--<input type="checkbox" id="checkbox" v-model="checked">-->
              <ul>
                  <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                      <!--using :key'index' will not work-->
                      <li v-for="(data, index) in skills" :key='data'>{{data.skill}}</li>
                  </transition-group>
              </ul>
          </form>
      </div>

      <div>
          {{name}}
      </div>

      <div>

          <!--<div class="input-group mb-3">-->
              <!--<div class="input-group-append">-->
                  <!--<div class="input-group-text">-->
                      <!--<button @click="changeName()" v-bind:disabled="btnState">Change Name</button>-->
                      <!--<input @click="enableButton" type="checkbox" id="checkbox2" v-model="checked">-->
                      <!--<label for="checkbox2">{{ checked }}</label>-->
                      <!--{{ btnState ? 'The button is disabled' : 'The button is active'}}-->
                      <!--&lt;!&ndash;v-if="this.checked ? btnState = false : btnState = true"&ndash;&gt;-->
                  <!--</div>-->
              <!--</div>-->
          <!--</div>-->

      </div>

  </div>
</template>

<script>

export default {
    name: 'Content',
    // props: {
    //   msg: String,
    // },
    data() {
        return {
            skill: "",
            skills: [
                {"skill": "Vue.js"},
                {"skill": "Frontend Developer"}
            ],
            name: 'Rene',
            checked: false,
            btnState: true,
            items: [
                { message: 'Foo' },
                { message: 'Bar' },
                { message: 'Ipsum' },
                { message: 'Lorem' }
            ],
            array2: [
                { message: '12' },
                { message: '21' },
                { message: '32' },
                { message: '42' }
            ]
        }

    },
    methods: {
        reverseMessage: function (array, index) {
            array[index].message = array[index].message.split('').reverse().join('');
            console.log(array[index].message)
        },
        changeName: function () {
          console.log("Change Name")
        },
        enableButton: function () {
            //
            // if(#checkbox2 = checked){
            //     return btnState = false;
            // } else {
            //     return btnState = true;
            // }
            console.log("Checkbox")
        },
        addSkill(){
            this.$validator.validateAll().then((result) => {
                if (result){
                    this.skills.push({skill: this.skill})
                    this.skill = '';
                    console.log("addSkill: " + this.checked)
                }else{
                    console.log("not valid")
                }
            })

        }
    }
}

</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

    .w-130{
    width: 130px;
    }

    /*ul {*/
      /*margin: 0;*/
      /*padding: 0;*/
      /*list-style-type: none;*/
    /*}*/

    .input-list ul li {
      padding: 20px;
      font-size: 1.3em;
      background-color: #E0EDF4;
      border-left: 5px solid #3EB3F6;
      margin-bottom: 2px;
      color: #3E5252;
    }

    .input-list p {
      text-align:center;
      padding: 30px 0;
      color: gray;
    }

    .card {
      box-shadow: 0px 0px 40px lightgray;
    }

    /*.alert {*/
      /*background: #fdf2ce;*/
      /*font-weight: bold;*/
      /*display: inline-block;*/
      /*padding: 5px;*/
      /*margin-top: -20px;*/
    /*}*/

    .alert-in-enter-active {
      animation: bounce-in .5s;
    }
    .alert-in-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
          transform: scale(0);
      }
      50% {
          transform: scale(1.5);
      }
      100% {
          transform: scale(1);
      }
    }

</style>