module.exports = (err,req,res,next) =>{
    if (err.status ==  404){
        return res.status(404).json({
            status : 'error',
            error : err.message || 'Not found - 404'
        })
    }
}