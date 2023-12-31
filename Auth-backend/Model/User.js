import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
  date: { type: Date, default: Date.now() },
  verified: { type: Boolean, default: false, required: true },
});

userSchema.methods.comparePassword = async function (password) {
  const result = bcrypt.compareSync(password, this.password);
  return result;
};

const User = mongoose.model('User', userSchema);

export default User;
