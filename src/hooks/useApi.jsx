// import { useEffect, useState } from "react";

// const UseApi = (params) => {
//     let [users, type] = params
//     let method = (type === "get") ? {method:'GET'} : ''
//     const URL = `http://localhost:5000/${users}`;
//     // let [data, setData] = useState(null)
//     useEffect(()=>{
//         getData()
//     },[])
//     let getData = async ()=>{
//         let response = await fetch(`${URL}`, method);
//         let result = response.json();
//         try{
//             console.log(result)
//         }catch(error){
//             console.log(error)
//         }
//     }
//     // console.log('data ', data)
//     // return [data];
// }
// export default UseApi;


    // // let [data, setData] = useState('adeas')
    // let [users, type] = params
    // let method = (type === "get") ? {method:'GET'} : ''
    // const URL = `http://localhost:5000/${users}`;
    // let response = fetch(`${URL}`, method)
    // .then(resp=>{
    //     if (resp.ok) {
    //         let result = resp.json();
    //         return result;
    //     }
    // })
    // .then(result=>{
    //     // console.log(data)
    //     // console.log(result)
    //     return [result]
    // })
    // // console.log(data)