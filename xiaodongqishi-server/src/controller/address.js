/**
 * @description
 */
const Address = require('../models/Address')
async function createAddress(username,data){
    const address = await Address.create({
        username,
        ...data
     })
    return address
}

async function getAddressList(username){
    const addressList = await Address.find({username}).sort({updatedAt : -1})
    return addressList
}

async function getOneAddress(id){
    const OneAddress = await Address.findById(id)
    return OneAddress
}

async function updateAddress(id,username,newDate){
    const newAddress = await Address.findOneAndUpdate(
        { _id:id ,username},
        { username  , ...newDate },
        {
            new: true
        })
    return newAddress
}

module.exports = {
    createAddress,
    getAddressList,
    getOneAddress,
    updateAddress
}