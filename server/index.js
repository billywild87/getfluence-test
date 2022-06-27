import path,{ dirname,join } from 'path';
import express, {json} from 'express';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorResponder,errorLogger,invalidPathHandler } from './middleware/errorMiddleware.js';
import AuthControllers from './controllers/AuthController.js';
import UserController from './controllers/UserController.js';
import ProgramControllers from './controllers/ProgramController.js';

const PORT = process.env.PORT || 8080;
dotenv.config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));



app.use(cors({
    origin: '*',
    credentials: true
  }));

app.use(json());

//static file open
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/icons', express.static(path.resolve(__dirname, 'media/icons')));
app.use('/avatars', express.static(path.resolve(__dirname, 'media/avatars')));

//controllers
app.use('/api/auth/',AuthControllers)
app.use('/api/user/',UserController)
app.use('/api/program/',ProgramControllers)

app.use(errorResponder)
app.use(errorLogger)

//ENTRER DE L'APPLICATION
app.get('*', (req, res) => {
  //res.send('hello world');
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});