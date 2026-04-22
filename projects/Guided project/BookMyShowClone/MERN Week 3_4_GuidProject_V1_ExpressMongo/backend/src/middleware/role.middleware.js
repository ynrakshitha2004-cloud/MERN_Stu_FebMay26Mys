//Role middleware: RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if(!req.user || !roles.includes(req.user.role)){
             return res.status(404).json({
                success:false,
                message:"Access denied: insufficient permission",
            });
        }
        next();
    };
};