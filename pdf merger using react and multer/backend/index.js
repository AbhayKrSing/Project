const express = require('express')
const PDFMerger = require('pdf-merger-js');
const merger = new PDFMerger();
const fs = require('fs')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const cors = require('cors')
app.use(cors())
app.post('/merge', upload.array('files', 12), async (req, res) => {
    try {
        // const files_array = req.body  not this
        const files_array = req.files        //req.files are used rather than req.body
        console.log(files_array)   //just to see what comes under req.body
        console.log(req.body)   //just to see what comes under req.body


        for (value of files_array) {
            await merger.add(`./uploads/${value.filename}`);
        }

        await merger.save('./Merged-files/merged.pdf')
        res.status(200).send({ success: 'Done successfully merged' })
        for (value of files_array) {
            fs.unlinkSync(`./uploads/${value.filename}`)
        }

    } catch (error) {
        console.log(error.message)
    }


})

app.delete('/delete', (req, res) => {
    fs.unlinkSync(`./Merged-files/merged.pdf`)
    res.json({ success: 'Done' })
})
app.post('/download', (req, res) => {
    res.download(__dirname + '/Merged-files/merged.pdf', (err) => {         //You send file of download.
        if (err) { console.log(err) }
    })
})
app.listen(4000)








