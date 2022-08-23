import { NextPage } from "next";
import Axios, { AxiosResponse } from "axios";

const CoinList: NextPage = ( { coinData }:AxiosResponse | any) =>{
    return(
        <div>
            {coinData.coins.map((coin:any) => {
                return (
                    <div>
                        <h1>{coin.name}</h1>
                        <img src={coin.icon} alt="" />
                        <h1>{coin.price}</h1>
                    </div>
                )
            })}
        </div>
    )
}

// Server side generation version
// This will render through the browser/build time
export const getStaticProps = async ( { params }:any ) => {
    // Fetch coin data
    const data = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
        )
    // Returns props to coinlist to avoid useEffect()
    return {
        props: {
            coinData: data.data
        },
        // Regens the page on incoming request based on interval
        revalidate: 10, 
        // Not the best in all cases
    }
}

// Server side rendering version
// This will render data at request time
// Use for real time/dynamic data
// export const getServerSideProps = async () => {
//     // Fetch coin data
//     const data = await Axios.get(
//         "https://api.coinstats.app/public/v1/coins?skip=0"
//         )
//     // Returns props to coinlist to avoid useEffect()
//     return {
//         props: {
//             coinData: data.data
//         }
//     }
// }

export default CoinList