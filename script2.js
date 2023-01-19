//DOM Selection
//document.querySelector() -> element
const p4 =document.querySelector('#b p');
p4.style.color='red';
p4.style.fontSize='30px';
 const li2=document.querySelector('section#b ul li:nth-child(2)');
 li2.style.backgroundColor='green';
 //document.querySelectorAll
 const p=document.querySelectorAll('p');
for( let i=0; i<p.length; i++) {
  p[i].style.backgroundColor='lightblue';
}