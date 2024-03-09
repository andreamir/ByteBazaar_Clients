import { useState, useEffect } from 'react';
import StyledSidebar from './StyledSidebar';
import { useFiltersContext } from '../../contexts/FiltersContext';

function SidebarComponent(props) {
  const genresData = props.genresData;
  const platformsData = props.platformsData;
  const gamesData = props;
  const { handleCheckbox } = useFiltersContext();

  // console.log('gamesData',gamesData);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [checkedPlatforms, setCheckedPlatforms] = useState([]);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checked, setChecked] = useState([]);
  const [games, setGames] = useState([]);


  function getFilters() {

    const genreOptions = genresData.map(genres => genres.name);
    // console.log('genreOptions',genreOptions);
    const platformsOptions = platformsData.map(platforms => platforms.name);
    // console.log('platformsOptions',platformsOptions);
    const filters = [{title: 'Platforms', options: platformsOptions}, { title: 'Genres', options: genreOptions}, ];
    return filters;
  }
  
  //WIP
  function handleClickExpanded(index) {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  }
  
  // //WIP
  // function handleCheckbox(option,index) {
  //   if (checked.includes(option)) {
  //     setChecked(checked.filter((checked) => checked !== option));
  //   } else {
  //     setChecked([...checked, option]);
  //   }
  // }

  // useEffect(() => {
  //   console.log('Filter checked', checked);
  // }, [checked]); 
  
  const filters = getFilters();
  

  return (
    <StyledSidebar>
      <div className="accordion">
        {filters.map((filter, index) => (
          <div className="accordion-item" style={{ backgroundColor: '#F9F9F9' }} key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${expandedIndexes.includes(index) ? '' : 'collapsed'} bg-light`}
                type="button"
                style={{ backgroundColor: '#F9F9F9' }}
                aria-expanded={expandedIndexes.includes(index)}
                onClick={() => handleClickExpanded(index)}
              >
                {filter.title}
              </button>
            </h2>
            {expandedIndexes.includes(index) && (
              <div className="accordion-collapse collapse show" id={`Accordion${index}`}>
                <div className="accordion-body bg-light">
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

export default SidebarComponent;
