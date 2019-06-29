<template>
  <div class="hello">
    <h1>MyHello1</h1>
    <p>
      COUNT: <span class="count">{{ count }}</span> * PRICE: {{ price }}
      <br>总价：{{ cost }} 
      <br>会员价：{{ memberCost }} 
      <br>折扣价：<input class="input" v-model="discount" /> {{ discountCost(discount) }}
    </p>
    <button @click="add">Add</button>
    <br><button @click="addTwo">AddTwo</button>
    <br><button @click="addAsync">AddAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyHello1',
  data(){
    return {
      text: 'abcdef',
      discount: 0.5,
    }
  },
  computed: {
    textLength(){
      return this.text.length;
    },
    ...mapState([
      'count', 'price',
    ]),
    ...mapGetters([
      'cost', 'memberCost', 'discountCost'
    ]),
    ...mapActions([
      'incrementAsync'
    ])
  },
  methods:{
    add(){
      this.$store.commit('increment');
    },
    addTwo(){
     this.$store.commit({
       type: 'incrementSome',
       amount: 2,
     })
     // 等效写法： 
     // this.$store.commit('incrementSome', { amount: 2 })
    },
    addAsync(){
      this.$store.dispatch('incrementAsync', { amount: 10 })
        .then((data) => { // then()的参数为resolve方法的具体实现
          console.log(data.message);
        })
        .catch((data) => { // catch()的参数为reject方法的具体实现
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
.input{
  width:30px;
  height:30px;
  line-height:30px;
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
