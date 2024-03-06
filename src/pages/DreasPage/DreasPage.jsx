import Sidebar from "../../components/Sidebar/Sidebar";
import data from '../../data/twelveProducts.js';
import GameCard from '../../components/GameCard/GameCard.jsx';

function DreasPage() {
  const { products } = data;
  const title = 'Filters';
  
  return (
    <>
      <h1 style={{ marginTop: "60px" }}>Dreas Page 👩🏻‍💻</h1>
      <div className="container" style={{ marginBottom: "100px" }}> 
        <div className="row">
          <div className="col-md-3">
            <Sidebar title={title}/>
          </div>
          <div className="col-md-9">
            <div className="row">
              {products.map((product, index) => (
                <div key={product._id} className="col-md-4 mb-4">
                  <GameCard data={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DreasPage;
