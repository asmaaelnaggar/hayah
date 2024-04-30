let one=document.getElementById("one");
let firstnamelabel=document.getElementById("firstnamelabel");
let secondnamelabel=document.getElementById("secondnamelabel");
let lastnamelabel=document.getElementById("lastnamelabel");
let gendersection=document.getElementById("gendersection");
let bloodtypesection=document.getElementById("bloodtypesection");
let birthdatesection=document.getElementById("birthdatesection");
let availablesection=document.getElementById("availablesection");
let numsection4=document.getElementById("numsection4");
let postsection=document.getElementById("postsection");
let govsection5=document.getElementById("govsection5");
let centersection5=document.getElementById("centersection5");
let numsection=document.getElementById("numsection");
let headeru=document.getElementById("headeru");
let donation2click=document.getElementById("donation2click");

function myfun(){
    document.getElementById("two").style.display='flex';
    one.style.color='#DC000E';
    headeru.innerHTML='expand_less';
}


function myfunblur(){
    document.getElementById("two").style.display='none';
    one.style.color='#000000';
    headeru.innerHTML='expand_more';
}

function myfunfocus1(){
    firstnamelabel.style.display='block';
}

function myfunfocus2(){
    secondnamelabel.style.display='block';
}

function myfunfocus3(){
    lastnamelabel.style.display='block';
}
function myfunfocus4(){
    gendersection.style.display='block';
}

function myfunfocus5(){
    bloodtypesection.style.display='block';
}

function myfunfocus6(){
    birthdatesection.style.display='block';
}


function myfunfocus7(){
    availablesection.style.display='block';
}

function myfunfocus8(){
    numsection.style.display='block';
}

function myfunfocus9(){
    numsection4.style.display='block';
}

function myfunfocus10(){
    postsection.style.display='block';
}

function myfunfocus11(){
    govsection5.style.display='block';
}

function myfunfocus12(){
    centersection5.style.display='block';
}

function myfunclick(){
    document.getElementById("edit1").style.display='flex';
    document.getElementById("edit2").style.display='none';
    document.getElementById("edit4").style.display='none';
    document.getElementById("edit5").style.display='none';
    document.getElementById("edit3").style.display='none';
    document.getElementById("two").style.top='-4166px';
    document.getElementById("iconedit1").style.display='flex';
    document.getElementById("iconedit2").style.display='flex';
    document.getElementById("iconedit3").style.display='flex';
    document.getElementById("iconedit4").style.display='none';

}

function myfunclick2(){
    document.getElementById("edit2").style.display='flex';
    document.getElementById("edit1").style.display='none';
    document.getElementById("edit4").style.display='none';
    document.getElementById("edit5").style.display='none';
    document.getElementById("edit3").style.display='none';
    document.getElementById("two").style.top='-3717px';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
    document.getElementById("iconedit4").style.display='none';
}

function funedit3(){
    document.getElementById("edit3").style.display='flex';
    document.getElementById("edit1").style.display='none';
    document.getElementById("edit2").style.display='none';
    document.getElementById("edit4").style.display='none';
    document.getElementById("edit5").style.display='none';
    document.getElementById("two").style.top='-3929px';
    document.getElementById("iconedit4").style.display='flex';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
}

function funedit4(){
    document.getElementById("edit4").style.display='flex';
    document.getElementById("edit5").style.display='none';
    document.getElementById("edit3").style.display='none';
    document.getElementById("edit1").style.display='none';
    document.getElementById("edit2").style.display='none';
    document.getElementById("two").style.top='-3833px';
    document.getElementById("iconedit4").style.display='none';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
}

function funedit5(){
    document.getElementById("edit5").style.display='flex';
    document.getElementById("edit4").style.display='none';
    document.getElementById("edit3").style.display='none';
    document.getElementById("edit2").style.display='none';
    document.getElementById("edit1").style.display='none';
    document.getElementById("two").style.top='-3958px';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
    document.getElementById("iconedit4").style.display='none';
}
 function myfunpart21(){
    document.getElementById("edit6").style.display='none';
    document.getElementById("edit7").style.display='flex';
    document.getElementById("edit8").style.display='none';
    document.getElementById("two").style.top='-4166px';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
    document.getElementById("iconedit4").style.display='none';
 }

function myfunpart22(){
    document.getElementById("edit6").style.display='none';
    document.getElementById("edit8").style.display='flex';
    document.getElementById("edit7").style.display='none';
    document.getElementById("two").style.top='-4166px';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit4").style.display='none';
    document.getElementById("iconedit3").style.display='none';
}

