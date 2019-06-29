import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App.vue'

Vue.config.productionTip = false

const store = new Vuex.Store({
  /* 1/4 state：数据 */
  state: {
    count: 1,
    price: 100,
  },

  /* 2/4 getters：store的计算属性 */
  getters: {
    cost(state){ // state参数必须有
      return state.count * state.price;
    },
    memberCost(state, getters){ // state, getters参数都必须有
      return getters.cost * 0.85;
    },
    // 返回值为方法的
    discountCost: (state) => (discount) => { return state.count * state.price * discount }
  },

  /* 3/4 mutations：改变数据的同步方法 */
  mutations: {
    increment(state){
      state.count++
    },
    reduce(state){
      state.count--
    },
    clear(state){
      state.count = 0;
    },
    // 附带参数的
    incrementSome(state, payload){
      state.count += payload.amount;
    },
  },

  /* 4/4 actions: 以提交mutation的形式改变数据的异步方法 */
  actions: {
    incrementAsync(context, options){ // context对象与store实例具有相同的方法和属性，但不是后者本身
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('incrementSome', options);
          resolve({ message: 'add sucess' });
        }, 1000);
      })
    },
    clear({ commit }){
      return new Promise((reject, resolve) => {
        var res = confirm('Sure to clear ?');
        if(res){
          commit('clear');
          resolve({ message: 'clear success' })
        } else {
          reject({ message: 'would not clear' })
        }
      })
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


