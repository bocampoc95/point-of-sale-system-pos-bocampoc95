import { Routes, Route } from 'react-router-dom';
import LayouthDashboards from './LayouthDashboards';
import LayouthSales from './LayouthSales';
import LayouthClient from './LayouthClient';
import LayouthProducts from './LayouthProducts';
import LayouthPublic from './LayouthPublic';


// import { Navbar } from '../components/ui/Navbar';

// import { DcScreen } from '../components/dc/DcScreen';
// import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { SearchScreen } from '../components/search/SearchScreen';
// import { HeroScreen } from '../components/hero/HeroScreen';

const layoutItems = [
    { name: <LayouthPublic/>, path: "/", icon: "🏠" },
    { name: <LayouthProducts/>, path: "/products", icon: "ℹ️" },
    { name: <LayouthClient/>, path: "/clients", icon: "💼" },
    { name:<LayouthSales/>, path: "/sales", icon: "💼" },
    { name: <LayouthDashboards/>, path: "/reports", icon: "📞" },
  ];

export const LayouthPrivate = () => {
    console.log('private')
    return (
        <>
            

            <div className="container">
                <Routes>
                    {/* <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} /> */}
                                {layoutItems.map((item, index) => (
            <Route key={item.path} path={item.path} element={ item.name}/>
            ))}

                </Routes>
            </div>
        </>
    )
}
