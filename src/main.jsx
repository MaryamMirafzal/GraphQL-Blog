// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider , ApolloClient , InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'

import App from './App.jsx'
import './styles/index.css'
import './styles/fonts.css'


const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI ,
  cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
)
