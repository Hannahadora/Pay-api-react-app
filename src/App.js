import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Pricing, Contact , Signup} from './pages/index'
import { Suspense } from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </Layout>
    </Suspense>
  );
}

export default App;
