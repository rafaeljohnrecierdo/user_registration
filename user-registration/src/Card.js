import React, { useState, useEffect } from 'react'


    return (
        <div>
            {
                popup && <Popup setPopup={setPopup}
                user={cardUser} setUsers={setUsers}
                setCardUser={setCardUser}/>
            }
            {(type === 'card') ? (


                    </div>
                    <div className="btn-container">
                      
                </div>
            ) : (
                    <div className="addcards"
                        onClick={() => setPopup(true)}>
                        <AddCircleOutlineIcon />
                    </div>
                )}


        </div>

    )
}

export default Card
