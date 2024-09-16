import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // f_Id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   default: mongoose.Types.ObjectId, 
  // },
  // f_Image: {
  //   type: String, 
  //   required: true, 
  // },
  f_Name: {
    type: String,
    required: true,
    minlength: 3,
  },
  f_Email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/, 
  },
  f_Mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
  },
  f_Designation: {
    type: String,
    required: true,
  },
  f_Gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], 
    required: true,
  },
  f_Course: {
    type: String,
    required: true,
  },
  f_Createdate: {
    type: Date,
    default: Date.now, 
  }
},{
    timestamps:true
});

// Customize the output
userSchema.set('toObject', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id; 
    delete ret.__v;
    return ret;
  }
});


const User = mongoose.model('User', userSchema,'User');
export default User;
