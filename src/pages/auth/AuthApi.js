// export function postLoginData(){
//     return new Promise(async(resolve, reject)=>{
//         try {
//             const data = await fetch("http://localhost:8000/user/postlogin");
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