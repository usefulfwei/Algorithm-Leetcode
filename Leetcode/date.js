function date(date){
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let str = day+"  "+hour+":"+adjust(min)+":"+adjust(sec);
  return str;
}

function adjust(num){
  if(num<10){
    return '0' + num
  }
  else return num;
}
/*
console.log(date(new Date()));*/

function tryStr(obj){
	var str = "";
	if(obj == null){
		str += "==null work"
	}

	if(!obj){
		str += "!obj work"
	}
	return str;
}
console.log(tryStr(null));