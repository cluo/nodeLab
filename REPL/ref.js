var timer = setInterval(function(msg){ console.log(msg);},1000,'cluo');
timer.unref();
timer.ref();

