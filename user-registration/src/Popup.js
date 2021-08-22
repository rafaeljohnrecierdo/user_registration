import React, { useState, useEffect } from 'react'


    const [data, setData] = useState({
        name: '',
        dateAdded: '',
        desc: '',
        phone: ''
    });

    useEffect(() => {
        if(user) setData(user);
    }, [])


    const addUser = () => {

        const uData = {
            name: data.name,
            dateAdded: storeDate,
            desc: data.desc,
            phone: data.phone,



        setPopup(false)
    }
}

export default Popup
