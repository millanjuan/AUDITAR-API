const validateUser = (req, res, next) => {
    const { username, email, password } = req.body;
    if(!username)  return res.status(400).json({error: "Missing username"});
    if(!email) return res.status(400).json({error: "Missing email"});
    if(!password) return res.status(400).json({error: "Missing password"})
    next();
}

module.exports = {validateUser} 