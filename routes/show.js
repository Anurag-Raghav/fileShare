const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req,res)=>{
    try{
        const file = await File.findOne({uuid : req.params.uuid});
        if(!file){
            return res.json({error : ' file not found'})
        }

        return res.json({
            uuid: file.uuid,
            filename : file.filename,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    }catch(err){
        return res.json({error : err.message})
    }
    

})

module.exports = router;