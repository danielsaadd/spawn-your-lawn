import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ReactLogo from '../../assets/react.svg';

export const SearchPlants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async() => {
    if (!searchTerm) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://perenual.com/api/species-list?page=1&key=${process.env.PERENUAL_API_TOKEN}&q=${searchTerm}`
      );

      const plantData = response.data.data;
      setPlants(plantData);
    } catch (error) {
      console.error('Error searching plants:', error);
    }

    setIsLoading(false);
  };

  const handleSearchDelayed = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        handleSearch();
      }, 500)
    );
  };

  const openPlantDetails = (plantId: number ) => {
    navigate(`/plants/${plantId}`);
  };

  const searchContainerClass = `flex flex-col h-full items-center overflow-y-auto ${
    plants.length ? '' : 'justify-center'
  }`;
  const searchBarClass = `${plants ? 'my-4' : ''}`;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const plantParam = searchParams.get('plant');
    if (plantParam) {
      setSearchTerm(plantParam);
    }
  }, [location]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const navigateToSearch = () => {
    navigate(`/search?plant=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className={searchContainerClass}>
      <div className={searchBarClass}>
        <input
          className="input input-primary"
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            handleSearchDelayed();
          }}
        />
        <button className="btn btn-primary" onClick={navigateToSearch}>
        Search
        </button>
      </div>

      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <ReactLogo className="logo spin-animation" />
        </div>
      ) : plants.length > 0 && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-full">
          {plants?.map((plant) => (
            <div key={plant.id} className="card shadow-lg" onClick={() => openPlantDetails(plant.id)}>
              <img src={plant.default_image?.thumbnail} alt={plant.common_name} className="w-full h-48 object-cover" />
              <div className="card-body bg-primary flex flex-col items-center">
                <h3 className="card-title text-center">{plant.common_name}</h3>
                <p className="card-text">{plant.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
