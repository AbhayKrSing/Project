const PDF = require('../model/ResumeModel')

const savePdf = async (UserDetails, LoginUserid) => {
    try {
        console.log(UserDetails, LoginUserid)
        let { User, Name, Email, Work, Website, Address, Phone, Summary, Education, Skills, pic } = UserDetails
        User = LoginUserid
        const data = await PDF.create({ User, Name, Email, Website, Work, Address, Phone, Summary, Education, Skills, pic })
        return data
    }

    catch (error) {
        return error.message
    }
}

module.exports = { savePdf }