function myfunpart23(){
    document.getElementById("edit8").style.display='none';
    document.getElementById("edit6").style.display='flex';
    document.getElementById("edit7").style.display='none';
    document.getElementById("two").style.top='-4166px';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
    document.getElementById("iconedit4").style.display='none';
}

function myfunpart24(){
    document.getElementById("edit8").style.display='none';
    document.getElementById("edit7").style.display='flex';
    document.getElementById("edit6").style.display='none';
    document.getElementById("two").style.top='-4166px';

    document.getElementById("iconedit4").style.display='none';
    document.getElementById("iconedit1").style.display='none';
    document.getElementById("iconedit2").style.display='none';
    document.getElementById("iconedit3").style.display='none';
}

function removeplace(){
    document.getElementById("bloodnewselect").style.display='none';
}
function removecenter(){
    document.getElementById("labelcenter").style.display='none';

}
function removecenter2(){
    document.getElementById("labelcenter2").style.display='none';
}
function removegover(){
    document.getElementById("governew").style.display='none';
}
function removegover2(){
    document.getElementById("governew2").style.display='none';
}
function removeplace2(){
    document.getElementById("bloodnewselect2").style.display='none';
}
function removeplace3(){
    document.getElementById("bloodnewselect3").style.display='none';
}

function removegender(){
    document.getElementById("genselect").style.display='none';
}

function removegender2(){
    document.getElementById("genselect2").style.display='none';
}

function removegender3(){
    document.getElementById("genselect3").style.display='none';
}

function removegender4(){
    document.getElementById("genselect4").style.display='none';
}



function Apply67(){
    document.getElementById('two').style.display="none";
}

function Form_Pation_Information(){
    document.getElementById('Form_Pation_Information2').style.display="block"
    document.getElementById('Second_Info_Contact_Location2').style.display="none"
    document.getElementById('headeru').style.left="-702px";
    document.getElementById('headeru').style.top="-2047px";
    document.getElementById('two').style.top="-3009px";
}
function Second_Info_Contact_Location(){
    document.getElementById('Form_Pation_Information2').style.display="none"
    document.getElementById('Second_Info_Contact_Location2').style.display="block"
    document.getElementById('two').style.top="-2886px"
    document.getElementById('headeru').style.left="-709px";
    document.getElementById('headeru').style.top="-587px";
}
function Third_Info_Blood_Request(){
    document.getElementById('Second_Info_Contact_Location2').style.display="none"
    document.getElementById('Third_Info_Blood_Request2').style.display="block"
    document.getElementById('two').style.top="-2831px"
    document.getElementById('headeru').style.left="-709px";
    document.getElementById('headeru').style.top="-587px";
}
function Third_Info_Blood_Request1(){
    document.getElementById('Second_Info_Contact_Location2').style.display="block"
    document.getElementById('Third_Info_Blood_Request2').style.display="none"
    document.getElementById('headeru').style.left="-704px";
    document.getElementById('headeru').style.top="-588px";
    document.getElementById('two').style.top="-2887px"
    
}


function Apply2_1(){
    document.getElementById('Third_Info_Blood_Request').style.display="none"
    document.getElementById('Apply2').style.display="block"
}
function Apply1(){
    document.getElementById('Apply2').style.display="block"
    document.getElementById('Apply1').style.display="none"
}
function Apply1_1(){
    document.getElementById('Apply2').style.display="none"
    document.getElementById('Apply1').style.display="block"
}
function Apply3(){
    document.getElementById('Apply1').style.display="none"
    document.getElementById('Apply3').style.display="block"
}


function funsearch(){
    document.getElementById('List_Available_Donor').style.display="flex";
    document.getElementById('two').style.top ="-2955px";
    document.getElementById('df').style.top="-1993px";
}


function funsearch2(){
    document.getElementById('container5').style.display="flex"
    document.getElementById('two').style.top ="-5800px";
    document.getElementById('df').style.top="-4839px";
}


function funsearch3(){
    document.getElementById('List_No_Available_Donors').style.display="flex"
    document.getElementById('two').style.top ="-2832px";
}


function funsearchlist(){
    document.getElementById('containerlist').style.display="flex";
    document.getElementById('two').style.top ="-3325px";
}


function funsearch2list(){
    document.getElementById('repeatpatient').style.display="flex"
    document.getElementById('two').style.top ="-6993px";
}


