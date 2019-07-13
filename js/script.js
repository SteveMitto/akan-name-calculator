var fname,sname,date,month,year,gender,names,century,yearAct,dayOfWeek,actualDay;

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
  this.yearAct=this.year.slice(2,4);
  this.century=this.year.slice(0,2);

  this.dayOfWeek=( ( (this.century/4) -2*this.century-1) + ((5*this.yearAct/4) ) + ((26*(this.month+1)/10)) + this.date ) % 7;
  this.actualDay= this.dayOfWeek.toFixed(0);
  if (this.gender === "male"){

    if(this.actualDay === 1){
      alert("Hello " + this.names + " you were born on " + this.days[0] +" and your Akan Name is " + this.maleNames[0]);+ "."
    }
    else if (this.actualDay == 2) {
      alert("Hello " + this.names + " you were born on " + this.days[1] +" and your Akan Name is " + this.maleNames[1]);+ "."
    }
    else if (this.actualDay == 3) {
      alert("Hello " + this.names + " you were born on " + this.ays[2] +" and your Akan Name is " + this.maleNames[2]);+ "."
    }
    else if (this.actualDay == 4) {
      alert("Hello " + this.names + " you were born on " + this.days[3] +" and your Akan Name is " + this.aleNames[3]);+ "."
    }
    else if (this.actualDay == 5) {
      alert("Hello " + this.names + " you were born on " + this.days[4] +" and your Akan Name is " + this.maleNames[4]);+ "."
    }
    else if (this.actualDay == 6) {
      alert("Hello " + this.names + " you were born on " + this.days[5] +" and your Akan Name is " + this.maleNames[5]);+ "."
    }
    else if (this.actualDay == 7 ) {
      alert("Hello " + this.names + " you were born on " + this.days[6] +" and your Akan Name is " + this.maleNames[6]);+ "."
    }else{
      alert("invalid")
    }
  }else if(this.gender === "female"){
    if(this.actualDay === 1){
      alert("Hello " + this.names + " you were born on " + this.days[0] +" and your Akan Name is " + this.femaleNames[0]+ ".");
    }
    else if (this.actualDay == 2) {
      alert("Hello " + this.names + " you were born on " + this.days[1] +" and your Akan Name is " + this.femaleNames[1]+ ".");
    }
    else if (this.actualDay == 3) {
      alert("Hello " + this.names + " you were born on " + this.days[2] +" and your Akan Name is " + this.femaleNames[2]+ ".");
    }
    else if (this.actualDay == 4) {
      alert("Hello " + this.names + " you were born on " + this.days[3] +" and your Akan Name is " + this.femaleNames[3]+ ".");
    }
    else if (this.actualDay == 5) {
      alert("Hello " + this.names + " you were born on " + this.days[4] +" and your Akan Name is " + this.femaleNames[4]+ ".");
    }
    else if (this.actualDay == 6) {
      alert("Hello " + this.names + " you were born on " + this.days[5] +" and your Akan Name is " + this.femaleNames[5]+ ".");
    }
    else if (this.actualDay == 7 ) {
      alert("Hello " + this.names + " you were born on " + this.days[6] +" and your Akan Name is " + this.femaleNames[6]+ ".");
    }else{
      alert("invalid")
    }
  }else{
    alert("who are you")
  }

}
