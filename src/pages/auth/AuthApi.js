// export function postLoginData(){
//     return new Promise(async(resolve, reject)=>{
//         try {
//             const data = await fetch("BASE_URL/user/postlogin");
//             if(!data.ok){
//                 throw new Error(`HTTP error! status ${data.status}`)
//             }
//             const res = data.json();
//             resolve({res});    
//         } catch (error) {
//             reject(error);
//         }

//     })
// }