const loopExerciseTemplate = {
    questions: [
      {
        key: 1,
        text: "Python program to find {case} in a list",
      },
      // Add more question templates as needed
    ],
    solutions: [
      {
        key: 1,
        template: "def find_{case.lower().replace(' ', '_')}_in_list(input_list):\n  # Add your solution here",
      },
      // Add more sample solution templates for other questions
    ],
    variables: {
      case: [
        "Largest number",
        "Second largest number",
        "Third largest number",
        "Smallest number",
        // Add more options for 'case'
      ],
      // Add more variable data as needed
    },
  };
  
  export default loopExerciseTemplate;
  
  