let salon = {
    name:'The Pet Salon',
    phone:'123-356-7890',
    address:{
        number:'123',
        street:'Main st.',
        city:'New York',
        state:'NY',
    },
    workingHours:{
        open:'9:00',
        close:'17:00'
    },
}
let{name,phone,address:{number,street,city,state}}=salon;

document.getElementById('info').innerHTML=`<h3> ${name} is located in: ${number}, ${street},${city},${state}. <br> Phone Number: ${phone} <br> Opens: ${salon.workingHours.open} <br> Closes: ${salon.workingHours.close}`;

var pet1 = new pet('Janis','3y/o Female & 25lbs','HairCut','Sabrina',123-356-7890,);
var pet2 = new pet('Ozzy','5y/o Male & 50lbs','Shave','Samantha',123-356-7890,);
var pet3 = new pet('Cooper','7y/o Male & 75lbs','Cleaning & Walking','Macee',123-356-7890,);
var pet4 = new pet('Peaches','1y/o Female & 55lbs','Cleaning & Walking','Lisa',123-356-7890,);
var pet5 = new pet('Maggie','13y/o Female & 85lbs','Cleaning & lite Walking','Lee Ann',123-356-7890,);
var pet6 = new pet('Mocha','12y/o Male & 78lbs','HairCut','Melissa',123-356-7890,);


// Pet 1
document.getElementById('pet1i').innerHTML=`<img src="img/janis.jpg" height="100px" width="70px" /> `;
document.getElementById("pet1n").innerHTML=`${pet1.name}`;
document.getElementById("pet1a").innerHTML=`${pet1.age}`;
document.getElementById("pet1o").innerHTML=`${pet1.owerName}`;
//document.getElementById("pet1s").innerHTML=`${pet1.serviceType}`;
document.getElementById('pet1h').innerHTML=`Fed ${pet1.Fed} <br> Walked ${pet1.Walked}`;
//pet2
document.getElementById('pet2i').innerHTML=`<img src="img/ozzy.jpg" height="100px"/> `;
document.getElementById("pet2n").innerHTML=`${pet2.name}`;
document.getElementById("pet2a").innerHTML=`${pet2.age}`;
document.getElementById("pet2o").innerHTML=`${pet2.owerName}`;
//document.getElementById("pet2s").innerHTML=`${pet2.serviceType}`;
document.getElementById('pet2h').innerHTML=`Fed ${pet2.Fed} <br> Walked ${pet2.Walked}`;
//pet3
document.getElementById('pet3i').innerHTML=`<img src="img/cooper.jpg" height="100px" /> `;
document.getElementById("pet3n").innerHTML=`${pet3.name}`;
document.getElementById("pet3a").innerHTML=`${pet3.age}`;
document.getElementById("pet3o").innerHTML=`${pet3.owerName}`;
//document.getElementById("pet3s").innerHTML=`${pet3.serviceType}`;
document.getElementById('pet3h').innerHTML=`Fed ${pet3.Fed} <br> Walked ${pet3.Walked}`;
//pet4
document.getElementById('pet4i').innerHTML=`<img src="img/peaches.jpg" height="100px" /> `;
document.getElementById("pet4n").innerHTML=`${pet4.name}`;
document.getElementById("pet4a").innerHTML=`${pet4.age}`;
document.getElementById("pet4o").innerHTML=`${pet4.owerName}`;
//document.getElementById("pet4s").innerHTML=`${pet3.serviceType}`;
document.getElementById('pet4h').innerHTML=`Fed ${pet4.Fed} <br> Walked ${pet4.Walked}`;
//pet5
document.getElementById('pet5i').innerHTML=`<img src="img/maggie.jpg" height="100px" /> `;
document.getElementById("pet5n").innerHTML=`${pet5.name}`;
document.getElementById("pet5a").innerHTML=`${pet5.age}`;
document.getElementById("pet5o").innerHTML=`${pet5.owerName}`;
//document.getElementById("pet5s").innerHTML=`${pet5.serviceType}`;
document.getElementById('pet5h').innerHTML=`Fed ${pet5.Fed} <br> Walked ${pet5.Walked}`;
//pet6
document.getElementById('pet6i').innerHTML=`<img src="img/mocha.jpg" height="100px" /> `;
document.getElementById("pet6n").innerHTML=`${pet6.name}`;
document.getElementById("pet6a").innerHTML=`${pet6.age}`;
document.getElementById("pet6o").innerHTML=`${pet6.owerName}`;
//document.getElementById("pet6s").innerHTML=`${pet6.serviceType}`;
document.getElementById('pet6h').innerHTML=`Fed ${pet6.Fed} <br> Walked ${pet6.Walked}`;


