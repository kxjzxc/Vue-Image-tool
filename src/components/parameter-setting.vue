<template>
  <div class="style">
    <div class="body introduction group"><!--项目说明-->
      <h2>在线图像处理工具</h2>
      <p>风格化影像后期工具。</p>
      <p>
        如需高质量影像，可勾选
        <!-- <label><input type="checkbox" v-model="style.sizeOrigin">原始尺寸处理</label> -->
      </p>
    </div>
    <div class="body">
      <div class="group"><!--基础设置-->
        <div class="head">
          <h3>基礎設置</h3>
        </div>
        <div class="body">
          <div class="label-box">
            <div class="head">
              <b>画面亮度</b>
              <span v-text="para.light"></span>
            </div>
            <input type="range" v-model.number="para.light"  min="0" max="4" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>画面反差</b>
              <span v-text="para.contrast"></span>
            </div>
            <input type="range" v-model.number="para.contrast"  min="0" max="4" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>暗部褪色</b>
              <span v-text="para.darkFade"></span>
            </div>
            <input type="range" v-model.number="para.darkFade"  min="0" max="128" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>亮部褪色</b>
              <span v-text="para.brightFade"></span>
            </div>
            <input type="range" v-model.number="para.brightFade"  min="0" max="128" step="1" @change="setStyle">
          </div>
        </div>
      </div>
      <div class="group"><!--顏色設置-->
        <div class="head">
          <h3>顏色設置</h3>
        </div>
        <div class="body">
          <div class="label-box">
            <div class="head">
              <b>紫鲜艳度</b>
              <span v-text="para.vividU"></span>
            </div>
            <input type="range" v-model.number="para.vividU" min=".1" max="4" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>青鲜艳度</b>
              <span v-text="para.vividV"></span>
            </div>
            <input type="range" v-model.number="para.vividV" min=".1" max="4" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>紫色偏移</b>
              <span v-text="para.shiftU"></span>
            </div>
            <input type="range" v-model.number="para.shiftU" min="-200" max="200" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>青色偏移</b>
              <span v-text="para.shiftV"></span>
            </div>
            <input type="range" v-model.number="para.shiftV" min="-200" max="200" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>色彩断层</b>
              <span v-text="para.level"></span>
            </div>
            <input type="range" v-model.number="para.level"  min="1" max="255" step="1" @change="setStyle">
          </div>

        </div>
      </div>
      <div class="group"><!--效果設置-->
        <div class="head">
          <h3>效果設置</h3>
        </div>
        <div class="body">

          <div class="label-box">
            <div class="head">
              <b>横向偏移</b>
              <span v-text="para.shiftX"></span>
            </div>
            <input type="range" v-model.number="para.shiftX" min="0" max="1000" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>纵向偏移</b>
              <span v-text="para.shiftY"></span>
            </div>
            <input type="range" v-model.number="para.shiftY" min="0" max="1000" step="1" @change="setStyle">
          </div>


          <div class="label-box">
            <div class="head">
              <b>信息置换</b>
              <span v-text="para.replace"></span>
            </div>
            <input type="range" v-model.number="para.replace" min="0" max="3" step="1" @change="setStyle">
          </div>
          <!--
          <div class="label-box">
            <div class="head">
              <b>信号偏移</b>
              <span v-text="para.yuv420Noise"></span>
            </div>
            <input type="range" v-model.number="para.yuv420Noise" min="1" max="2" step="0.01">
          </div>
          -->
          <!--<div class="label-box">-->
            <!--<div class="head">-->
              <!--<b>整倍偏移</b>-->
              <!--<span v-text="para.yuv420Noise"></span>-->
            <!--</div>-->
            <!--<input type="range" v-model.number="para.yuv420Noise" min="1" max="8" step="1">-->
          <!--</div>-->

          <h4>隔行扫描</h4>

          <div class="label-box">
            <div class="head">
              <b>隔行扫描</b>
              <span v-text="para.interlaced"></span>
            </div>
            <input type="range" v-model.number="para.interlaced" min="0" max="8" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>隔行扫描周期</b>
              <span v-text="para.interlacedLine"></span>
            </div>
            <input type="range" v-model.number="para.interlacedLine"
                    min="2" max="8" step="2">
          </div>

          <div class="label-box">
            <div class="head">
              <b>隔行扫描亮度差</b>
              <span v-text="para.interlacedLight"></span>
            </div>
            <input type="range" v-model.number="para.interlacedLight" min="0" max="1" step="0.01" @change="setStyle">
          </div>


          <h4>漂移</h4>

          <div class="label-box">
            <div class="head">
              <b>横向漂移</b>
              <span v-text="para.transposeX"></span>
            </div>
            <input type="range" v-model.number="para.transposeX" min="0" max="10" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>横向漂移抛物线</b>
              <span v-text="para.transposePow"></span>
            </div>
            <input type="range" v-model.number="para.transposePow"
                    :disabled="!para.transposeX"
                    min="1" max="8" step="0.1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>横向漂移杂讯</b>
              <span v-text="para.transposeNoise"></span>
            </div>
            <input type="range" v-model.number="para.transposeNoise"
                    :disabled="!para.transposeX"
                    min="0" max="2" step="0.01" @change="setStyle">
          </div>


        </div>
      </div>
      <div class="group"> <!-- <h3>质量設置</h3> -->
        <div class="head">
          <h3>质量設置</h3>
        </div>
        <div class="body">


          <div class="label-box">
            <div class="head">
              <b>像素合并</b>
              <span v-text="para.zoom"></span>
            </div>
            <input type="range" v-model.number="para.zoom"   min="1" max="20" step="0.01" @change="setStyle">
          </div>

          <div class="label-box">
            <div class="head">
              <b>信号质量</b>
              <span v-text="para.quality"></span>
            </div>
            <input type="range" v-model.number="para.quality" min="0" max="1" step="0.05">
          </div>
          <div class="label-box">
            <div class="head">
              <b>信号噪声</b>
              <span v-text="para.lightNoise"></span>
            </div>
            <input type="range" v-model.number="para.lightNoise" min="0" max="500" step="1" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>胶片颗粒</b>
              <span v-text="para.darkNoise"></span>
            </div>
            <input type="range" v-model.number="para.darkNoise" min="0" max="500" step="1" @change="setStyle">
          </div>
        </div>
      </div>
      <div class="group"><!--變形設置-->
        <div class="head">
          <h3>變形設置</h3>
        </div>
        <div class="body">
          <div class="label-box" para="padding:0 0 6px 0;">
            <b>原始尺寸</b>

            <label>
              <input type="checkbox" v-model="para.sizeOrigin" @change="setStyle">原始尺寸处理（性能差）
            </label>
          </div>
          <div class="label-box" para="padding:10px 0;">
            <b>画幅比例</b>
            <label>
              <input type="radio" v-model="para.wide" value="4:3" :disabled="para.sizeOrigin" @change="setStyle">4:3
            </label>
            <label>
              <input type="radio" v-model="para.wide" value="16:9" :disabled="para.sizeOrigin" @change="setStyle">16:9
            </label>
            <label>
              <input type="radio" v-model="para.wide" value="21:9" :disabled="para.sizeOrigin" @change="setStyle">21:9
            </label>
            <label>
              <input type="radio" v-model="para.wide" value="1:1" :disabled="para.sizeOrigin" @change="setStyle">1:1
            </label>
          </div>
          <div class="label-box" para="padding:10px 0;">
            <b>拉伸方案</b>
            <label>
              <input type="radio" v-model="para.fit" value="cover" :disabled="para.sizeOrigin" @change="setStyle">填充
            </label>
            <label>
              <input type="radio" v-model="para.fit" value="contain" :disabled="para.sizeOrigin" @change="setStyle">完整
            </label>
            <label>
              <input type="radio" v-model="para.fit" value="fill" :disabled="para.sizeOrigin" @change="setStyle">拉伸
            </label>
          </div>
          <div class="label-box">
            <div class="label-box">
              <div class="head">
                <b>比例变形</b>
                <span v-text="para.ratio"></span>
              </div>
              <input type="range" v-model.number="para.ratio"
                      min="0.5" max="2" step="0.1"
                      :disabled="para.fit==='fill'" @change="setStyle">
            </div>
          </div>
          <div class="label-box">
            <div class="head">
              <b>边缘偏差</b>
              <span v-text="para.border"></span>
            </div>
            <input type="range" v-model.number="para.border" min="0" max="30" step="0.1" @change="setStyle">
          </div>
        </div>
      </div>
      <div class="group"><!--水印設置-->
        <div class="head">
          <h3>水印設置</h3>
        </div>
        <div class="body">
          <div class="label-box" para="padding:0 0 10px 0;">
            <label para="display:inline-block;margin-right:1em;">
              <input type="checkbox" v-model="para.watermark" @change="setStyle">显示蒸汽机水印
            </label>
            <button @click="setLogoFromFile"
                    :disabled="!para.watermark">选择水印</button>
          </div>
          <div class="label-box">
            <div class="head">
              <b>水平位置</b>
              <span v-text="para.watermarkLeft"></span>
            </div>
            <input type="range" v-model.number="para.watermarkLeft"
                    :disabled="!para.watermark"
                    min="0" max="1" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>垂直位置</b>
              <span v-text="para.watermarkTop"></span>
            </div>
            <input type="range" v-model.number="para.watermarkTop"
                    :disabled="!para.watermark"
                    min="0" max="1" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>透明度</b>
              <span v-text="para.watermarkAlpha"></span>
            </div>
            <input type="range" v-model.number="para.watermarkAlpha"
                    :disabled="!para.watermark"
                    min="0" max="1" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>盖印比例</b>
              <span v-text="para.watermarkSize"></span>
            </div>
            <input type="range" v-model.number="para.watermarkSize"
                    :disabled="!para.watermark"
                    min="0.3" max="1.5" step="0.01" @change="setStyle">
          </div>
          <div class="label-box" para="padding:10px 0;">
            <label>
              <input type="checkbox" v-model="para.styleName" @change="setStyle">显示预设名
            </label>
          </div>
          <div class="label-box">
            <div class="head">
              <b>水平位置</b>
              <span v-text="para.styleLeft"></span>
            </div>
            <input type="range" v-model.number="para.styleLeft"
                    :disabled="!para.styleName"
                    min="0" max="1" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>垂直位置</b>
              <span v-text="para.styleTop"></span>
            </div>
            <input type="range" v-model.number="para.styleTop"
                    :disabled="!para.styleName"
                    min="0" max="1" step="0.01" @change="setStyle">
          </div>
          <div class="label-box">
            <div class="head">
              <b>盖印比例</b>
              <span v-text="para.styleSize"></span>
            </div>
            <input type="range" v-model.number="para.styleSize"
                    :disabled="!para.styleName"
                    min="0.3" max="1.5" step="0.01" @change="setStyle">
          </div>
        </div>
      </div>
      <div class="group"><!--其他設置-->
        <div class="head">
          <h3>其他設置</h3>
        </div>
        <div class="body">
          <div class="label-box" style="padding:4px 0;">
            <label>
              <input type="checkbox" v-model="para.sharpen" @change="setStyle">强调线条
            </label>
            <label>
              <input type="checkbox" v-model="para.snow" @change="setStyle">切断信号
            </label>
            <label>
              <input type="checkbox" v-model="para.invertLight" @change="setStyle">颠倒黑白
            </label>
          </div>


          <div class="label-box" style="padding:10px 0;">
            <b>线条方案</b>
            <label>
              <input type="radio" v-model="para.convoluteName" value="右倾" :disabled="!para.sharpen" @change="setStyle">右倾
            </label>
            <label>
              <input type="radio" v-model="para.convoluteName" value="左倾" :disabled="!para.sharpen" @change="setStyle">左倾
            </label>
            <label>
              <input type="radio" v-model="para.convoluteName" value="桑拿" :disabled="!para.sharpen" @change="setStyle">桑拿
            </label>
            <label>
              <input type="radio" v-model="para.convoluteName" value="浮雕" :disabled="!para.sharpen" @change="setStyle">浮雕
            </label>

          </div>
        </div>
    </div>
    </div>
  </div>
    
</template>
<script>
import {setLogoFromFile} from '../script/event.js'//导入外部函数
import {setLogoByURL} from '../script/process.js'//导入外部函数
export default {
    props:['para'],
    methods:{
      setStyle :function()
      {
        this.$emit('updateStyle',this.para);
      },
      setLogoFromFile()
      {
        setLogoFromFile(src=>{
          setLogoByURL(src,this.setStyle);
        });
        
      }
    }
}
</script>
<style scoped>
.style .group .head h3{
	background:#4d4d4d;
	color:#d4d4d4;
	font-size:18px;
	line-height: 40px;
	padding:0 14px;
	letter-spacing:.5em;
}
.style .group .body{
	padding:10px;
}
.style .group .body h4{
	border:0;
	margin:20px 10px 15px;
	font-size:14px;
}
.style .label-box{
	padding:4px 0;
}
.style .label-box .head{
	overflow: hidden;
	line-height: 1;
}
.style .label-box .head b{
	float: left;
	letter-spacing:.5em;
}
.style .label-box .head span{
	float: right;
	color:#3a3a3a;
}

.style .style-ctrl-box{
	padding:20px 0;
	overflow: hidden;
}
</style>