const jwt = require('jsonwebtoken');

const authenticate = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            console.log('no token');
            return res.status(401).json({ message: "Access denied. No token provided." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        res.status(200)
        next();
    } catch (err) {
        res.clearCooke('token');
        res.status(401).json({ message: "Invalid token." });
    }
    
  
}

module.exports = authenticate;