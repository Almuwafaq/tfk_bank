const dbConnect = require("../config/database")
const createUserQuery = (customer_id,first_name,other_names,email,phone,address,wallet,account_number) => {
    return new Promise((resolve,reject)=>{
        dbConnect.query(`INSERT INTO CUSTOMERS(customer_id,first_name,other_names,email,phone,address,wallet,account_number)
        VALUES ('${customer_id}','${first_name}','${other_names}','${email}','${phone}','${address}',${wallet},'${account_number}')`,
        (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}

const getSingleUserQuery =(email)=>{
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM CUSTOMERS WHERE email = '${email}'`,
        (err,results) => {
            if(err) return reject(err)
            return resolve(results)
        })
       
    })
}
const getAllUsersQuery =(datas)=>{
    return new Promise((resolve,reject)=>{
        dbConnect.query(`SELECT * FROM CUSTOMERS`,
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