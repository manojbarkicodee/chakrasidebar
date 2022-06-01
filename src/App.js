// import logo from './logo.svg';
import './App.css';
import styles from "./sidebar.module.css"

import {
  
  Box,
  Text
} from '@chakra-ui/react'
function App() {
  let data=[
    {icon:"fa-solid fa-house",showdata:"Home"},
{icon:"fa-solid fa-location-arrow",showdata:"Treanding"},

{icon:"fa-solid fa-compass",showdata:"Explore"},
{icon:"fa-solid fa-star",showdata:"Favorities"},
{icon:"fa-solid fa-gear",showdata:"settings"},
  ]
  return (
    <div className="App">
     <Box className={styles.main} >
<Text className={styles.text} >Logo</Text>
{data.map((el)=>(
  <Box className={styles.box}  >
  <i className={el.icon}></i>
  <Text fontSize="2xl">{el.showdata}</Text>
  </Box>
))}


  </Box>

    </div>
  );
}

export default App;
