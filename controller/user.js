const User = require("../models/user");
const path = require("path");



const postUser = async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      email,
      phone,
      group
    } = req.body;




    if (lastName || firstName) {
      const createUser = new User({
        lastName,
        firstName,
        email,
        phone,
        group
      });
      await createUser.save();
      res.json({
        success: true,
        message: "malumot saqlandi"
      });
    } else {
      res.json({
        success: false,
        message: "malumotlar to'liq emas"
      });
    }
  } catch (error) {
    console.log("====================================");
    console.log("error", error);
    console.log("====================================");
  }
};



// get users
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.log("====================================");
    console.log("error", error);
    console.log("====================================");
  }
};


// get user id
const getUserId = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const user = await User.findById({
      _id: id
    });
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.log("====================================");
    console.log("error", error);
    console.log("====================================");
  }
};




// delete user by id
const deleteUserById = async (req, res) => {
  try {
    const {
      id
    } = req.query;

    const user = await User.findByIdAndRemove({
      _id: id
    });

    let name = (user.photo.split("/")[1])

    deletePhoto(name)
    res.json({
      success: true,
      message: "malumot uchirildi"
    });
  } catch (error) {
    console.log("====================================");
    console.log("error", error);
    console.log("====================================");
  }
};





module.exports = {
  postUser,
  getUsers,
  deleteUserById,
  getUserId
};