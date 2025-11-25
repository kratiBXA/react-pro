import React, { useEffect ,useState} from 'react'

function Github() {
    const [data ,setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/kratiBXA')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);

        })
    },[])
    return (
        <div className='bg-gray-600 text-white p-6 text-center text-xl'>Github followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} className='mx-auto rounded-full center' />
        </div>
    )
}

export default Github
