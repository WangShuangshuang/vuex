<template>
  <div class="hello">
    <h1>MyHello2</h1>
    <p>count: <span class="count">{{ count }}</span></p>
    <button @click="add">Add</button>
    <br><button @click="clear">Clear</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MyHello2',
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods:{
    add(){
      this.$store.commit('increment');
    },
    clear(){
      this.$store.dispatch('clear')
        .then((data) => {
          console.log(data.message);
        })
        .catch((data) => {
          console.log(data.message);
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.count{
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
