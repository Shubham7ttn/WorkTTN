function clock(){
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var meridiem = 'AM';
    var day = dateTime.getDay();
    var todayDate = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();
    var greet;
    var hour12Format;
    var daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var monthsList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var icons = document.getElementById('icons');
    //This will change the 24-hours format to 12-hours format
    if(hour == 0){
        hour12Format = 12;
    }
    //This will set the meridiem (AM/PM)
    if(hour > 12){
        hour12Format = hour - 12;
        meridiem = 'PM';
    }

    //This will tell either it's Morning, Afternoon, Evening or Night
    if(hour >= 20 || hour < 4){
        greet = "Good Night";
    }else if(hour >= 4 && hour < 12){
        greet = "Good Morning";
    }else if(hour >= 12 && hour < 16){
        greet = "Good Afternoon";
    }else if(hour >= 16 && hour < 20){
        greet = "Good Evening";
    }

    //Setting the values
    document.getElementById('greeting').innerHTML = greet;
    document.getElementById('date').innerHTML = daysList[day] + ", " + monthsList[month] + " " + todayDate + ", " + year;
    document.getElementById('hrs').innerHTML = hour12Format;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;    
    document.getElementById('meridiem').innerHTML = meridiem;    
}

var startClock = setInterval(clock, 1000);