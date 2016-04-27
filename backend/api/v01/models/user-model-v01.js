/*
*
 User model
*/
'use strict';

import mongoose, { Schema } from 'mongoose';
import address from './address-model-v01.js';


export function userRef () {
  return {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'User'
  };
}

const userSchema = new Schema({
  address: address,
  created   : { type: Date },
  createdBy : String,
  email: {
    type: String
    // unique:true,
    // required: 'Please fill in your email'
    // match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  firstName : String,
  lastName  : String,
  lastLogin : { type: Date },
  password  : {
    type    : String,
    required: 'Please fill in password'
  },
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: 'user'
  },
  telephone: Number,
  updated : { type: Date, default: Date.now },
  updatedBy : String,
  username: {
    type    : String,
    unique  : true,
    required: 'Please fill in username',
    trim: true
  }
});


export default mongoose.model('User', userSchema);
