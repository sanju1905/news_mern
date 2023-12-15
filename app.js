const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const port=3001;
//static files
//prtahi sari access cheskoneki ststic chestham directory motham so / petti easy ga files access cheskovachu
app.use(express.static('public'));
const path = require("path");
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/img',express.static(path.join(__dirname,'public','img')));
app.use('/js',express.static(path.join(__dirname,'public','js')));

//templating engine
//view enjine ki views lo undevi display cheyamanu chepam
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//Routes
// Router ki name echesam
const newsRouter=require('./src/routes/news');
app.use('/',newsRouter);
app.use('/article/',newsRouter);

app.listen(port,()=>console.log(`listening on port ${port}`));