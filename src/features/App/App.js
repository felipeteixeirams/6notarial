/*** Imports containers ***/
import TopBar from '@/containers/TopBar/TopBar';
import Menu from '@/containers/Menu/Menu';
import Main from '@/containers/Main/Main';
import About from '@/containers/About/About';
import Services from '@/containers/Services/Services';
import Footer from '@/containers/Footer/Footer';
/**/

const App = () => {
    //setTimeout(() => document.getElementById('load').remove(), 3000);
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
