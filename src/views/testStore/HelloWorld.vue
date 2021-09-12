<template>
  <div class="hello">
    <div>
      <h1>{{ this.$store.state.count }}</h1>
      <h1>{{ this.$store.state.counts }}</h1>
     </div>
    <div>
      <button @click="addfn()">增加aciotn</button>
      <button @click="lessfn()">减少aciotn</button> 
      <button @click="addfns()">增加mutations</button>
      <button @click="lessfns()">减少mutations</button> 
    </div>
    <p class="positos">
      <a @click="lessfnss">返回</a>
      <a id="visiblea" @click="lessfnss">禁止返回</a>
    </p>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
        return {
            dataObject:{
                input:'test',
                numinput:'6',
                dynamicId:'666',
                textarea:'8',
                checked:'true',
                checkedes:['teemo'],
                radio:'One',
                selected:'AD',
                selecteds:['AD'],
                toggle:'1'
            },
        };
    },
    mounted() {
        this.$store.commit(`setEms`, this.dataObject);     
    },
  methods:{
    addfn(){
       //以载荷方式分发
       this.$store.dispatch('addac');
    },
    lessfn(){
       //以对象方式分发
       this.$store.dispatch({type:'lessac'});
    },
    addfns(){
       //提交名为addmu的mutations
       this.$store.commit('addmu');
    },
    lessfns(){
       //提交名为lessmu的mutations
       this.$store.commit('lessmu');
    },
    lessfnss(){
      alert("你小子伽马")
    }
  }
}
</script>
<style>
  .positos{
    text-align: end;
    cursor: pointer;
    text-decoration: none;
  }
  #visiblea{
    pointer-events: none;
    cursor: default;
  }
</style>
