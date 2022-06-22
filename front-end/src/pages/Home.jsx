
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import SLider from "../components/SLider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar />
            <SLider />
            <Categories/>
            <Products />  
            <Newsletter />  
            <Footer/>

        </div>
        
    )
}

export default Home
