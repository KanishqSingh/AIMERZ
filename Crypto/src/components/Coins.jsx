import React, { useEffect, useState } from 'react'
import { server } from '../Constant';
  import axios from 'axios';
import Loader from './Loader';
import CoinCard from './CoinCard';
const Coins = () => {
  const[coins,setCoins]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  const[page,setPage]=useState(1);
  const[currency,setCurrency]=useState("inr");

  const btns=new Array(132).fill(1);
console.log('btns',btns);
console.log("slice",btns.slice(0,10));


  const currencySymbol=
  currency==="inr"?"₹":currency==="eur"?"€":"$";
useEffect(()=>{
  const fetchCoins=async ()=>{
    try{
      const {data}=await axios.get(
        `${server}/coins/markets?vs_currency=${currency}&page=${page}`
      )
      console.log('data',data);
      setCoins(data);
      setLoading(false);
    }

    catch(e){
      setError(true);
      setLoading(false);
      console.log(e);
      
    }
  }

  fetchCoins();
},[currency,page])

  return (
   <>
  <div>
    {loading?
    <Loader/>:
    (
      <>
      <div>
        <button>INR</button>
        <button>USD</button>
        <button>Eur</button>
      </div>


      {/* coins card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {coins.map((coin)=>(
          <CoinCard id={coin.id} name={coin.name} price={coin.current_price} img={coin.image} symbol={coin.symbol} currencySymbol={currencySymbol}/>
        ))}
      </div>

      {/* pagination */}
      <div className="flex">
        <div className="flex">
          {btns.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  className={`px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    page === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                  }`}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
        </div>
      </div>
      </>
    )
    
    
    }
  </div>
   </>
  )
}

export default Coins