//TESTING
//
//var url = 'http://10.193.140.181:8015/';

//UNI
//var url = 'http://10.40.130.231:8015/';

//REAL
var url = 'http://52.49.91.43:8015/';

function getCurrentTimestamp() {
	//dd.MM.yyyy kk:mm:ss
    var dt = new Date();
    return dt.getDate()+"."+
           (dt.getMonth()+1)+"."+
           dt.getFullYear()+" "+
           formatTime(dt.getHours())+":"+
           formatTime(dt.getMinutes())+":"+
           formatTime(dt.getSeconds());
}

function formatTime(time) {
    if (time.length == 1) {
        return "0"+time;
    } else {
        return time;
    }
}
