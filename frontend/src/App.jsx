import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import BookingManagement from './pages/BookingManagement';
import PackageManagement from './pages/PackageManagement';
import AlbumManagement from './pages/AlbumManagement';
import PhotoDeliveryManagement from './pages/PhotoDeliveryManagement';
import PromotionManagement from './pages/PromotionManagement';
import ReviewComplaintManagement from './pages/ReviewComplaintManagement';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<BookingManagement />} />
        <Route path="/packages" element={<PackageManagement />} />
        <Route path="/albums" element={<AlbumManagement />} />
        <Route path="/photo-delivery" element={<PhotoDeliveryManagement />} />
        <Route path="/promotions" element={<PromotionManagement />} />
        <Route
          path="/reviews-complaints"
          element={<ReviewComplaintManagement />}
        />
      </Routes>
    </>
  );
}

export default App;