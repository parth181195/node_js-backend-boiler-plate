import express from 'express';
import dbConfig from './config/db'
import middlewaresConfig from './config/middlewares'
import { MeetupRoutes, GroupRoutes } from './modules'


const app = express();

dbConfig();

middlewaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } {
        console.log(`app listen to port: ${PORT}`);
    }
})