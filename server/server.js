import express from 'express';
import cors from 'cors';
// const cors = require('cors');/
import dotenv from 'dotenv';
import weatherRoutes from './routes/weather.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
