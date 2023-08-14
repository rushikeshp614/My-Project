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

    // const [randomrandomQuestionData, setRandomrandomQuestionData] = useState({
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

    //     setRandomrandomQuestionData({ question, usedVariables, key: randomTemplate.key });
    // };


    // const handleGenerateSampleSolution = () => {
    //     const { key, usedVariables } = randomrandomQuestionData;
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

    const [randomrandomQuestionData, setRandomrandomQuestionData] = useState(null);
    // const [randomrandomQuestionData, setRandomrandomQuestionData] = useState(
    //     () => {
    //       const savedQuestionData = localStorage.getItem("randomQuestionData");
    //       return savedQuestionData ? JSON.parse(savedQuestionData) : null;
    //     }
    //   );

    const [sampleSolution, setSampleSolution] = useState("");
    const [showSolution, setShowSolution] = useState(false);



    useEffect(() => {
        console.log(exerciseData)
        // Fetch exerciseData data
        if (exerciseData) {
            const initialrandomQuestionData = generateRandomQuestion();
            setRandomrandomQuestionData(initialrandomQuestionData);
            handleGenerateSampleSolution(initialrandomQuestionData);
        }
    }, []);


    //     useEffect(() => {
    //     if (randomrandomQuestionData) {
    //       handleGenerateSampleSolution(randomrandomQuestionData);
    //       // Save the current question data to local storage
    //       localStorage.setItem(
    //         "randomQuestionData",
    //         JSON.stringify(randomrandomQuestionData)
    //       );
    //     }
    //   }, [randomrandomQuestionData]);


    const handleNextQuestionClick = () => {



        const newRandomQuestionData = generateRandomQuestion(exerciseData);
        setRandomrandomQuestionData(newRandomQuestionData);
        handleGenerateSampleSolution(newRandomQuestionData)


    };


    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    const generateRandomQuestion = () => {
        
        if (Array.isArray(exerciseData) && exerciseData.length > 0) {
            const randomTemplateData = getRandomItem(exerciseData); // Get a random exercise template from the array
           
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
            console.log("Auto generated question- " +question);







            return { question, usedVariables, key: randomTemplate.key, randomTemplateData };

        } else {
            console.error("exerciseData is not an array or is empty");
            return null;
        }
    };





    

    const handleGenerateSampleSolution = (randomQuestionData) => {
        
        if (randomQuestionData && randomQuestionData.randomTemplateData) {
           

            const matchingExercise = randomQuestionData.randomTemplateData



            if (matchingExercise && matchingExercise.solutions) {
                if (Array.isArray(matchingExercise.solutions) && matchingExercise.solutions.length > 1) {
                    const matchingSolution = matchingExercise.solutions.find((solution) => {
                        return Object.values(randomQuestionData.usedVariables).includes(solution.key);
                    });

                    if (matchingSolution) {
                        let solutionCode = matchingSolution.template.replace(/{(\w+)}/g, (match, variable) => {
                            if (randomQuestionData.usedVariables.hasOwnProperty(variable)) {
                                return randomQuestionData.usedVariables[variable];
                            }
                            return match;
                        });

                        setSampleSolution(solutionCode);
                        console.log("Solution generated for the displayed question- "+solutionCode)
                        return;
                    }
                } else if (Array.isArray(matchingExercise.solutions) && matchingExercise.solutions.length === 1) {
                    // If there's only one solution, use it directly
                    let solutionCode = matchingExercise.solutions[0].template.replace(/{(\w+)}/g, (match, variable) => {
                        if (randomQuestionData.usedVariables.hasOwnProperty(variable)) {
                            return randomQuestionData.usedVariables[variable];
                        }
                        return match;
                    });

                    setSampleSolution(solutionCode);
                    console.log("Solution generated for the displayed question- "+solutionCode)
                    return;
                }
            }
        }

        setSampleSolution("Sample solution not available for this question.");
    };


    return (
        <div className="codingScreenBody">
            <NavBar />
            
            <div className="container"> {randomrandomQuestionData && (<div className="question">
                <pre>{randomrandomQuestionData.question}</pre>
            </div>)}
            
                <NavBarCoding userLang={userLang} setUserLang={setUserLang} userTheme={userTheme} setUserTheme={setUserTheme} fontSize={fontSize} setFontSize={setFontSize} />
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
                            }} />

                    </div>
                    <div className="input-output-area">
                        <h4>input:</h4>
                        <div className="input-box">
                            <textarea id="code-input" onChange={(e) => setUserInput(e.target.value)}></textarea>
                        </div>
                        <h4>output:</h4> {loading ? (<div className="spinner-box">
                            <img src="./images/loading.gif" alt="loading..." />
                        </div>) : (<div className="output-box">
                            <pre style={{ color: "white" }}>{userOutput}</pre>
                        </div>)} <div></div>

                    </div>
                </div>
                <div className="buttons">
                    <div className="wp-block-genesis-blocks-gb-accordion gb-block-accordion">
                        <details>
                            <summary className="gb-accordion-title">Show Solution</summary>
                            
                            <AceEditor
                                mode="python" 
                                theme="tomorrow" 
                                name="show-solution-editor"
                                value={sampleSolution} 
                                readOnly={true}
                                width="100%"
                                height="400px"
                                fontSize={16}
                                showPrintMargin={false}
                                showGutter={true}
                                highlightActiveLine={true}
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                            />
                        </details>
                    </div>
                    <div className="button-container">
                        <button className="nextButton" onClick={handleNextQuestionClick}> Next </button>
                        <button type="submit" className="codeButton" onClick={() => compile()}>Run</button>
                        <button className="clearButton" onClick={() => { clearOutput() }}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingScreen;
