import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarCoding from "./NavBarCoding";
import NextSampleButton from "./NextSampleButton";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import { useState } from "react";
// import exerciseData from "./Templates";
import axios from "axios";

function CodingScreen() {
    // const { exerciseType } = useParams();
    const location = useLocation();
    const { exerciseData } = location.state;


    const [userCode, setUserCode] = useState(``);

    const [userLang, setUserLang] = useState("python");

    const [userTheme, setUserTheme] = useState("cobalt");

    const [fontSize, setFontSize] = useState(20);

    const [userInput, setUserInput] = useState("");

    const [userOutput, setUserOutput] = useState("");

    const [loading, setLoading] = useState(false);





    function handleChange(value) {
        setUserCode(value)
    }


    function compile() {
        setLoading(true);
        if (userCode === ``) {
            return
        }

        // Post request to compile endpoint
        axios.post(`http://localhost:3000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            setUserOutput(res.data.output);

        }).then(() => {
            setLoading(false);
        })
    }

    // Function to clear the output screen
    function clearOutput() {
        setUserOutput("");
    }

    // const [randomrandomTemplateData, setRandomrandomTemplateData] = useState({
    //     question: "",
    //     key: null,
    //     usedVariables: {},
    // });

    // const [sampleSolution, setSampleSolution] = useState("");
    // const [questions, setQuestions] = useState([]);
    // const [solutions, setSolutions] = useState([]);
    // const [variables, setVariables] = useState([]);

    // useEffect(() => {
    // Fetch exerciseData and variable data from the backend (MongoDB)
    //     axios.get("http://localhost:3000/api/questions-and-variables")
    //     .then((response) => {
    //         const { questions, variables } = response.data;
    //         setQuestions(questions);
    //         setVariables(variables);
    //         generateRandomQuestion(questions, variables);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching data from the server:", error);
    //     });


    //     axios.get("http://localhost:5000/api/solutions")
    //         .then((response) => {
    //             setSolutions(response.data);
    //             handleGenerateSampleSolution();
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching solution data from the server:", error);
    //         });


    // }, [exerciseType]);

    // const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    // const generateRandomQuestion = () => {
    //     const randomTemplate = getRandomItem(exerciseData.questions);
    //     const usedVariables = {};

    //     let question = randomTemplate.text.replace(/{(\w+)}/g, (match, variable) => {
    //         if (variables.hasOwnProperty(variable)) {
    //             let variableValue = getRandomItem(variables[variable]);
    //             usedVariables[variable] = variableValue;
    //             return variableValue;
    //         }
    //         return match;
    //     });

    //     setRandomrandomTemplateData({ question, usedVariables, key: randomTemplate.key });
    // };


    // const handleGenerateSampleSolution = () => {
    //     const { key, usedVariables } = randomrandomTemplateData;
    //     const matchingSolution = solutions.find((solution) => solution.key === key);

    //     if (matchingSolution) {
    //         let solutionCode = matchingSolution.template.replace(/{(\w+)}/g, (match, variable) => {
    //             if (usedVariables.hasOwnProperty(variable)) {
    //                 return usedVariables[variable];
    //             }
    //             return match;
    //         });

    //         setSampleSolution(solutionCode);
    //     } else {
    //         setSampleSolution("Sample solution not available for this question.");
    //     }
    // }

    const [randomrandomTemplateData, setRandomrandomTemplateData] = useState(null);
    const [sampleSolution, setSampleSolution] = useState("");


    // useEffect(() => {
    //     // Fetch exerciseData data
    //     const initialrandomTemplateData = generateRandomQuestion();
    //     setRandomrandomTemplateData(generateRandomQuestion());
    //     handleGenerateSampleSolution();
    // }, []); // Run this effect only once when the component mounts
    useEffect(() => {
        console.log(exerciseData)
        // Fetch exerciseData data
        if (exerciseData) {
            const initialrandomTemplateData = generateRandomQuestion();
            setRandomrandomTemplateData(initialrandomTemplateData);
            handleGenerateSampleSolution(initialrandomTemplateData);
        }
    }, []);


    const handleNextQuestionClick = () => {



        const newRandomrandomTemplateData = generateRandomQuestion(exerciseData);
        setRandomrandomTemplateData(newRandomrandomTemplateData);
        const newSolutionData = generateSolution();
        setSampleSolution(newSolutionData)
        


    };



    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    const generateRandomQuestion = () => {
    
        if (Array.isArray(exerciseData) && exerciseData.length > 0) {
            const randomTemplateData = getRandomItem(exerciseData); // Get a random exercise template from the array
            // const randomTemplate = getRandomItem(randomTemplateData.questions); // Get a random question from the selected exercise template
            const randomTemplate = randomTemplateData.questions
            const usedVariables = {};




            // Replace variables in the question
            let question = randomTemplate[0].text.replace(/{(\w+)}/g, (match, variable) => {



                if (variable === 'number') {
                    // For {number}, generate a random number between 1 and 100
                    const randomNumber = Math.floor(Math.random() * 100) + 1;
                    usedVariables[variable] = randomNumber;
                    return ` ${randomNumber} `;
                }
                else if (variable === 'startno') {
                    // For {number}, generate a random number between 1 and 50
                    const randomNumber = Math.floor(Math.random() * 50) + 1;
                    usedVariables[variable] = randomNumber;
                    return ` ${randomNumber} `;
                }
                else if (variable === 'endno') {
                    // For {number}, generate a random number between 51 and 100
                    const randomNumber = Math.floor(Math.random() * 50) + 51;
                    usedVariables[variable] = randomNumber;
                    return ` ${randomNumber} `;
                }
                else if (variable === 'number2') {
                    // For {number}, generate a random number between 100 and 500
                    const randomNumber = Math.floor(Math.random() * 401) + 100;
                    usedVariables[variable] = randomNumber;
                    return ` ${randomNumber} `;
                }

                if (randomTemplateData.variables && randomTemplateData.variables.hasOwnProperty(variable)) {
                    const variableArray = randomTemplateData.variables[variable];
                    if (Array.isArray(variableArray) && variableArray.length > 0) {
                        const variableValue = getRandomItem(variableArray);
                        usedVariables[variable] = variableValue;
                        return ` ${variableValue} `;
                    }
                }
                return match;
            });


            console.log("Used variables:", usedVariables);
            console.log(question);




        


        return { question, usedVariables, key: randomTemplate.key };

    } else {
        console.error("exerciseData is not an array or is empty");
        return null;
    }

    const generateSolution = (randomTemplateData) => {
        if (randomTemplateData && randomTemplateData.key && Array.isArray(exerciseData)) {
            const matchingExercise = exerciseData.find((exercise) =>
                exercise.questions.some((question) => question.key === randomTemplateData.key)
            );
    
            if (matchingExercise && matchingExercise.solutions) {
                const matchingSolution = matchingExercise.solutions.find(
                    (solution) => solution.key === randomTemplateData.key
                );
    
                if (matchingSolution) {
                    let solutionCode = matchingSolution.template.replace(/{(\w+)}/g, (match, variable) => {
                        if (randomTemplateData.usedVariables.hasOwnProperty(variable)) {
                            return randomTemplateData.usedVariables[variable];
                        }
                        return match;
                    });
    
                    setSampleSolution(solutionCode);
                    return;
                }

    }

};





const handleGenerateSampleSolution = (randomTemplateData) => {
    if (randomTemplateData && randomTemplateData.key && Array.isArray(exerciseData)) {
        const matchingExercise = exerciseData.find((exercise) =>
            exercise.questions.some((question) => question.key === randomTemplateData.key)
        );

        if (matchingExercise && matchingExercise.solutions) {
            const matchingSolution = matchingExercise.solutions.find(
                (solution) => solution.key === randomTemplateData.key
            );

            if (matchingSolution) {
                let solutionCode = matchingSolution.template.replace(/{(\w+)}/g, (match, variable) => {
                    if (randomTemplateData.usedVariables.hasOwnProperty(variable)) {
                        return randomTemplateData.usedVariables[variable];
                    }
                    return match;
                });

                setSampleSolution(solutionCode);
                return;
            }
        }
    }

    setSampleSolution("Sample solution not available for this question.");
};

return (
    <div className="codingScreenBody">
        <NavBar />
        <div className="header">
            <h1>Python Loops</h1>
        </div>
        <div className="container">
            {randomrandomTemplateData && (
                <div className="question">
                    <pre>{randomrandomTemplateData.question}</pre>
                </div>
            )}
            <NavBarCoding
                userLang={userLang} setUserLang={setUserLang}
                userTheme={userTheme} setUserTheme={setUserTheme}
                fontSize={fontSize} setFontSize={setFontSize}
            />

            <div className="editor-output-container">
                <div className="code-editor" id="editor">
                    <AceEditor
                        mode={userLang}
                        theme={userTheme}
                        name="my-editor"
                        width="100%"
                        height="800px"
                        fontSize={`${fontSize}px`}
                        editorProps={{ $blockScrolling: true }}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        onChange={handleChange}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </div>
                <div className="input-output-area">
                    <h4>input:</h4>
                    <div className="input-box">
                        <textarea id="code-input"
                            onChange={(e) => setUserInput(e.target.value)}>
                        </textarea>

                    </div>
                    <h4>output:</h4>
                    {loading ? (
                        <div className="spinner-box">
                            <img src="./images/loading.gif" alt="loading..." />
                        </div>
                    ) : (
                        <div className="output-box">
                            <pre style={{ color: "white" }}>{userOutput}</pre>

                        </div>
                    )}
                    <div>

                    </div>
                </div>
            </div>

            <div className="button-container">
                <NextSampleButton
                    classNameNext="nextButton"
                    classNameSample="sampleSolutionButton"
                    onClickQuestion={handleNextQuestionClick}
                    onClickSample={handleGenerateSampleSolution}
                />

                <button type="submit" className="codeButton" onClick={() => compile()}>Run</button>
                <button className="clearButton" onClick={() => { clearOutput() }}>Clear</button>

            </div>
        </div>
    </div>
);
}

export default CodingScreen;
