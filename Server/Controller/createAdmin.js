const mongoose = require('mongoose');
const User = require('./models/userModel'); 

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const adminExists = await User.findOne({ email: 'thissya129@gmail.com' });

    if (adminExists) {
      console.log('Admin already exists');
      process.exit();
    }

    const admin = new User({
      email: 'thissya129@gmail.com',
      password: 'RoleCameraAction', 
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created!');
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });
