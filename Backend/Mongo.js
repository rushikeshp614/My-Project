// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userData');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// Create a new user

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true
    },
    username : {
        type : String,
        required:true
    },
    password : {
        type : String,
        required:true
    },
    confirmPassword:{
        type : String,
        required:true
    }

})

const User = mongoose.model("User",userSchema)




const exerciseTemplateSchema = new mongoose.Schema({
    questions: [
      {
        key: { type: Number, required: true },
        text: { type: String, required: true },
      }
    ],
    solutions: [
      {
        key: { type: String, required: true },
        template: { type: String, required: true },
      }
      
    ],
    variables: mongoose.Schema.Types.Mixed,
    ExerciseName:{type: String, required: true}
  });
  

  const LoopExerciseTemplate = mongoose.model("LoopExerciseTemplate", exerciseTemplateSchema);
  const functionExerciseTemplate = mongoose.model("functionExerciseTemplate", exerciseTemplateSchema);
  const numberExerciseTemplate = mongoose.model("numberExerciseTemplate", exerciseTemplateSchema);
  const stringExerciseTemplate = mongoose.model("stringExerciseTemplate", exerciseTemplateSchema);
  const listExerciseTemplate = mongoose.model("listExerciseTemplate", exerciseTemplateSchema);
  const dictionaryExerciseTemplate = mongoose.model("dictionaryExerciseTemplate", exerciseTemplateSchema);
  const tupleExerciseTemplate = mongoose.model("tupleExerciseTemplate", exerciseTemplateSchema);
  const setExerciseTemplate = mongoose.model("setExerciseTemplate", exerciseTemplateSchema);
  const oopsExerciseTemplate = mongoose.model("oopsExerciseTemplate", exerciseTemplateSchema);
  const dateTimeExerciseTemplate = mongoose.model("dateTimeExerciseTemplate", exerciseTemplateSchema);
  const inputOutputExerciseTemplate = mongoose.model("inputOutputExerciseTemplate", exerciseTemplateSchema);
  const searchSortExerciseTemplate = mongoose.model("searchSortExerciseTemplate", exerciseTemplateSchema);
  


module.exports = {
    User,
    LoopExerciseTemplate,
    functionExerciseTemplate,
    numberExerciseTemplate,
    stringExerciseTemplate,
    listExerciseTemplate,
    dictionaryExerciseTemplate,
    tupleExerciseTemplate,
    setExerciseTemplate,
    oopsExerciseTemplate,
    dateTimeExerciseTemplate,
    inputOutputExerciseTemplate,
    searchSortExerciseTemplate
  };



