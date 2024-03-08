import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import data from '../../data/twelveProducts.js';
import GameCard from '../../components/GameCard/GameCard.jsx';

function DreasPage() {
  const { products } = data;
  const title = 'Filters';
  
  return (
    <>
      <h1 style={{ marginTop: "60px" }}>Sidebar Demo</h1>
      <div className="container" style={{ marginBottom: "100px" }}> 
            <Sidebar/>
      </div>
    </>
  );
}

export default DreasPage;