const express =require('express');
const newsRouter=express.Router();
const axios=require('axios');
newsRouter.get('',async(req,res)=>
{
   try {
    // https://newsapi.org/v2/everything?q=Apple&from=2023-10-1&sortBy=popularity&apiKey=fd745738c28f4f1786d00ec4f01c522c
    const newsApi=await axios.get('https://raddy.dev/wp-json/wp/v2/posts');
    // console.log(newsApi.data);
    // articles=newsApi.data.article;
    res.render('news',{articles:newsApi.data});
     //console.log(articles);
   } catch (error) {
       if(error.response){
        res.render('news',{articles:null});
        console.log(error.response.data);
        console.log(error.response.headers);
        console.log(error.response.status);
       }
       else if(error.request){
        res.render('news',{articles:null});
        console.log(error.request);
       }
       else{
        res.render('news',{articles:null});
        console.log("Error",error.message);
       }
   }
});


newsRouter.get('/:id',async(req,res)=>
{
  let articleID =req.params.id;
   try {
    // https://newsapi.org/v2/everything?q=Apple&from=2023-10-1&sortBy=popularity&apiKey=fd745738c28f4f1786d00ec4f01c522c
    const newsApi=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
    // console.log(newsApi.data);
    // articles=newsApi.data.article;
    res.render('newSingle',{art:newsApi.data});
     //console.log(articles);
   } catch (error) {
       if(error.response){
        res.render('news',{art:null});
        console.log(error.response.data);
        console.log(error.response.headers);
        console.log(error.response.status);
       }
       else if(error.request){
        res.render('news',{art:null});
        console.log(error.request);
       }
       else{
        res.render('news',{art:null});
        console.log("Error",error.message);
       }
   }
});
module.exports=newsRouter;