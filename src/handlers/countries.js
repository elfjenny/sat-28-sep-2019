
function listHandler (req, res){
    res.send('Listing all countries...');
};
function postHandler (req, res){
    res.send ('Create counrtry-x');
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