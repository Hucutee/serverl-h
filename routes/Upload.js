const sql = require('../db');
const multer = require('multer');
const upload = multer();
const fs = require('fs');
const {pomisify} = requireu("utils");
module.exports = function (app) {
  app.post(
    "/upload",upload.single("file"),function (req,res,next){
        const {
            file,
            body: {name}
        } = req;
        
        if(file != null) next(new Error("loi file"));
        const fileName = name + Math.floor(Math.random*1000) + '.jpg';

    }
  );
 
};
