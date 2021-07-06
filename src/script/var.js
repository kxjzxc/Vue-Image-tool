const logoImageEl = new Image();
logoImageEl.crossorigin = 'Anonymous';
logoImageEl.src = require('@/../public/logo.png');


const defaultStyle = {

	zoom: 1,//缩放，用于像素合并

	light: 1,
	contrast: 1,

	//暗亮褪色
	darkFade:0,
	brightFade:0,

	shiftX: 0,
	shiftY: 0,

	shiftU: 0,
	shiftV: 0,


	level: 4, //颜色断层

	interlaced: 0, //隔行扫描
	interlacedStrong:1,
	interlacedLine:4,
	interlacedLight:0,



	transposeX: 0,
	transposePow: 4,
	transposeNoise:0.04,

	replace:0,

	vividU : 1,
	vividV : 1,

	sizeOrigin: false,
	sharpen: true,
	invertLight: false,

	yuv420:true,
	yuv420Noise:1,

	snow:false,//雪花，达到切断信号的效果
	quality:0.6,//图片质量
	damage:0,

	ratio:1,//长宽比例变化率


	lightNoise:0, //明度噪声
	darkNoise:0, //胶片噪声
	fit:'cover',

	border:0,

	none:false,
	//水印
	logoSrc:require('@/../public/logo.png'),
	watermark:false,
	watermarkSize:0.7,

	watermarkLeft:0.5,
	watermarkTop:0.75,

	watermarkAlpha:1,

	//风格名
	styleName:false,
	styleLeft:0.07,
	styleTop:0.16,

	styleSize:0.7,
	//比例
	wide:'4:3',
	//锐化方案
	convoluteName:'右倾'

};
export {
    defaultStyle,
	logoImageEl
}