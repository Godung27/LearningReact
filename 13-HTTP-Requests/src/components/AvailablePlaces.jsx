import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPlaces = async function () {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/placesssssssssss");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed")
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || "Not fetch places" });
      }

      setIsFetching(false);
    }

    fetchPlaces();
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
