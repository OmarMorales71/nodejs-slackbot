const Survey = require("../../../models/survey");

module.exports = (app) => {
  app.receiver.app.get("/api/v1/survey/all", async (req, res) => {
    try {
        console.log(req)
      const surveys = await Survey.find();
      res.json(surveys);
    } catch (error) {
      console.error("get all surveys: ", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.receiver.app.post("/api/v1/survey", async (req, res) => {
    try {
        console.log(req)
      const newSurvey = new Survey(req.body);
      await newSurvey.save((err, survey) => {
        if (err) {
          //res.send("Survey incorrect");
          return console.error(err);
        }
        console.log("Survey saved succussfully!");
      });
      res.json(newSurvey).status(201);
    } catch (error) {
      console.error("get all surveys: ", error);
      res.status(500).send("Internal Server Error");
    }
  });
};