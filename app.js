const express=require('express');
const app=express();
var ejs = require('ejs');
const port=process.env.PORT || 5000;
const bodyParser=require('body-parser');
var cors=require('cors');


app.use(cors());
app.use(bodyParser.json());//parsing coming requests
app.use(bodyParser.urlencoded({
    extended: true
}));

//global variable
var value=[];
//ejs templating engine
app.set('view engine', 'ejs');

//get requests
app.get('/',(req,res)=>{

  res.render('index',{

      data:value

  });
});

//handling post requests coming from client side
app.post('/',(req,res)=>{

  const data=req.body;
  if(data){

    value=data['user'];

  }
//data from oist requests
  console.log('value from react data:',value);
 

});


//listening on port 5000

app.listen(port,()=>{

	console.log(`server is running on ${port}`);

});