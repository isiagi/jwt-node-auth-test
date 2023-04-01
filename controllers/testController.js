const auth = require("../auth/auth")

const testController = {
  test: async (req, res) => {
    try {
      const token = await auth.getSignedJwtToken({ id: 1 });
      console.log(token);
    } catch (err) {
      console.log({ error: err });
    }
  },
  
  getAll: (req, res) => {
    console.log(req.user);
    res.status(200).json({ hello: "world" });
  },
};

module.exports = testController;
