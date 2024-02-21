import { useState } from 'react';
import img1 from '../logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStateFilter } from '../redux/slices/FilterSlice';
import { setQuery } from '../redux/slices/SearchSlice';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state:any) => state.cart);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleHome = () => {
    navigate('/', { replace: true });
  };
  const handleCart = () => {
    navigate('/cart', { replace: true });
  };
  
  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    dispatch({ type: 'logout' });
    navigate('/login', { replace: true });
  };
  const handleSearch = (event: any) => {  
    setSearchQuery(event.target.value);
    dispatch(setQuery(searchQuery));
  };
  const handleFilter = (event: any) => {
    dispatch(setStateFilter(event.target.value));
  };
  return (
    <nav className="bg-gray-800 py-2 fixed top-0 w-full z-10">
      <div className="container flex items-center justify-between">
        <img
          className="cursor-pointer w-10 ml-48"
          onClick={handleHome}
          src={img1}
          alt="Logo"
        />
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="mr-4 px-2 py-1 rounded-lg focus:outline-none"
          />
          <select
            className="mr-4 px-2 py-1 rounded-lg focus:outline-none"
            onChange={handleFilter} 
          >
            <option value={Infinity}>All</option>
            <option value={10}>$10 or less</option>
            <option value={20}>$20 or less</option>
            <option value={50}>$50 or less</option>
            <option value={100}>$100 or less</option>
            <option value={500}>$500 or less</option>
          </select>
          <div
            onClick={handleCart}
            className="relative cursor-pointer text-white text-2xl"
          >
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-2 bg-green-600 text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <button className="text-white ml-4" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
