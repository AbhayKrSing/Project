const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.status(200).send('hello')
})
app.get('/merge',(req,res)=>{
    PDFMerge(['input-1.pdf', 'input-2.pdf'], 'output.pdf').then(function(done){
        console.log(done) // success
    }).catch(function(error){
        console.error(error.code) // Logs error code if an error occurs
    })
})

app.listen(4000)