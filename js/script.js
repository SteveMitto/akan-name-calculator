var fname,sname,date,month,year,gender,names,cc,yearAct,centCalc;

var days=["Sunday","Moday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

var dayFinder = function(){
  this.fname=document.forms["akanNames"]["firstname"].value;
  this.sname=document.forms["akanNames"]["secondname"].value;
  this.date=document.forms["akanNames"]["date"].value;
  this.month=document.forms["akanNames"]["month"].value;
  this.year=document.forms["akanNames"]["year"].value;
  this.gender=document.forms["akanNames"]["gender"].value;
  this.names=fname.concat(" ",sname)
  console.log(names)
  this.yearAct=year.slice(2,4);
  this.centCalc=function(year1){
    this.cc=year1;
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
  if (gender === "male"){

    if(actualDay === 1){
      alert("Hello " + names + " you were born on " + days[0] +" and your Akan Name is " + maleNames[0]);+ "."
    }
    else if (actualDay == 2) {
      alert("Hello " + names + " you were born on " + days[1] +" and your Akan Name is " + maleNames[1]);+ "."
    }
    else if (actualDay == 3) {
      alert("Hello " + names + " you were born on " + days[2] +" and your Akan Name is " + maleNames[2]);+ "."
    }
    else if (actualDay == 4) {
      alert("Hello " + names + " you were born on " + days[3] +" and your Akan Name is " + maleNames[3]);+ "."
    }
    else if (actualDay == 5) {
      alert("Hello " + names + " you were born on " + days[4] +" and your Akan Name is " + maleNames[4]);+ "."
    }
    else if (actualDay == 6) {
      alert("Hello " + names + " you were born on " + days[5] +" and your Akan Name is " + maleNames[5]);+ "."
    }
    else if (actualDay == 7 ) {
      alert("Hello " + names + " you were born on " + days[6] +" and your Akan Name is " + maleNames[6]);+ "."
    }else{
      alert("invalid")
    }
  }else if(gender === "female"){
    if(actualDay === 1){
      alert("Hello " + names + " you were born on " + days[0] +" and your Akan Name is " + femaleNames[0]+ ".");
    }
    else if (actualDay == 2) {
      alert("Hello " + names + " you were born on " + days[1] +" and your Akan Name is " + femaleNames[1]+ ".");
    }
    else if (actualDay == 3) {
      alert("Hello " + names + " you were born on " + days[2] +" and your Akan Name is " + femaleNames[2]+ ".");
    }
    else if (actualDay == 4) {
      alert("Hello " + names + " you were born on " + days[3] +" and your Akan Name is " + femaleNames[3]+ ".");
    }
    else if (actualDay == 5) {
      alert("Hello " + names + " you were born on " + days[4] +" and your Akan Name is " + femaleNames[4]+ ".");
    }
    else if (actualDay == 6) {
      alert("Hello " + names + " you were born on " + days[5] +" and your Akan Name is " + femaleNames[5]+ ".");
    }
    else if (actualDay == 7 ) {
      alert("Hello " + names + " you were born on " + days[6] +" and your Akan Name is " + femaleNames[6]+ ".");
    }else{
      alert("invalid")
    }
  }else{
    alert("who are you")
  }

}
