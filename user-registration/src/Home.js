import React, {useEffect, useState} from 'react'

const Home = () => {

    const [users, setUsers] = useState()

    useEffect(()=>{
        .then(res => {
            setUsers(res.data)
        })
    },[])


    console.log(users)

    return (
        <div>
            <div className="container">
                {users && users.map(user => (
                    <Card type="card" key='name'
                    user='name' allusers='name'
                    setUsers='type'/>
                ))}

                <Card type="add" setUsers={setUsers}/>
            </div>
        </div>
    )
}

export default Home;
