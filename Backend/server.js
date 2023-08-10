
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Axios = require("axios");
const { User, LoopExerciseTemplate, functionExerciseTemplate, numberExerciseTemplate, listExerciseTemplate, stringExerciseTemplate,dictionaryExerciseTemplate,tupleExerciseTemplate,setExerciseTemplate,oopsExerciseTemplate,dateTimeExerciseTemplate, inputOutputExerciseTemplate, searchSortExerciseTemplate } = require('./Mongo');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

app.post('/signup', async (req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });

  try {
    const check = await User.findOne({ email: req.body.email });

    if (check) {
      res.status(409).json({ message: "User already exists" });
    } else {
      await newUser.save();
      res.status(200).json({ message: "User created successfully" });
    }
  } catch (e) {
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await User.findOne({ username: req.body.username });

    if (!check) {
      res.status(409).json({ message: "Invalid user" });
    } else {
      res.status(200).json({ message: "Valid user" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post("/compile", (req, res) => {
	//getting the required data from the request
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

  // code = code.replace(/input\(\)/g, 'input("' + input + '")');

  if (language==="python"){
    language="python3"
  }

	let data = ({
    "language": language,
    "version": "latest",
		"code": code,
	  "input": input
	});
	let config = {
		method: 'post',
		url: 'https://online-code-compiler.p.rapidapi.com/v1/',
		headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'eac8fc6284msh2a6a57fbd9053c3p1340bfjsn843546f03041',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
          },
		data: data
	};
	//calling the code compilation API
  Axios(config)
  .then((response) => {
      res.send(response.data)
      console.log(response.data)
  }).catch((error) => {
      console.log(error);
  });
  
})

// app.get("/api/questions-and-variables/:exerciseType", async (req, res) => {
  
//   try {
//     const exerciseType = req.params.exerciseType;
//     const questions = await Question.find({ exerciseType });
//     const variables = await Variable.find({ exerciseType });
//     res.json({ questions, variables });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch questions and variables" });
//   }
// });

// app.get("/api/:exerciseType/solutions", async (req, res) => {
//   const { exerciseType } = req.params;
//   try {
//     const solutions = await Solution.find({ type: exerciseType });
//     res.json(solutions);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch solutions" });
//   }
// });

// Backend - Handling the request to fetch exercise data for a specific exerciseType
// app.get("/api/exerciseTemplate", async (req, res) => {
//   try {
//     const exerciseType = req.query.exerciseType; // Get the exerciseType from the query parameters
//     console.log("Received exerciseType:", exerciseType);
//     const exerciseTemplate = await LoopExerciseTemplate.findOne({ exerciseType });

//     if (!exerciseTemplate) {
//       return res.status(404).json({ error: "Exercise template not found" });
//     }

//     return res.json(exerciseTemplate);
//   } catch (error) {
//     return res.status(500).json({ error: "Failed to fetch exercise template" });
//   }
// });
app.get("/api/exerciseTemplate", async (req, res) => {
  try {
    const exerciseType = req.query.exerciseType; // Get the exerciseType from the query parameters
    console.log("Received exerciseType:", exerciseType);

    let exerciseTemplate;

    // Check the exerciseType and fetch the corresponding template from the appropriate collection
    if (exerciseType === "loops") {
      exerciseTemplate = await LoopExerciseTemplate.find();
    } else if (exerciseType === "function") {
      exerciseTemplate = await functionExerciseTemplate.find();
    } else if (exerciseType === "number") {
      exerciseTemplate = await numberExerciseTemplate.find(); 
    }else if (exerciseType === "string") {
      exerciseTemplate = await stringExerciseTemplate.find(); 
    } else if (exerciseType === "list") {
      exerciseTemplate = await listExerciseTemplate.find(); 
    } else if (exerciseType === "dictionary") {
      exerciseTemplate = await dictionaryExerciseTemplate.find();
    } else if (exerciseType === "tuple") {
      exerciseTemplate = await tupleExerciseTemplate.find();
    } else if (exerciseType === "set") {
      exerciseTemplate = await setExerciseTemplate.find();
    } else if (exerciseType === "oops") {
      exerciseTemplate = await oopsExerciseTemplate.find();
    } else if (exerciseType === "dateTime") {
      exerciseTemplate = await dateTimeExerciseTemplate.find();
    } else if (exerciseType === "inputOutput") {
      exerciseTemplate = await inputOutputExerciseTemplate.find();
    } else if (exerciseType === "searchSort") {
      exerciseTemplate = await searchSortExerciseTemplate.find();
    }
    else {
      return res.status(404).json({ error: "Exercise template not found" });
    }

    if (!exerciseTemplate || exerciseTemplate.length === 0) {
      return res.status(404).json({ error: "Exercise template not found" });
    }

    return res.json(exerciseTemplate);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch exercise template" });
  }
});





app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

