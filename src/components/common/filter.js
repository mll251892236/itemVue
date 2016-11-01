//时间格式化
var moment = require('moment');

Vue.filter('dateAccurateToMS', function (value) {
	if(value){
		return moment(value).format('YYYY-MM-DD HH:mm:ss');
	}else{
		return "";
	}
});

Vue.filter('date', function (value,type) {
if(null != value && '' != value){
	var date = new Date(value);	
	if('yyyy-MM-dd' == type){
		 return moment(date).format('YYYY-MM-DD');
	}else if('yyyy/MM/dd' == type){
		 return moment(date).format('YYYY/MM/DD');
	}else if('yyyy-MM-dd hh:mm:ss' == type){
		 return moment(date).format('YYYY-MM-DD HH:mm:ss'); 
	}else if('yyyy' == type){
		 return moment(date).format('YYYY'); 
	}else{
		 return moment(date).format('YYYY-MM-DD');
	}
}else{
	return "";
}
});

//时间格式化--双向绑定
Vue.filter('dateSync',{	
	read: function(value,type) {
		if(null != value && '' != value){
			var date = new Date(value);	
			if('yyyy-MM-dd' == type){
				 return moment(date).format('YYYY-MM-DD');
			}else if('yyyy/MM/dd' == type){
				 return moment(date).format('YYYY/MM/DD');
			}else if('yyyy-MM-dd hh:mm:ss' == type){
				 return moment(date).format('YYYY-MM-DD HH:mm:ss'); 
			}else if('yyyy' == type){
				 return moment(date).format('YYYY'); 
			}else{
				 return moment(date).format('YYYY-MM-DD');
			}
		}else{
			return '';
		}
		 
    },
    write: function(value, oldValue) {    	
    	 return value;
    }
});



