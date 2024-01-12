import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes/routes';
import * as cors from 'cors';

const uri = "mongodb+srv://AngelRamirez:PpZwTQYXUQVooxzc@cluster0.2jxaya7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });

server.on('error', console.error);