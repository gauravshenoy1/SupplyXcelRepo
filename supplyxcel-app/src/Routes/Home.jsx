import React from 'react'
import home from "../Components/Images/Web.png"
function Home() {
  return (
    <div className='da' style={{width:"100%",height:"99.9%"}}>
        <img src={home} style={{width:"100%",maxHeight: "-webkit-fill-available",borderRadius:"5px"}} alt="Welcome Home"  />
    </div>
  )
}

export default Home