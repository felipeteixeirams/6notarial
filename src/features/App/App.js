import '@/_assents/css/responsive.css';
import '@/_assents/css/index.css';
/*** Imports containers ***/
import TopBar from '@/containers/TopBar/TopBar';
import Menu from '@/containers/Menu/Menu';
import Main from '@/containers/Main/Main';
import About from '@/containers/About/About';
import Services from '@/containers/Services/Services';
import Footer from '@/containers/Footer/Footer';
/**/

const App = () => {
    
    return (
        <>

            <TopBar/>

            <Menu />

            <Main />

            <About />

            <Services />

            <Footer />

        </>
    );
}

export default App;
