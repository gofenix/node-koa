const mongoose=require('mongoose');

module.exports = db = (uri) => new Promise((resolve, reject) => {
    mongoose.connection
        .on('error', error => reject(error))
        .on('close', () => console.log('database connection closed'))
        .once('open', () => resolve(mongoose.connections[0]));

    mongoose.connect(uri);
});