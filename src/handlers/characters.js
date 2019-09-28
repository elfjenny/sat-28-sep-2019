
function listHandler (req, res){
    res.send('Listing all characters...'); 
};
function postHandler (req, res){
        res.send (req.body);
};
function deleteHandler (req, res){
    res.send ('Delete counrtry-x');
};
function putHandler (req, res){
    res.send ('Update counrtry-x');
};


// ca va exporter la fonction listhandler pour être invoquée autre part
module.exports = {
    listHandler, postHandler, deleteHandler, putHandler
};