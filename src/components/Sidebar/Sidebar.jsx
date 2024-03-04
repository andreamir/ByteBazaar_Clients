import { useState } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 300px;
  height: 600px;
  background-color: #F9F9F9;
`;

const filters = [
  { title: 'Genre', options: ['Platforms', 'Rol', 'Accion', 'Fantasy'] },
  { title: 'Platforms', options: ['PS5', 'Nintendo Switch'] },
];

function Sidebar(props) {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [checked, setChecked] = useState([]);
  const { title } = props;
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

  return (
    <StyledSidebar>
      <h2>{title || 'Optional title'}</h2>
      <div className="accordion">
        {filters.map((filter, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expandedIndexes.includes(index) ? 'collapsed' : ''}`}
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
                            {option}
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
