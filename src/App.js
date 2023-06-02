import './App.css';
import Header from '../src/client/components/Header';
import Main from '../src/client/components/Main'
import Footer from '../src/client/components/Footer'
function App() {
  return (
   <>
   <section className='todoapp'>
   <Header/>
      <Main/>
      <Footer/>
   </section>
   </>
  );
}

export default App;
