const asyncExample = async () => {
    return 10
}
asyncExample()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log("Error")
    })

const awaitResolved = async ()=>{
    const result = await asyncExample()
    console.log(result)
}
awaitResolved()