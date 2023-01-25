// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 1000)

// console.log("3")




// // const loadPokemon= (id, cb)=>{
// //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
// //     .then(res => res.json())
// //     .then(data=> {
// //         cb(data)
// //     })
// // }

// // loadPokemon(56, (name)=>{
// //     console.log(name)
// // })


// const{ readFile} =require('fs').promises

// // const txt= readFileSync('./hello.txt', 'utf-8')
// // console.log(txt)

// // readFile('./hello.txt', 'utf-8', (err,txt)=> {
// //     console.log(txt)
// // })
// async function hello(){
//     const txt= await readFile('./hello.txt', 'utf-8')
// }

// // const txt= await readFile('./hello.txt', 'utf-8')
// console.log('abc')


// const express= require('express')
// const { readFile } = require('fs').promises
// const app= express()

// app.get('/', (request, response)=> {
//     readFile('./home.html', 'utf-8', (err, html)=>{
//         if(err)
//         {
//             response.status(500).send('sorry, OOO')
//         }
//         else{ 
//             response.send(html)
//         }
//     })
// })

// app.get('/', async(request, response)=>{
//     response.send(await readFile('./home.html', 'utf-8'))
// })

// app.listen(process.env.PORT || 3000, ()=> console.log(`App available on http://localhost:3000 `))


const xyz= require('./tp')

console.log(xyz)

