const validateBody = (request,response,next) => {
    const {body} = request;
    if(body.name == undefined || body.email == undefined || body.password == undefined){
        return response.status(400).json({ message:'The field "name" is required' });
    }
    if(body.name == '' || body.email == '' || body.password == ''){
        return response.status(400).json({ message:'You cannot be empty' });
    }

    next()
}

module.exports = {
    validateBody,
}