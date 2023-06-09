import { FC } from 'react';

import { PlantDetails } from '../../features/plantDetails/PlantDetails';
import { Navbar } from '../layout/Navbar';

export const PlantDetailsPage: FC = () => {
  return (
    <div className='flex flex-col h-screen max-h-screen'>
      <Navbar />
      <PlantDetails />
    </div>
  );
};
