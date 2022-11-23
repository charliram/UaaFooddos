const router = require('express').Router();
const conexion = require('../config/conexion');

router.get('/',(req,res)=>{
    let sql ='select * from locales'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});
 