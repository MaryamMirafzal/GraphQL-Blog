import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/home/HomePage'
import Layout from './components/layout'
import AuthorPage from './components/author/AuthorPage'
import BlogPage from './components/blog/BlogPage'



function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs/:slug' element={<BlogPage />} />
        <Route path='/authors/:slug' element={<AuthorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
