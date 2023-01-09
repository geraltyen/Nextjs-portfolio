import React from 'react'
import Link from "next/link"
const Navbar = () => {
    const style={
        display:"flex",
        gap:"2rem",
        padding:"3%",
        fontSize:"20px",
        listStyleType:"none",
        margin:"1%"
    }
  return (
    <div >
        <ul style={style}>
            <Link href="/"><li>R Giri Reddy</li></Link>  
          <Link href="/projects"><li>Projects</li></Link>  
            <Link href="/experience"><li>Experience</li></Link>    
        </ul>
    </div>
  )
}

export default Navbar