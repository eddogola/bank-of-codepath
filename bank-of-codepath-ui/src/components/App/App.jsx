import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import "./App.css"

export default function App() {
  // a boolean representing whether or not the app is currently requesting data from the API
  const [isLoading, setIsLoading] = React.useState(true)
  //  the list of bank transaction items fetched from the API
  const [transactions, setTransactions] = React.useState([])
  // the list of bank transfer items fetched from the API
  const [transfers, setTransfers] = React.useState([])
  // any errors associated with fetching data from the API
  const [error, setError] = React.useState("")
  // a string value used to create a controlled input in the FilterInput.jsx component
  const [filterInputValue, setFilterInputValue] = React.useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="transactions/:transactionId" element={ <TransactionDetail /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
