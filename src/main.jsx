// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider , ApolloClient , InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:"https://eu-west-2.cdn.hygraph.com/content/cm1t8eh2803sg08ujxun2na35/master",
  cache: new InMemoryCache(),
})

import App from './App.jsx'
import './styles/index.css'
import './styles/fonts.css'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </ApolloProvider>,
)
