let salon = {
    name:'The Pet Salon',
    phone:'123-356-7890',
    address:{
        number:'123',
        street:'Main ST.',
        city:'New York',
        state:'NY',
    },
    workingHours:{
        open:'9:00',
        close:'17:00'
    },
    pet:[]
}
let{name,phone,address:{number,street,city,state}}=salon;

document.getElementById('info').innerHTML=`<h3> ${name} is located in: <br> ${number} ${street} ${city}, ${state}. <br> Phone Number: ${phone} <br> Opens: ${salon.workingHours.open} <br> Closes: ${salon.workingHours.close}`;


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

var petCnt=0; //Because we are starting at 0 Pets

function Pet(name,age,serviceType,owner,phone){
    
    this.id="pt"+petCnt;
    petCnt+=1;
    this.name=name;
    this.age=age;
    this.serviceType=serviceType;
    this.owner=owner;
    this.phone=phone;
    this.Fed='NO';
    this.Walked='NO';

    this.feed= function(){

    }
    this.feed= function(){
        
    }
}

function registerPet(){
   
    var txtName = document.getElementById('txtName');
    var txtAge = document.getElementById('txtAge');
    var selService = document.getElementById('selService');
    var txtOwner = document.getElementById('txtOwner');
    var txtPhone = document.getElementById('txtPhone');
    

    var thePet = new Pet(txtName.value,txtAge.value,selService.value,txtOwner.value,txtPhone.value,)

    console.log(thePet);

    salon.pet.push(thePet);

    displayPetTable(thePet);

   // alert('We have'+' '+salon.pet.length + 'Pets as customers.');
}

function eraseBtn(){
    txtName.value='';
    txtAge.value='';
    selService.value='';
    txtOwner.value='';
    txtPhone.value='';
}

function displayPetTable(aPet){
    var tBody=document.getElementById('listBody');

    var row=`<tr id='${aPet.id}'> <td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.serviceType}</td> <td>${aPet.owner}</td> <td>${aPet.phone}</td> <td> <button class="btn-remove" onclick='removePet("${aPet.id}")'> Remove </button> </td>`;
    
    tBody.innerHTML+=row;
}

function removePet(petId){
    console.log('Wants to remove a pet ',petId);
    

    var indexDelete=0;

    for(var i=0;i<salon.pet.length;i++)
    {
        var indexPet=salon.pet[i];
        if(indexPet.id==petId)
        {
            indexDelete=i;
        }
    }
    salon.pet.splice(indexDelete,1);
    var tr=document.getElementById(petId);
    tr.remove();
    
    alert('We have'+' '+index + 'Pets as customers.');
}   

function petSearch(){
    var searchInput=document.getElementById('n');
    searchName=searchInput.value;
    var indexofFoundedpet=0;
    for(var i=0;i<salon.pet.length;i++)
    {
        var indexSearch=salon.pet[i];
        if(indexSearch.name==searchName)
            {
                indexofFoundedpet=i;
            }
    }
    var theFoundedpet=salon.pet[indexofFoundedpet];
    console.log(theFoundedpet);
    alert('We have'+' '+searchName +' '+ 'registered');
}