let p1 = new Promise((resolve,reject)=>{
    let isValid = true;
    if(isValid){
      setTimeout(()=>{   
        resolve("success1")
      },2000)
    }
    else{
        reject("reject1")
    }
})
let p2 = new Promise((resolve,reject)=>{
    let isValid = true;
    if(isValid){
           resolve("success2")
    }
    else{
        reject("reject2")
    }
})
let p3 = new Promise((resolve,reject)=>{
    let isValid = true;
    if(isValid){
        resolve("success3")
    }
    else{
        reject("reject3")
    }
})
let p4 = new Promise((resolve,reject)=>{
    let isValid = false;
    if(isValid){
        resolve("success4")
    }
    else{
        reject("reject4")
    }
})
p1.then((res)=> {
    setTimeout(()=>{console.log(res)},1000)
    return p2;
}).catch((err)=> {
    console.error(err);
    return p2;
}).then((suc)=>{setTimeout(()=>{console.log(suc)},3000)
    return p3;
}).catch((err)=>{
    console.error(err);
    return p3;
}).then((suc)=>{setTimeout(()=>console.log(suc),5000)
    return p4;
}).catch((err)=>{
    console.error(err)
    return p4;
}).then((suc)=>setTimeout(()=>console.log(suc),0)).catch((err)=>console.error(err))
