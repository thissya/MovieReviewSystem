const mongoose = require("mongoose");
const User = require("../Model/UserSchema");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: '../.env' });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // Deprecated, but safe to leave for now
    useUnifiedTopology: true, // Deprecated, but safe to leave for now
  })
  .then(async () => {
    try {
      // Check if the admin already exists
      const adminExists = await User.findOne({ email: "thissya129@gmail.com" });

      if (adminExists) {
        console.log("Admin already exists");
        process.exit(0); // Exit with success code
      }

      // Hash the password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash("RoleCameraAction", salt);

      // Create the admin user
      const admin = new User({
        userName: "Admin", // Add the required userName field
        email: "thissya129@gmail.com",
        password: hashedPassword,
        role: "admin",
      });

      await admin.save();
      console.log("Admin user created!");
      process.exit(0);  
    } catch (error) {
      console.error("Error in creating Admin:", error.message);
      process.exit(1); 
    }
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
    process.exit(1); 
  });