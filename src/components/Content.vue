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

      <div>
          {{name}}
      </div>

      <div>
          <button @click="changeName()" v-bind:disabled="btnState">Change Name</button>
          <div>
              {{ btnState ? 'The button is disabled' : 'The button is active'}}
          </div>
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
            name: 'Rene',
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
        }
    }
}

</script>
<style>
  .w-130{
    width: 130px;
  }
</style>