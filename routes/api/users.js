const express = require("express");
const { User } = require("../../config");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const result = await User.get();
  const list = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

routes.post("/create", async (req, res) => {
  console.log("Users Data", req.body);
  await User.add(req.body);
  res.send({ msg: "User added successfully." });
});

routes.put("/update/:user_id", async (req, res) => {
  const id = req.params.user_id;
  delete req.body.id;
  await User.doc(id).update(req.body);
  res.send({ msg: "Staff updated successfully." });
});

routes.delete("/delete/:user_id", async (req, res) => {
  const id = req.params.user_id;
  await User.doc(id).delete();
  res.send({ msg: "Staff deleted successfully." });
});

module.exports = routes;
