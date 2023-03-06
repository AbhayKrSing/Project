const express = require('express')
const path = require('path')
const fileupload = require('express-fileupload')   //npm package to upload files on server
const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();
const app = express()
app.use(fileupload())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.status(200).render('index')
})
app.post('/merge', async (req, res) => {
    try {
        const files_array = req.files.files
        console.log(files_array)
        for (value of files_array) {
            await value.mv('./upload/' + value.name)        //yeha pe await nhi likha tha isliye error aa rha tha.
            await merger.add(`./upload/${value.name}`);
            // const pdfData = fs.readFileSync(`./upload/${value.name}`);
            //  await merger.add(pdfData);
        }

        await merger.save('./upload/merged.pdf');
        // res.sendFile(__dirname + '/upload/merged.pdf', (err) => {     // using  __dirname we get exact location of file which you want to send.     
        //     if (err) {
        //         console.log('not able to sendfile')
        //     }
        // })
        res.download(__dirname + '/upload/merged.pdf',(err)=>{         //You send file of download.
            if(err){
                console.log(err)
            }
            else{
                console.log('Done')
            }
        })


    } catch (error) {
        console.log(error.message)
    }


})

app.listen(4000)








