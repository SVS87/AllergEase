import './home.css';
//#9cbcdf
import { Hero, Features, FAQ } from "./components";


const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <FAQ /> 
        </div>
    );
}

export default Home;