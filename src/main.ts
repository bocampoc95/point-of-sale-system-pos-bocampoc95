import './style.css'
import './styles/index.css';
import Acess from './components/ButtumSIA_ts';
import ASIDE from './components/AsideSale';
import Header from './components/header_ts';
import Footer from './components/footer_ts copy';



document.querySelector<HTMLDivElement>('#access_cp')!.innerHTML = Acess
document.querySelector<HTMLDivElement>('#header_cp')!.innerHTML = Header
document.querySelector<HTMLDivElement>('#aside_cp')!.innerHTML = ASIDE
document.querySelector<HTMLDivElement>('#footer_cp')!.innerHTML = Footer
