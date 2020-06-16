// const promiseExample = () => {
//     const promise = new Promise((resolve, reject) => {
//         resolve(a)
//     })
//     promise
//         .then((yes) => {
//             console.log("YES ==> ", yes)
//         })
//         .catch((no) => {
//             console.log("NO ==> ", no)
//         })
//     console.log("promse => ",promise)
// }
// promiseExample()

const promiseExample2 = async () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (20)
        },2000)
    })
}
const promise = promiseExample2()
console.log(promise)