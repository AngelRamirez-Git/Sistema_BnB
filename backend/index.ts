import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes/routes';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

const uri = "mongodb+srv://AngelRamirez:PpZwTQYXUQVooxzc@cluster0.2jxaya7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(router);

const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });

server.on('error', console.error);