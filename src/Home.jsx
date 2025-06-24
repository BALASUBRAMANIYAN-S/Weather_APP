import { useContext } from "react"
import { Namecontext} from "./App"
function Home() {
 const data = useContext (Namecontext )
  return(
    <><h1>My Name is <p style={{color:'red'}}> {data}</p> he is very brilliend </h1></>
  )
}

export default Home