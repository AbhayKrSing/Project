import React, { useEffect } from 'react'
// import axios from 'axios';
const Chatpage = () => {
  const fetchData = async () => {
    //  const res= await axios.get('/api/chats')
    //  console.log(res) 
    //  console.log(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <React.Fragment>
      I M Chatpage
    </React.Fragment>
  )
}

export default Chatpage
