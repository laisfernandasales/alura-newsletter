import { useState } from 'react'
import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"
import "./App.css"

function App() {
   return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"> 
   <Header />
   <ArticleList />
   </div>
  )
 
}

export default App