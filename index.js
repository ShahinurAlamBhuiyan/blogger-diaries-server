import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogs.js';
import adminRoutes from './routes/admins.js';

const app = express();
dotenv.config();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/blogs', blogRoutes);
app.use('/admin', adminRoutes)

app.get("/", (req, res) => {
  res.send('welcome to bloggers diaries server');
});


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wqbxu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>{
    app.listen(PORT, () =>{
      console.log(`Server run on PORT ${PORT}`)
    })
  })
  .catch((error) => console.log(`${error} found!!!`));

  mongoose.set("useFindAndModify", false);
