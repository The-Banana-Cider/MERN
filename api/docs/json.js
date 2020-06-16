const users = [
    {id: 1, username: 'bastolasuraj', password: 'ynirwiv6mk', address: 'surunga'},
    {id: 2, username: 'sbastola', password: 'yy2n4i4r9w', address: 'durgapur'},
    {id: 3, username: 'surajbastola', password: '4zi8vz0q*t', address: 'birtamode'},
    {id: 4, username: 'sbastola.com.np', password: 'iqv069m7kz', address: 'damak'},
];
let usernameList = []
// let filterUser
users.forEach((user, i) => {
    // console.log(`${i}=`, user);
    usernameList.push(user.username)
// if(user.id===1){
//     filterUser = user;
// }
})
console.log("usernameList from forEach() = ",usernameList)
console.log("UsernameList From map() = ",users.map((user,i)=>user.username))
// console.log("FilterUser = ",filterUser)
//using map lets us choose unique index in a easy way
/**
 for (let i in users){
    console.log(i)
    for (... in ...) loop displays the index of the json
}
 for(let i of users){
    console.log(i)
    for (... of ...) loop displays the data of the json
}
 forEach((user, i) => {
    console.log(`${i}=`, user);
});
 foreach((data,index)=>{
 console.log(`${index} ==`, data)
 })
 foreach loop displays both index as well as data
 */
console.log(users.filter((user,i)=>{return user.id===1}))