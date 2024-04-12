
const {validateCreateAccount} = require("../validation/user.validate")
const {createUserQuery,getAllUsersQuery,getSingleUserQuery} = require("../models/customers.models")
const { uuid } = require('uuidv4')

const creteUser = async(req,res)=> {
    try{
        const feedback = validateCreateAccount(req.body)
        if(feedback.error){
            return res.status(400).json({
                status: false,
                message: feedback.error.datails[0].message
            })
        }
        const {first_name,other_names,email,phone,address} = req.body
        const customer_id = uuid()
        await createUserQuery(customer_id,first_name,other_names,email,phone,address)
   
    return res.status(200).json({
        status: true,
        message: "User successfully created"
      
    })

    }catch(err){
        return res.status(500).json({
            status: false,
            message: err.message
        })
    }
};

const getAllUsers = async(req,res)=> {
  const allUsers = await getAllUsersQuery()
  return res.status(200).json({
    status: true,
    message:"all users fetched successfully",
    data : allUsers
  })
};

const getSingleUser = async (req, res) => {
    try {
        const {coustomer_id_or_email} = req.params
        const singleGet = await getSingleUserQuery(coustomer_id_or_email)
        if(!singleGet) throw new Error
        delete singleGet[0].created_at
        delete singleGet[0].upadted_at

        return res.status(200).json({
            status: true,
            message: "user successfully fetched",
            data: singleGet
        })
    } catch (error) {
        res.status(500).json({
            satatus: false,
            message: error.message
        })
    }

}


module.exports = {
    getAllUsers,
    creteUser,
    getSingleUser,
}