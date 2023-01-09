import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import {TbGitFork} from "react-icons/tb"
import {AiOutlineStar} from "react-icons/ai"

const Projects = ({repo}) => {
    const route=useRouter()
    const handleclick=(id)=>{
        route.push(id)
      }
  return (
    <div>
    <h1 style={{fontSize:"30px",color:"yellow",textAlign:"center",margin:"3%"}}>Projects</h1>
       <div className="right" style={{margin:"auto",width:"80%"}}>
              {
                repo.items.map((ele,ind)=>{
                    return(
                      <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}} key={ind} onClick={()=>handleclick(ele.html_url)}>
                      <div>
                        <h1 className='repos'>{ele.name}</h1>
                        <p>{ele.description}</p>
                        </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"5%",height:"auto"}}>
                      <div style={{display:"flex",gap:"10px"}} >
                        <TbGitFork/>
                        {ele.forks_count}
                        <AiOutlineStar/>
                        {ele.stargazers_count}
                        </div>
                        <div>
                         <h1> {ele.language}</h1>
                        </div>
                      </div>
                      </div>
                    )
                })
              }
          </div>
    </div>
  )
}
export async function getServerSideProps(context){
  let res2=await axios.get("https://api.github.com/search/repositories?q=user:geraltyen+fork:true&sort=updated&per_page=10&type=Repositories")
  return{
    props:{
      repo:res2.data
    }
  }
}
export default Projects