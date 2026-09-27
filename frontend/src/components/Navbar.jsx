import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Event Photography</h2>

      <Link to="/">Home</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/packages">Packages</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/photo-delivery">Photo Delivery</Link>
      <Link to="/promotions">Promotions</Link>
      <Link to="/reviews-complaints">Reviews & Complaints</Link>
    </nav>
  );
}

export default Navbar;