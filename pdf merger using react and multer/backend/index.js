const express = require('express')
const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const cors=require('cors')
app.use(cors())
app.post('/merge',upload.array('files',12) ,async (req, res) => {
    try {
        // const files_array = req.body  not this
        const files_array=req.files        //req.files are used rather than req.body
        console.log(files_array)   //just to see what comes under req.body
        console.log(req.body)   //just to see what comes under req.body


        for (value of files_array) {
            await merger.add(`./uploads/${value.filename}`);
        }

        await merger.save('./Merged-files/merged.pdf');
        // res.download(__dirname + '/upload/merged.pdf',(err)=>{         //You send file of download.
        //     console.log(err)
        // })
        res.status(200).send({success:'Done successfully merged'})


    } catch (error) {
        console.log(error.message)
    }


})

app.listen(4000)








