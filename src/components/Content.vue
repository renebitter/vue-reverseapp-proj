<template>
  <div class="card-body">
    <!--<h2>{{ msg }}</h2>-->
    <div class="text-left">

      <ul>
        <li v-for="(item, index) in items">
          <a href="#" class="btn btn-outline-dark mr-1 mb-1" @click="reverseMessage(index)">{{ item.message }}</a>
          <input class="w-130 float-right" v-model="item.message">
        </li>
      </ul>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Content',
  props: {
    msg: String,
  },
  data:
      function(){
          return {
              items: [
                  { message: 'Foo' },
                  { message: 'Bar' },
                  { message: 'Ipsum' },
                  { message: 'Lorem' }
              ]
          }

  },
  methods: {
      reverseMessage: function (index) {
          this.items[index].message = this.items[index].message.split('').reverse().join('')
          console.log(this.items[index].message)
      }
  }
}

</script>
<style>
  .w-130{
    width: 130px;
  }
</style>