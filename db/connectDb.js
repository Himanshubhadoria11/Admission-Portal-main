const mongoose = require('mongoose')
const live_url='mongodb+srv://himanshu:Hsb81996@cluster0.klwkh7z.mongodb.net/Admission_Portal?retryWrites=true&w=majority&appName=Cluster0'
const local_url = 'mongodb://127.0.0.1:27017/Admission_Portal'

const connectDb = () => {
    return mongoose.connect(live_url)
        .then(() => {
            console.log('connect Success')
        }).catch((error) => {
            console.log(error)
        })
}
module.exports = connectDb