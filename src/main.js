import './style.css';
import './styles/index.css';
import Acess from './components/ButtumSIA';
import ASIDE from './components/AsideSale';
import Header from './components/header';
import Footer from './components/footer';



// let acces = document.querySelector<HTMLDivElement>('#access_cp');
// acces.innerHTML =  Acess;
// let header =document.querySelector<HTMLDivElement>('#header_cp');
// header.innerHTML = Header;
// document.querySelector<HTMLDivElement>('#aside_cp').innerHTML = ASIDE;
// document.querySelector<HTMLDivElement>('#footer_cp').innerHTML = Footer;
let acces = document.getElementById("access_cp");
let aside = document.getElementById("aside_cp");
let header = document.getElementById("header_cp");
let footer = document.getElementById("footer_cp");
acces.innerHTML= Acess;
aside.innerHTML= ASIDE;
footer.innerHTML= Footer;
header.innerHTML= Header;