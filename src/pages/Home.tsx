import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Products'
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
const Home = () => {
  const API_URL = "https://dummyjson.com/products";

  const query = useSelector((state: any) => state.search.query) || '';
  const filterByPrice = useSelector((state: any) => state.filter.filter) || '';
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data.products);
      console.log(data);
    } catch (err) {
      console.log("Something went wrong");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className='my-8'>
      <div>
        <Navbar />
      </div>
      <div>
        {
          loading ? <div className='flex justify-center items-center h-screen'>
            <div className='flex justify-center items-center'>
              <Spinner />
            </div>
          </div> :
            posts.length > 0 ?
              (
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto 
        space-x-10 space-y-10 min-h-[60vh]'>
                  {
                    posts
                      .filter((post: any) =>
                        post.title.toLowerCase().includes(query.toLowerCase()) &&
                        post.price <= filterByPrice
                      )
                      .map((post: any) => (
                        <Product key={post.id} post={post} />
                      ))
                  }
                </div>
              ) :
              <div className='flex justify-center items-center'>
                <p>Products</p>
              </div>
        }
      </div>
    </div>
  )
}

export default Home;