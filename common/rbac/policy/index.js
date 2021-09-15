const userPolicy=require("./userPolicy");
const adminPolicy=require("./adminPolicy");
const superAdminPolicy=require("./superAdminPolicy")
const roles = require("../../../enum/roles");


const opts={
    [roles.ADMIN]:{
     can:   adminPolicy
    },
    [roles.USER]:{
      can:  userPolicy
    },
    [roles.SUPER_ADMIN]:{
      can: superAdminPolicy
    }
}

module.exports=opts;
