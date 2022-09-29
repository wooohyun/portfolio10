import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import BestSeller from './component/BestSeller';
import MainCoco from './component/MainCoco';
import RealReview from './component/RealReview';
import Footer from './component/Footer';
import FootBanner from './component/FootBanner';

function App() {
  return (
    <div className="Wrap">
 <Header/>
 <MainVisual/>
<BestSeller/>
<MainCoco/>
<RealReview/>
<FootBanner/>
<Footer/>
    </div>
  );
}

export default App;
