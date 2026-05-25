import { useState } from "react"
import JsxPracticeTask from "./components/JsxPracticeTask"
import Moviecard from "./components/moviecard"
import Greetings from "./components/greetings"
function App() {

  const [count, setCount] = useState(0);
  
  return (
    
    <div>
        <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    </>
      

         <JsxPracticeTask />
         

          <hr/>
          
          <Greetings />

          <hr/>



         <Moviecard title="Inception" genre="Sci-Fi" rating="8.8" duartion="2h 28m" img="https://th.bing.com/th/id/OIP.aBtnNKt5_4K6TQyjgT4XfgHaKy?w=207&h=301&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="The Dark Knight" genre="Action" rating="9.0" duartion="2h 32m" img="https://th.bing.com/th/id/OIP.fHpPU6o1tvzQqqBoUR3mLAHaKw?w=207&h=301&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="Interstellar" genre="Sci-Fi" rating="8.6" duartion="2h 49m" img="https://th.bing.com/th/id/OIP.aQHX3A1wOkGE-4-MWO-tGQHaK0?w=206&h=302&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="Parasite" genre="Thriller" rating="8.6" duartion="2h 12m" img="https://th.bing.com/th/id/OIP.cRCBitsHPGQM5SAwWm0_-QHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="Korean" />
         <Moviecard title="The Godfather" genre="Crime" rating="9.2" duartion="2h 55m" img="https://th.bing.com/th/id/OIP.BV6gCt1rwqEmjRnWZ-sdPAHaLK?w=203&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="The Shawshank Redemption" genre="Drama" rating="9.3" duartion="2h 22m" img="https://th.bing.com/th/id/OIP.DmJtteBKFeYNA7_FeuviagHaF0?w=208&h=164&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="City of God" genre="Crime" rating="8.6" duartion="2h 10m" img="https://th.bing.com/th/id/OIP.gYJKyNFI6H86Zj-Y-pTWRgHaK9?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="Portuguese" />
         <Moviecard title="Spirited Away" genre="Animation" rating="8.6" duartion="2h 5m" img="https://th.bing.com/th/id/OIP.XXS3BLCtfkhL1Hzlo0h7WQHaKz?w=208&h=301&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="Japanese" />
         <Moviecard title="The Lion King" genre="Animation" rating="8.5" duartion="1h 28m" img="https://th.bing.com/th/id/OIP.-6ReGOQirYEJ8_MGEw9HQgHaLH?w=203&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
         <Moviecard title="Pulp Fiction" genre="Crime" rating="8.9" duartion="2h 34m" img="https://th.bing.com/th/id/OIP.Ssqv0hPrNRKuJqysSLonhAHaJr?w=208&h=272&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" language="English" />
    </div>
  )
}

export default App
