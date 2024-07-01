import "../../styles/home.css"
import Header from '../components/header/Header';
import HomeUm from '../components/homeUm/HomeUm';
import HomeDois from '../components/homeDois/HomeDois';
import HeaderMobile from "../components/headerMobile/HeaderMobile"
import HomeTres from "../components/homeTres/HomeTres"
import HomeQuatro from "../components/homeQuatro/HomeQuatro"
import HomeCinco from '../components/homeCinco/HomeCinco';


function Home (){
    return (
        <div className="home">
            <div className="headerMobileee"><HeaderMobile/></div>
            <div className="headerrr"><Header/></div>
            <HomeUm/>
            <HomeDois/>
            <HomeTres/>
            <HomeQuatro/>
            TESTEsacs
            <HomeCinco/>
        </div>
    )
}
export default Home;