function servicetype1(){
    var myList1=document.getElementById('myList1');
    document.getElementById('service1').value=myList1.options[myList1.selectedIndex].text;
}
function servicetype2(){
    var myList=document.getElementById('myList2');
    document.getElementById('service2').value=myList2.options[myList2.selectedIndex].text;
}
function servicetype3(){
    var myList=document.getElementById('myList3');
    document.getElementById('service3').value=myList3.options[myList3.selectedIndex].text;
}
function servicetype4(){
    var myList=document.getElementById('myList4');
    document.getElementById('service4').value=myList4.options[myList4.selectedIndex].text;
}
function servicetype5(){
    var myList=document.getElementById('myList5');
    document.getElementById('service5').value=myList5.options[myList5.selectedIndex].text;
}
function servicetype6(){
    var myList=document.getElementById('myList6');
    document.getElementById('service6').value=myList6.options[myList6.selectedIndex].text;
}

function feed1() {
    pet1.Fed = 'Yes';
    document.getElementById('pet1h').innerHTML=`Fed: ${pet1.Fed} <br> Walked: ${pet1.Walked}`;
}
function walk1(){
    pet1.Walked = 'Yes'; 
    document.getElementById('pet1h').innerHTML=`Fed: ${pet1.Fed} <br> Walked: ${pet1.Walked}`;
}
function feed2() {
    pet2.Fed = 'Yes';
    document.getElementById('pet2h').innerHTML=`Fed: ${pet2.Fed} <br> Walked: ${pet2.Walked}`;
}
function walk2(){
    pet2.Walked = 'Yes'; 
    document.getElementById('pet2h').innerHTML=`Fed: ${pet2.Fed} <br> Walked: ${pet2.Walked}`;
}
function feed3() {
    pet3.Fed = 'Yes';
    document.getElementById('pet3h').innerHTML=`Fed: ${pet3.Fed} <br> Walked: ${pet3.Walked}`;
}
function walk3(){
    pet3.Walked = 'Yes'; 
    document.getElementById('pet3h').innerHTML=`Fed: ${pet3.Fed} <br> Walked: ${pet3.Walked}`;
}
function feed4() {
    pet4.Fed = 'Yes';
    document.getElementById('pet4h').innerHTML=`Fed: ${pet4.Fed} <br> Walked: ${pet4.Walked}`;
}
function walk4(){
    pet4.Walked = 'Yes'; 
    document.getElementById('pet4h').innerHTML=`Fed: ${pet4.Fed} <br> Walked: ${pet4.Walked}`;
}
function feed5() {
    pet5.Fed = 'Yes';
    document.getElementById('pet5h').innerHTML=`Fed: ${pet5.Fed} <br> Walked: ${pet5.Walked}`;
}
function walk5(){
    pet5.Walked = 'Yes'; 
    document.getElementById('pet5h').innerHTML=`Fed: ${pet5.Fed} <br> Walked: ${pet5.Walked}`;
}
function feed6() {
    pet6.Fed = 'Yes';
    document.getElementById('pet6h').innerHTML=`Fed: ${pet6.Fed} <br> Walked: ${pet6.Walked}`;
}
function walk6(){
    pet6.Walked = 'Yes'; 
    document.getElementById('pet6h').innerHTML=`Fed: ${pet6.Fed} <br> Walked: ${pet6.Walked}`;
}


function pet(name,age,serviceType,owerName,contactPhone){
    this.name=name;
    this.age=age;
    this.serviceType=serviceType;
    this.owerName=owerName;
    this.contactPhone=contactPhone;
    this.Fed='NO';
    this.Walked='NO';
    this.pet=pet;

    this.feed = function(){
        //this.Walked=this.Walked-10;
        this.Walked-=10;
        this.Fed+=10;
    }
    this.status=function(){
        console.log(this.name,'Walked Level=',+this.Walked,'Fed Level=',+this.Fed);
        document.getElementById('status').innerHTML=`${this.name},'Walked Level=',${+this.Walked},'Fed Level=',+${this.Fed}`;
    }
    this.contactPhone=function(){
        console.log('The owner is'+this.owerName,'and to contact them, call'+this.contactPhone);
        
    }
}