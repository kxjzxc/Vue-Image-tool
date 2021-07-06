const readFileToURL = (file,onOver)=>{
	var reader = new FileReader();
	reader.onload = ()=>{
		const src = reader.result;
		onOver(src);
	};
	reader.readAsDataURL(file);
};

const readFileAndSetIMGSrc = (file,callback)=>{
	readFileToURL(file,src=>{
		const img = new Image();
		img.src = src;
		img.onload = ()=>{
			callback(img);
		}
	});
};
const chooseFile = (callback)=>{
	chooseFile.form.reset();
	chooseFile.input.onchange = function(){
		if(!this.files||!this.files[0])return;
		callback(this.files[0]);
	};
	chooseFile.input.click();
};
chooseFile.form = document.createElement('form');
chooseFile.input = document.createElement('input');
chooseFile.input.type = 'file';
chooseFile.form.appendChild(chooseFile.input);

const setLogoFromFile = (callback)=> {
	chooseFile(file=>{
	  readFileToURL(file,callback);
	});
}
const chooseImage = (callback)=> {
	chooseFile(file=>{
		readFileAndSetIMGSrc(file,callback);
	});
}
export {
    chooseImage,
	setLogoFromFile
}