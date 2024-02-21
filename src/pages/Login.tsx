import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface FormInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginToggle, setLoginToggle] = useState(true);
  const [input, setInput] = useState<FormInput>({
    email: '',
    password: '',
  });
  if(localStorage.length === 0) {
    loginToggle===false;
  }
  const handleToggle = () => {
    setInput({ email: '', password: '' });
    setLoginToggle(!loginToggle);
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input.email === '' || input.password === '') {
      toast.error('Please fill all fields');
      return;
    }
    localStorage.setItem('user', JSON.stringify(input));
    setInput({ email: '', password: '' });
    handleToggle();
  }
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === input.email && user.password === input.password) {
      localStorage.setItem('loggedin', 'true');
      navigate('/', { replace: true });
    } else {
      toast.error('Invalid credentials');
    }
  }   
  return (
    <div className="flex justify-center items-center h-screen bg-slate-400">
      {!loginToggle ? (
        <div className='border rounded-lg p-5 auth-container bg-gray-700 text-white'>
          <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-2">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                placeholder='email'
                className="block w-full mt-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900 focus:border-gray-900"
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                placeholder='password'
                className="block w-full mt-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900 focus:border-gray-900"
              />
            </div>
            <div><button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Signup</button></div>
          </form>
          <p className="mt-4">Already signed up? <span className='underline cursor-pointer' onClick={handleToggle}>Login</span></p>
        </div>
      ) : (
        <div className='border rounded-lg p-5 auth-container bg-gray-700 text-white'>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-2">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                placeholder='email'
                className="block w-full mt-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900 focus:border-gray-900"
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                placeholder='password'
                className="block w-full mt-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900 focus:border-gray-900"
              />
            </div>
            <div><button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Login</button></div>
          </form>
          <p className="mt-4">Not Registered? <span className='underline cursor-pointer' onClick={handleToggle}>Signup</span></p>
        </div>
      )}
    </div>
  )
}

export default Login;
