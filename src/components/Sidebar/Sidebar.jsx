import { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/twelveProducts';

const StyledSidebar = styled.div`
  width: 300px;
  min-height: 600px;
  height:auto;
  background-color: #F9F9F9;
`;

function Sidebar(props) {
  function getFilters() {
    const filters = [{ title: 'Genre', options: []}, { title: 'Platforms', options: []},];
  
    data.products.forEach(product => {
      if (!filters[0].options.includes(product.genre)) {
        filters[0].options.push(product.genre);
      }
  
      if (product.platform_id?.name && !filters[1].options.includes(product.platform_id.name)) {
        filters[1].options.push(product.platform_id.name);
      }
    });
    
    return filters;
  }
  
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [checked, setChecked] = useState([]);

  function handleClickExpanded(index) {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  }

  function handleCheckbox(option) {
    if (checked.includes(option)) {
      setChecked(checked.filter((checked) => checked !== option));
    } else {
      setChecked([...checked, option]);
    }
    console.log('Option checked', checked);
  }

  const filters = getFilters();

  return (
    <StyledSidebar>
      <h2>{props.title || 'Optional title'}</h2>
      <div className="accordion">
        {filters.map((filter, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expandedIndexes.includes(index) ? '' : 'collapsed'}`}
                style={{ backgroundColor: '#f9f9f9' }}
                type="button"
                aria-expanded={expandedIndexes.includes(index)}
                onClick={() => handleClickExpanded(index)}
              >
                {filter.title}
              </button>
            </h2>
            {expandedIndexes.includes(index) && (
              <div className="accordion-collapse collapse show" id={`Accordion${index}`}>
                <div className="accordion-body">
                  <div className="row">
                    {filter.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={option}
                            id={`checkbox-${index}-${optionIndex}`}
                            onChange={() => handleCheckbox(option)}
                          />
                          <label className="form-check-label" htmlFor={`checkbox-${index}-${optionIndex}`}>
                            {option}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
