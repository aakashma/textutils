import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="textUtils" aboutText="About Us"/>
    <div className='container'>
    <TextForm heading="Enter the text to analyze"/> 
    <About />
</div>
</>
  ); 
}

export default App;
