import React from 'react';
import './GameCatalog.css';
import StyledBody from '../../components/Styled/Body.js';
import StyledContent from '../../components/Styled/Content.js';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import data from '../../data/twelveProducts.js';
import ProductList from '../../components/ProductList';

function GameCatalog() {
  const { products } = data;

  return (
    <>
      <StyledBody>
        <StyledContent>
          <div className="container" style={{ marginBottom: '100px' }}>
            <div className="row">
              <div className="col-md-3">
                <Sidebar gameData={products} />
              </div>
              <div
                className="col-md-9"
                style={{ display: 'flex', flexWrap: 'wrap' }}
              >
                <ProductList />
              </div>
            </div>
          </div>
        </StyledContent>
      </StyledBody>
    </>
  );
}

export default GameCatalog;
