import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Sales from './components/Sales';
import Recommended from './components/Recommended';
import Topics from './components/Topic';
import Popular from './components/Popular';
import Footer from './components/Footer';


function App(){
    return(<div>
        <Navbar />
        <Categories />
        <Sales/>
        <Recommended/>
        <Topics/>
        <Popular/>
        <Footer/>
      </div>)
}
export default App