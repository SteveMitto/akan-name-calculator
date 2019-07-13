var days=["Sunday","Moday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

var dayFinder = function(day){
  var fname=document.forms["akanNames"]["firstname"].value;
  var sname=document.forms["akanNames"]["secondname"].value;
  var date=document.forms["akanNames"]["date"].value;
  var month=document.forms["akanNames"]["month"].value;
  var year=document.forms["akanNames"]["year"].value;
  var yearAct=year.slice(2,4);
  var centCalc=function(year1){
    var cc=year1;
    if (year1 > 2000){
      return 20;
    }
    else if(year1 <=2000 && year1 >=1901){
      return 19;
    }
    else if(year1 <=1900 && year1 >= 1801){
      return 18;
    }else{
      return false;
    }
  }
  var century=centCalc(year);
  alert(century)

  var dayOfWeek=(((century/4)-2*century-1) +((5*yearAct/4)) + ((26*(month + 1)/10))+date )%7;

  var actualDay= dayOfWeek.toFixed(0);
  alert(actualDay);
  if(actualDay === 1){
    alert(days[0] + maleNames[0]);
  }
  else if (actualDay == 2) {
    alert(days[1] + maleNames[1]);
  }
  else if (actualDay == 3) {
    alert(days[2] + maleNames[2]);
  }
  else if (actualDay == 4) {
    alert(days[3] + maleNames[3]);
  }
  else if (actualDay == 5) {
    alert(days[4] + maleNames[4]);
  }
  else if (actualDay == 6) {
    alert(days[5] + maleNames[5]);
  }
  else if (actualDay == 7 ) {
    alert(days[6] + maleNames[6]);
  }else{
    alert("invalid")
  }

}
