<template>
    <div id="process" class="ctrl-box">
     <!-- <img alt="Vue logo" src="./assets/V.png"> -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="side-left-box">
      <h1>风格</h1>
      <div class="style-list-box"><!-- 风格选择 -->
          <a v-for="_style in styles "
            v-bind:key="_style.name"
            :class="{active:_style.name === style.name}"
             @click="setStyle(_style)"><!-- 从style中遍历风格变量-->
            <span class="name" v-text="_style.name"></span>
            <span class="cor vote"></span><!-- 每种风格后面都有一个心形 -->
           </a>
      </div>
    </div>
    <div class="side-right-box">
      <div class="btn-box"><!--按钮区域-->
        <a class="btn big wire" @click="chooseImage">打开图像</a>
        <button @click="output()" class="btn big">导出图像</button>
      </div>
      <parameterSetting :para=style @updateStyle="updateStyle"></parameterSetting>
    </div> 
    <div class="output">
			<img :src="src" v-if="src" :data-wide="style.wide">
	</div>
    <div class="img-list">
      <img v-for="src,index in images"
          v-bind:src="src"
          crossOrigin="Anonymous"
          @click="setImageAndDraw"
          @load="index===0&&setImageAndDraw($event)"><!-- 动态加载图片 -->
    </div>
    </div>
</template>

<script>
import {styles} from '../script/styles.js'//导入外部js变量
import {images} from '../script/images.js'//导入外部js变量
import {defaultStyle} from '../script/var.js'//导入外部js变量
import {process} from '../script/process.js'//导入外部函数
import {chooseImage} from '../script/event.js'//导入外部函数
import parameterSetting from '../components/parameter-setting.vue'
const data = {
    src:'',
    img:null,
    style:{//当前风格
        ...defaultStyle,//将数组表达式或者string在语法层面展开
        ...styles[0]
    },
    styles,//风格集合
    images //图片集合
};

const deepCopy = o=>JSON.parse(JSON.stringify(o));
export default 
{
    name: 'process',
    data: function () {
        return data;
    },
    components:{
      parameterSetting,
    },
    methods: {
        setStyle(style){
          this.style = deepCopy({
            ...defaultStyle,//未在style中定义的变量皆为默认值
            ...style
          });//深拷贝
          this.process();
        },
        output(){
          const a = document.createElement('a');
          a.href = this.src;
          a.download = `${+Date.now()}.jpg`;
          a.click();
        },
        chooseImage(){
          chooseImage(img=>{
              this.img = img;
              this.src = img.src;
              this.process();
          });
        },
        setImageAndDraw(e){
          let img = e.target;
          if(/!w300/.test(img.src)){
            img.onload = ()=>{
              this.img = e.target;
              this.process();
            };
            img.src = img.src.replace(/!w300$/,'!h480')
          }else{
            this.img = e.target;
            this.process();
          }
        },
        process(){
          process(this.img,this.style,src=>{
            this.src = src;
            console.log(this.style.ratio);
          });
        },
        updateStyle(para){
          this.style = para;
          this.process();
          
        }
    },
    
}

</script>
<style scoped>

</style>
