import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:parth181195@ds145299.mlab.com:45299/meetup');
    mongoose.connection
        .once('open', () => console.log('Mongodb running'))
        .on('error', err => console.error(err))
};