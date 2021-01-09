module.exports = (err,req,res,next) =>{
    const status = err.status || 500;

    return res.status(status).json({
        status : 'error',
        error : err.message || 'Internal Server Error'
    })
}