import { useEffect, useState } from 'react';

const Home = () => {


    const [data, setData] = useState([])
    useEffect(() => {

        fetch('./productBangla.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
    }, [])

    console.log(data);




    return (
        <div>
            <h3 className="text-xl font-bold">This is Home component</h3>
           <div className="grid grid-cols-4 gap-4 items-center justify-center">

           {
                data.map((item, index) => <div className=' border rounded-lg p-2 justify-center flex flex-col items-center ' key={index}>
                 
                    <img className=' w-20 h-20' src={item.image} alt="" />
                    <h1 className="text-xl">{item.name}</h1>
 
                </div>)
            }
           </div>
        </div>
    );
};

export default Home;