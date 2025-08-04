import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import PetProfile from '../pages/Pets/index';
import AddPet from '../pages/AddPets/index';
import PetsDetails from '../pages/PetsDetails/index';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetProfile />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/pets-details" element={<PetsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}