import { useEffect, useState } from "react"
import User from "./User"


export default function List(){


    const [userList , setUserList] = useState([])


    const getUsers = ()=>{

         fetch("http://localhost:5165/User/getUsers")
        .then(response=>response.json())
        .then(response=>setUserList(response))
    }

    const displayUsers = ()=>{
        return userList.map((user,key)=>{
            
            return <User user={user} key={key}  deleteUser={deleteUser}/> 
        })

    }

    const deleteUser = async (e)=>{
        e.preventDefault();
        const id = parseInt(e.currentTarget.dataset.id);
        try{
        const response = await fetch(`http://localhost:5165/User/delete/${id}`,{
            method: "DELETE",
        });

        if(response.status===200){

            const newUserList = userList.filter(e=>e.id !== id )
            setUserList(newUserList)
        }
        else if(response.status===404){
            console.log("user Not Found");
        }
        else{
            console.log("failed to delete user");
        }
    }catch(error){
        console.log(error);
    }
        
        
    }

    useEffect(()=>{
        getUsers()
       
    },[])
    return <>
    <h2 style={{ textAlign: "center" }}>List of Users</h2>

    <div className="container min-vh-100 d-flex justify-content-center ">
  <div className="w-100">
    <table className="table table-striped table-bordered table-hover table-responsive text-center shadow rounded">
      <thead className="table-dark">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="table-light">
       
        {displayUsers()}
      </tbody>
    </table>
  </div>
</div>

    
    </>
}