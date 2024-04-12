const dbConnect = require("../config/database")
const createUserQuery = (customer_id,first_name,other_names,email,phone,address) => {
    return new Promise((resolve,reject)=>{
        dbConnect.query(`INSERT INTO CUSTOMER(customer_id,first_name,other_names,email,phone,address)
        VALUES ('${customer_id}','${first_name}','${other_names}','${email}','${phone}','${address}')`,
        (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}

const getSingleUserQuery =(datas)=>{
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM CUSTOMER WHERE customer_id='${datas}' OR email = '${datas}'`,
        (err,results) => {
            if(err) return reject(err)
            return resolve(results)
        })
       
    })
}
const getAllUsersQuery =(datas)=>{
    return new Promise((resolve,reject)=>{
        dbConnect.query(`SELECT * FROM CUSTOMER`,
        (err,results)=>{
            if(err) return reject(err)
            return resolve(results)
        })
    })

}



module.exports ={
    createUserQuery,
    getAllUsersQuery,
    getSingleUserQuery
}