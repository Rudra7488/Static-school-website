import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy Admin Credentials
    const dummyEmail = 'principal@vidyabharatischool.education';
    const dummyPass = 'Vidyabharati@321';

    if (email === dummyEmail && password === dummyPass) {
      console.log('Login Successful');
      // For now, we'll use a simple localStorage flag or just navigate
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid Admin Credentials! Please use principal@vidyabharatischool.education / Vidyabharati@321');
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] flex items-center justify-center px-5 py-[120px]">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-10 text-white text-center relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 text-5xl">🔐</div>
          <h2 className="text-3xl font-black font-serif italic mb-2">Admin Portal</h2>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Secure Access Only</p>
        </div>

        {/* Form */}
        <div className="p-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Email Address</label>
              <input 
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="principal@vidyabharatischool.education"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-primary font-black text-xs uppercase tracking-widest ml-2">Password</label>
              <input 
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-secondary focus:bg-white outline-none transition-all font-bold text-gray-700"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-secondary text-white font-black py-5 rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/30 uppercase tracking-widest text-sm"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-primary text-xs font-black uppercase tracking-widest transition-colors"
            >
              ← Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
