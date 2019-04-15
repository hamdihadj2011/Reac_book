const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: "SUPERSECRETPASSWORD1111",
    DATABASE: "mongodb://localhost:27017/books_1"
  }
};


exports.get= function get(env){
return config[env] || config.default
}