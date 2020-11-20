module.exports = (req, res) => 
{
    if(req.user.credits < 1)
    {
        return res.status(401).send({ error: 'You dont have enough credits...!' });  
    }
}