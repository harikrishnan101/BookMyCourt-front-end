import React, { useEffect, useState } from 'react'
import CourtData from './common/CourtDatas'
import AxiosInstance from '../config/axiosinstance'


function MyCourtComponents() {
    const [myCourtsData, setmyCourtsData] = useState([])
    useEffect(() => {
        try {
            AxiosInstance.get('/users/getMyCourtData').then((res) => {
                setmyCourtsData(res.data.data)
            })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className=' row d-flex  justify-content-center  gap-3 '>

            {
                myCourtsData.map(court =>
                    <CourtData data={court} />
                )
            }
  

        </div>
    )
}

export default MyCourtComponents;




