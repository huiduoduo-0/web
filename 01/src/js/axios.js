export default class Axios {
	constructor(baseUrl="") {
       this.baseUrl = baseUrl
	}

	get(url, data = {}, header = {}) {
		let formdata = ''
		for (const k in data) {
			if (data.hasOwnProperty(k)) {
				formdata += `&${k}=${data[k]}`;
			}
		}
		const _this = this
		const xhr = new XMLHttpRequest();
		return new Promise(function(resolve, reject) {

			xhr.open("GET", _this.baseUrl +url + (formdata ? ('?' + formdata.substr(1)) : ""))
			for (const k in header) {
				if (header.hasOwnProperty(k)) {
					xhr123.setRequestHeader(k, header[k])
				}
			}
			xhr.onreadystatechange = fn;
			xhr.send()
			function fn(){
				if(this.readyState != 4)return;
				if(this.status == 200){
					resolve(this.response)
				}else{
					reject(this.status)
				}
			}
		});
	}
	

	post(url, data = {}, header = {
		"content-type": "application/x-www-form-urlencoded"
	}) {
		const xhr = new XMLHttpRequest();
		let formdata = ''
		for (const k in data) {
			if (data.hasOwnProperty(k)) {
				formdata += `&${k}=${data[k]}`;
			}
		}
		return new Promise(function(resolve, reject) {
			xhr.open("POST", _this.baseUrl+url)
			for (const k in header) {
				if (header.hasOwnProperty(k)) {
					xhr123.setRequestHeader(k, header[k])
				}
			}
			xhr.onreadystatechange = fn;
			xhr.send(formdata.substr(1))
			function fn(){
				if(this.readyState != 4)return;
				if(this.status == 200){
					resolve(this.response)
				}else{
					reject(this.status)
				}
			}
		});
	}
}
