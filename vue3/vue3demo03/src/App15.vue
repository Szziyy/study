<template>
  <!-- v-model -->
  <div>
    <input v-model="serchValue" type="text" @keydown.enter="searchEvent">
    <h1>{{serchValue}}</h1>
    <textarea v-model="lineValue"></textarea>
    <h1>{{ lineValue }}</h1>
    <!-- 表单获取的是否选中内容 -->
    <input type="checkbox" name="like" v-model="checked" value="123"/>
    <h1>{{checked}}</h1>

    <input type="checkbox" name="likes" v-model="fruits" value="香蕉"/>
    <input type="checkbox" name="likes" v-model="fruits" value="菠萝"/>
    <input type="checkbox" name="likes" v-model="fruits" value="雪梨"/>
    <input type="checkbox" name="likes" v-model="fruits" value="芒果"/>
    <h1>{{ fruits }}</h1>

    <!-- 单选框 -->
    <input type="radio" name="sex" v-model="picked" value="man">
    <input type="radio" name="sex" v-model="picked" value="women">
    <h1>{{ picked }}</h1>

    <!-- 选项框 -->
    <select name="city" v-model="city">
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="上海">上海</option>
      <option value="福州">福州</option>
    </select>
    <h1>{{ city }}</h1>

    <!-- 选项框 -->
    <select name="city" v-model="citys" multiple>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="上海">上海</option>
      <option value="福州">福州</option>
    </select>
    <h1>{{ citys }}</h1>

    <!-- 表单获取的是否选中内容 -->
    <input type="checkbox" name="like" v-model="checked1" true-value="喜欢" false-value='不喜欢'/>
    <h1>{{checked1}}</h1>

    <!-- 修饰符 -->
    <!-- .lazy/input变为change事件改变值 -->
    <input v-model.lazy="serchValue" type="text" @keydown.enter="searchEvent">
    <h1>{{serchValue}}</h1>

    <!-- number修饰符转为数字 -->
    <input v-model.number="serchValue" type="text" @keydown.enter="searchEvent">
    <h1>{{serchValue}}</h1>

     <!-- trim修饰符去掉空格 -->
    <input v-model.trim="serchValue" type="text" @keydown.enter="searchEvent">
    <h1>{{serchValue}}</h1>
  </div>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      serchValue:'',
      lineValue:'',
      checked:false,
      fruits:[],
      picked:'',
      city:'',
      citys:[],
      checked1:''

    }
  },
  watch:{
  },
  // 方法
  methods:{
    addEvent:function(){
      this.num++
    },
    addNumEvent:function(number){
      console.log(number);
      this.num+=number
    },
    addNumEvent1:function(number,event){
      console.log(event);
      console.log(number);
      this.num+=number
    },
    changeColor:function(){
      this.color = 'blue';
    },
    searchEvent:function(){
      console.log('执行了搜索的事件')
    }
  }
}
</script>

<style>
</style>
