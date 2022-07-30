const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, 'email harus diisi'],
    },
    name: {
      type: String,
      require: [true, 'nama harus diisi'],
      maxlength: [225, 'panjang nama harus antara 3 - 225 karakter'],
      minlength: [3, 'panjang nama harus antara 3 - 225 karakter'],
    },
    password: {
      type: String,
      require: [true, 'kata sandi harus diisi'],
      maxlength: [225, 'panjang nama harus antara 8 - 225 karakter'],
      minlength: [8, 'panjang nama harus antara 8 - 225 karakter'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin',
    },
    status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    phoneNumber: {
      type: String,
      require: [true, 'nomor telepon harus diisi'],
      maxlength: [13, 'panjang nomor telepon harus antara 9 - 13 karakter'],
      minlength: [9, 'panjang nomor telepon harus antara 9 - 13 karakter'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
