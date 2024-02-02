
import Header from './Header';
import Slider from './Slider';
import Welcome from './Welcome';
import Two from './Two';
import Product from './Product';
import Fruits from './Fruits';
import Vitamins from './Vitamins';
import Latest from './Latest';
import Cold from './Cold';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';
import Footer from './Footer';



function Home() {
    return(
        <>
        
        <div>
            <Header/>
            <Slider/>
            <Welcome/>
            <Two/>
            <Product/>
            <Fruits/>
            <Vitamins/>
            <Latest/>
            <Cold/>
            <Testimonials/>
            <Subscribe/>
            <Footer/>
        </div>
        </>
    )
}

export default Home;