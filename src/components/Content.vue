<template>
  <div class="card-body">
    <h2>{{ msg }}</h2>
      <div>
          <h3 class="mb-3 text-left small">2 Objects 1 Function (click to reverse)</h3>
          <div class="text-left">
              <h4 class="mb-3 small">Object 1</h4>
              <ul>
                  <li v-for="(data, index) in items" :key='index'>
                      <button class="btn btn-outline-dark mr-1 mb-1" @click="reverseMessage(items, index)">{{ data.message }}</button>
                      <input class="w-130 float-right" v-model="data.message">
                  </li>
              </ul>
          </div>

          <div class="text-left">
              <h4 class="mb-3 small">Object 2</h4>
              <ul>
                  <li v-for="(data, index) in array2" :key='index'>
                      <button class="btn btn-outline-dark mr-1 mb-1" @click="reverseMessage(array2, index)">{{ data.message }}</button>
                      <input class="w-130 float-right" v-model="data.message">
                  </li>
              </ul>
          </div>
      </div>

      <div class="input-list">
          <h3 class="text-left small">VeeValidate Plugin</h3>
          <form @submit.prevent="addSkill">
              <input class="mb-3" type="text" placeholder="Enter Your Skill..." autocomplete="off" v-model="skill" v-validate="'min:3|max:7'" name="skill">
              <h4 class="text-left small">Transition Animation</h4>
              <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
              </transition>


              <!--<input type="checkbox" id="checkbox" v-model="checked">-->
              <ul>
                  <h4 class="text-left small">Transition-Group Animation</h4>
                  <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" key="i">
                      <!--using :key'index' will not work-->
                      <li v-for="(data, index) in skills" :key='index + 1'>
                          {{data.skill}}
                          <i class="fa fa-minus-circle float-right" @click="remove(index)"></i>
                      </li>
                  </transition-group>
              </ul>
          </form>
      </div>

      <div>
          <h3 class="text-left small">Variable</h3>
          {{name}}
      </div>

      <div>
          <!--Button validation without VeeValidate Plugin-->
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
    props: {
      msg: String,
    },
    data() {
        return {
            skill: "",
            skills: [
                {"skill": "Skill 1"},
                {"skill": "Skill 2"}
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
            // console.log(array[index].message)
        },
        changeName: function () {
          // console.log("Change Name")
        },
        enableButton: function () {
            //
            // if(#checkbox2 = checked){
            //     return btnState = false;
            // } else {
            //     return btnState = true;
            // }
            // console.log("Checkbox")
        },
        addSkill(){
            this.$validator.validateAll().then((result) => {
                if (result){
                    this.skills.push({skill: this.skill})
                    this.skill = '';
                    // console.log("addSkill: " + this.checked)
                }else{
                    // console.log("not valid")
                }
            })

        },
        remove(id){
            this.skills.splice(id,1);
        }
    }
}

</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    .w-130{
    width: 130px;
    }

    .input-list ul li {
      padding: 20px;
      font-size: 1.3em;
      background-color: #f8f8f8;
      border-left: 5px solid #42b983;
      margin-bottom: 2px;
      color: #3E5252;
      text-align:left;
    }

    .card {
      box-shadow: 0px 0px 40px lightgray;
    }

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