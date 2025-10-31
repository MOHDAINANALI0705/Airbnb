const express = require('express');

const path=require('path');

const app = express();
app.set('view engine','ejs');
app.set('views','views')

const userRouter=require('./routes/userRouter');
const {hostRouter}=require('./routes/hostRouter');
const homeController=require('./controllers/error');
const{ mongoConnect} = require('./utils/databaseutils');

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);


app.use(homeController.handleError);

const PORT=3000;
mongoConnect(client =>{
  app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})
})
