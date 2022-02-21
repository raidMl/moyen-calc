$(document).ready(function(){
    var j=8;

   /// correct nbr

   $(".nbr1").on("change",function(){   
            //  console.log("Value: " + $(this).val());
        if ($(this).val()>20){
        alert('la note entre 0 et 20');
        $(this).val("");
    }

    }) 

    $(".nbr1").on("keyup",function(){   
        //  console.log("Value: " + $(this).val());
    if ($(this).val()>20){
    alert('la note entre 0 et 20');
    $(this).val("");
}

}) 

/// correct coeffeciant

$(".coe").on("keyup",function(){   
    // console.log("Value: " + $(this).val());
if ($(this).val()>8){
alert('coeffeciant entre 1 et 8');
$(this).val("");
}

})

$(".coe").on("change",function(){   
    // console.log("Value: " + $(this).val());
if ($(this).val()>8){
alert('coeffeciant entre 1 et 8');
$(this).val("");
}

})


// calc moy

$("#calc_moy").on("click",function(){   
    for(var i=1;i<j;i++){
  var coe=document.getElementById("coef"+i).value; 
  var td=  document.getElementById("td"+i).value; 
  var cntrl=  document.getElementById("cntrl"+i).value; 
//   console.log("hhhhhhhhhhhhhhh");
moyen=td*0.4+cntrl*0.6;
$("#moy"+i).val(moyen);


  console.log(coe);
  console.log(td);
  console.log(cntrl);}
  var moyenG=0;
  var nbrcoe=0;

  for(let i=1;i<j;i++){
      var moyen=document.getElementById("moy"+i).value;
     var  coe=document.getElementById("coef"+i).value;
// convert coeffeciant to double  myNumber.toString(10);  // returns 32
coeNbr=Number(coe);   

nbrcoe=nbrcoe+coeNbr;
    moyenG=moyenG+moyen*coeNbr;
// console.log(coe+"coe");
// console.log(moyenG+"moyenG");
// console.log("lamoyennnnnnnnn"+moyenG*coe);
}
console.log(nbrcoe+"coe");
console.log(moyenG+"moyenG");
var total=moyenG/nbrcoe;
document.getElementById("result").innerHTML=total.toFixed(2);




})
// add_mod ******************

$("#add_mod").on("click",function(){   

    




    var row=    '<tr id='+"pcr"+j+' class='+"Mdl"+j+' style="text-align: center!important; " > '
      + ' <td scope='+"col"+' ><input type='+"text"+'  value='+"Module"+j+'  maxlength="15"></td>'
    +'<td scope='+"col"+'><input type='+"number"+'   class='+"coe"+' id="coef'+j+'" value="1" min="0.00" step="1" oninput='+"validity.valid||(value='');"+'></td>'
+'<td scope='+"col"+' ><input type='+"number"+' class='+"nbr1"+' id='+"td"+j+' value=""   min="0.00" step="0.5"  oninput='+"validity.valid||(value='');"+'></td>'
 +'<td scope='+"col"+' ><input type='+"number"+' class="nbr1" id="cntrl'+j+'" value=""  min="0.00" step="0.5"   oninput='+"validity.valid||(value='');"+'></td>'
+' <td scope='+"col"+'><input type='+"number"+'  class='+"nbr1" +'   disabled value=""   id="moy'+j+'"></td> </tr>';
    // $(".table").append(row, module, coe,td,control,moduleMoy);
    // $(row).addClass("Modul"+j);

    $(".t2").append(row);
    // $(".coe").addClasse("coe");
    // (row, module, coe,td,control,moduleMoy).appendTo("table");
    // $("input").addClass("nbr1");


//   console.log("hhhhhhhhhhhhhhh");
// $("#moy"+i).val(moyen);
j++;

//   console.log(coe);
//   console.log(td);
//   console.log(cntrl);}





// $("input").addClass("nbr1");


})



// delete_mod ******************

$("#delete_mod").on("click",function(){   

    




    // var row=    '<tr class="text-center Modul'+(j-1)+'"></tr>';   
   if((j-1)>0){


//     var element = document.getElementById("pcr"+j);
// element.parentNode.removeChild(element);
    // $("tr").remove(".Modul"+(j-1));
    // $("tr").remove(".Modul7");
  
  
    if((j-1)>7)
    $(".t2 .Mdl"+(j-1)+"").empty();
else if ((j-1)<=7)
     $("tr").remove(".Mdl"+(j-1));

 console.log("raid",j-1);




j--;}




})


//moyen du cem **********************************************


// calc moy
let d=11;

$("#calcMoyCem").on("click",function(){   
    for(var k=1;k<d;k++){
  var coee=document.getElementById("coeff"+k).value; 
  var tdd=  document.getElementById("tdd"+k).value; 
  var dvv=  document.getElementById("devoir"+k).value;
// console.log("raid");
var cntrl=  document.getElementById("ctr"+k).value; 



// console.log(k.value +"value of k");
Ctrl=Number(cntrl);
Td=Number(tdd);
Dv=Number(dvv);
moyen=(Ctrl*3+Td+Dv)/5;
$("#moyy"+k).val(moyen);

    
//   console.log(coee);
//   console.log(tdd);
//   console.log(dvv);
//   console.log(cntrl);
}
  var moyenG=0;
  var nbrcoe=0;

  for(let i=1;i<d;i++){
      var moyen=document.getElementById("moyy"+i).value;
     var  coe=document.getElementById("coeff"+i).value;
// convert coeffeciant to double  myNumber.toString(10);  // returns 32
coeNbr=Number(coe);   

nbrcoe=nbrcoe+coeNbr;
    moyenG=moyenG+moyen*coeNbr;
// // console.log(coe+"coe");
// // console.log(moyenG+"moyenG");
// // console.log("lamoyennnnnnnnn"+moyenG*coe);
}
// console.log(nbrcoe+"coe");
// console.log(moyenG+"moyenG");
var total=moyenG/nbrcoe;
document.getElementById("result_cem").innerHTML=total.toFixed(2);




})












// add_mod ******************

$("#add_mod_cem").on("click",function(){   

    




    var row=    '<tr id='+"pcrr"+d+' class='+"Module"+d+' style="text-align: center!important; " > '
      + ' <td scope='+"col"+' ><input type='+"text"+'  value='+"المادة"+d+'  maxlength="15"></td>'
    +'<td scope='+"col"+'><input type='+"number"+'   class='+"coe"+' id="coeff'+d+'" value="1" min="0.00" step="1" oninput='+"validity.valid||(value='');"+'></td>'
+'<td scope='+"col"+' ><input type='+"number"+' class='+"nbr1"+' id='+"tdd"+d+' value=""   min="0.00" step="0.5"  oninput='+"validity.valid||(value='');"+'></td>'
 +'<td scope='+"col"+' ><input type='+"number"+' class="nbr1" id="devoir'+d+'" value=""  min="0.00" step="0.5"   oninput='+"validity.valid||(value='');"+'></td>'
 +'<td scope='+"col"+' ><input type='+"number"+' class="nbr1" id="ctr'+d+'" value=""  min="0.00" step="0.5"   oninput='+"validity.valid||(value='');"+'></td>'
 +' <td scope='+"col"+'><input type='+"number"+'  class='+"nbr1" +'   disabled value=""   id="moyy'+d+'"></td> </tr>';
    // $(".table").append(row, module, coe,td,control,moduleMoy);
    // $(row).addClass("Modul"+d);

    $(".t1").append(row);
    // $(".coe").addClasse("coe");
    // (row, module, coe,td,control,moduleMoy).appendTo("table");
    // $("input").addClass("nbr1");


//   console.log("hhhhhhhhhhhhhhh");
// $("#moy"+i).val(moyen);
d++;

//   console.log(coe);
//   console.log(td);
//   console.log(cntrl);}





// $("input").addClass("nbr1");


})



// delete_mod ******************

$("#delete_cem").on("click",function(){   

    




    // var row=    '<tr class="text-center Modul'+(d-1)+'"></tr>';   
   if((d-1)>0){


//     var element = document.getElementById("pcr"+d);
// element.parentNode.removeChild(element);
    // $("tr").remove(".Modul"+(d-1));
    // $("tr").remove(".Modul7");
  
  
//     if((d-1)>10)
//     $(".t1 .Module"+(d-1)+"").empty();
// else if ((d-1)<=10)
//      $(".t1").remove(".Modul"+(d-1));

if((d-1)>10)
$(".t1 .Module"+(d-1)+"").empty();
else if ((d-1)<=10)
 $("tr").remove(".Modul"+(d-1));

 console.log("raid",d-1);




d--;}




})




////////////// moyen for lycée ********************************************************


// calc moy
let L=10;

$("#calcMoyLic").on("click",function(){   
    for(var k=1;k<L;k++){
  var coee=document.getElementById("coefff"+k).value; 
  var tdd=  document.getElementById("tddd"+k).value; 
  var dvv=  document.getElementById("devoirr"+k).value;
// console.log("raid");
var cntrl=  document.getElementById("ctrr"+k).value; 



// console.log(k.value +"value of k");
Ctrl=Number(cntrl);
Td=Number(tdd);
Dv=Number(dvv);
moyen=(Ctrl*2+Td+Dv)/4;
$("#moyyy"+k).val(moyen);

    
//   console.log(coee);
//   console.log(tdd);
//   console.log(dvv);
//   console.log(cntrl);
}
  var moyenG=0;
  var nbrcoe=0;

  for(let i=1;i<L;i++){
      var moyen=document.getElementById("moyyy"+i).value;
     var  coe=document.getElementById("coefff"+i).value;
// convert coeffeciant to double  myNumber.toString(10);  // returns 32
coeNbr=Number(coe);   

nbrcoe=nbrcoe+coeNbr;
    moyenG=moyenG+moyen*coeNbr;
// // console.log(coe+"coe");
// // console.log(moyenG+"moyenG");
// // console.log("lamoyennnnnnnnn"+moyenG*coe);
}
// console.log(nbrcoe+"coe");
// console.log(moyenG+"moyenG");
var total=moyenG/nbrcoe;
document.getElementById("result_Lic").innerHTML=total.toFixed(2);




})












// add_mod ******************

$("#add_mod_Lic").on("click",function(){   

    




    var row=    '<tr id='+"pcrrr"+L+' class='+"Modulle"+L+' style="text-align: center!important; " > '
      + ' <td scope='+"col"+' ><input type='+"text"+'  value='+"المادة"+L+'  maxlength="15"></td>'
    +'<td scope='+"col"+'><input type='+"number"+'   class='+"coe"+' id="coefff'+L+'" value="1" min="0.00" step="1" oninput='+"validity.valid||(value='');"+'></td>'
+'<td scope='+"col"+' ><input type='+"number"+' class='+"nbr1"+' id='+"tddd"+L+' value=""   min="0.00" step="0.5"  oninput='+"validity.valid||(value='');"+'></td>'
 +'<td scope='+"col"+' ><input type='+"number"+' class="nbr1" id="devoirr'+L+'" value=""  min="0.00" step="0.5"   oninput='+"validity.valid||(value='');"+'></td>'
 +'<td scope='+"col"+' ><input type='+"number"+' class="nbr1" id="ctrr'+L+'" value=""  min="0.00" step="0.5"   oninput='+"validity.valid||(value='');"+'></td>'
 +' <td scope='+"col"+'><input type='+"number"+'  class='+"nbr1" +'   disabled value=""   id="moyyy'+L+'"></td> </tr>';
    // $(".table").append(row, module, coe,td,control,moduleMoy);
    // $(row).addClass("Modul"+d);

    $(".t3").append(row);
    // $(".coe").addClasse("coe");
    // (row, module, coe,td,control,moduleMoy).appendTo("table");
    // $("input").addClass("nbr1");


//   console.log("hhhhhhhhhhhhhhh");
// $("#moy"+i).val(moyen);
L++;

//   console.log(coe);
//   console.log(td);
//   console.log(cntrl);}





// $("input").addClass("nbr1");


})



// delete_mod ******************

$("#delete_Lic").on("click",function(){   

    




    // var row=    '<tr class="text-center Modul'+(d-1)+'"></tr>';   
   if((L-1)>0){


//     var element = document.getElementById("pcr"+d);
// element.parentNode.removeChild(element);
    // $("tr").remove(".Modul"+(d-1));
    // $("tr").remove(".Modul7");
  
  
    if((L-1)>9)
    $(".t3 .Modulle"+(L-1)+"").empty();
else if ((L-1)<=9)
     $("tr").remove(".Modulle"+(L-1));

 console.log("raid",L-1);




L--;}




})













})