const ReToken = artifacts.require("ReToken");

module.exports = function(deployer){
    deployer.deploy(ReToken);
}; 