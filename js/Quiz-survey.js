document.querySelectorAll(".form-quiz-option").forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (event.target.classList.contains("form-check-input")) {
      event.target.checked = true;
    } else {
      var input = element.querySelector(".form-check-input");
      input.checked = true;
    }
  });
});

let counterClick = 0;
let counterOpt1 = 0;
let counterOpt2 = 0;
let counterOpt3 = 0;
let counterOpt4 = 0;

function quiz() {
  //input

  let option1 = document.querySelector("#option_1");
  let option2 = document.querySelector("#option_2");
  let option3 = document.querySelector("#option_3");
  let option4 = document.querySelector("#option_4");

  if (option1.checked) {
    counterOpt1++;
  } else if (option2.checked) {
    counterOpt2++;
  } else if (option3.checked) {
    counterOpt3++;
  } else if (option4.checked) {
    counterOpt4++;
  }

  //text question
  let question = document.querySelector("#id_question");

  //text answer
  let answer1 = document.querySelector("#text-option-1");
  let answer2 = document.querySelector("#text-option-2");
  let answer3 = document.querySelector("#text-option-3");
  let answer4 = document.querySelector("#text-option-4");
  // let input = element.querySelector(".form-check-input");
  counterClick++;
  document.querySelectorAll(".form-check-input").forEach(function (input) {
    input.checked = false;
  });
  switch (counterClick) {
    case 1:
      question.innerHTML =
        "Have you had any issues with the security measures in place for online banking with Bank Global?";
      answer1.innerHTML = "No issues at all";
      answer2.innerHTML = "A few minor issues";
      answer3.innerHTML = "Moderate issues";
      answer4.innerHTML = "Major issues";
      break;
    case 2:
      question.innerHTML =
        "How easy is it for you to find the information you need on the Bank Global website?";
      answer1.innerHTML = "Very easy";
      answer2.innerHTML = " Somewhat easy";
      answer3.innerHTML = "Neutral";
      answer4.innerHTML = "Difficult";
      break;
    case 3:
      question.innerHTML =
        "How helpful have the customer service representatives at Bank Global been when you've had questions or issues?";
      answer1.innerHTML = "Extremely helpful";
      answer2.innerHTML = "Somewhat helpful";
      answer3.innerHTML = "Neutral";
      answer4.innerHTML = "Not helpful at all";
      break;

    case 4:
      question.innerHTML =
        "How satisfied are you with the loan options available through Bank Global?";
      answer1.innerHTML = "Very satisfied";
      answer2.innerHTML = "Satisfied";
      answer3.innerHTML = "Neutral";
      answer4.innerHTML = "Unsatisfied";
      break;

    case 5:
      question.innerHTML =
        "Have you had any issues with the authentication process for accessing your online banking account with Bank Global?";
      answer1.innerHTML = "No issues at all";
      answer2.innerHTML = "A few minor issues";
      answer3.innerHTML = "Moderate issues";
      answer4.innerHTML = "Major issues";
      break;

    case 6:
      question.innerHTML =
        "How satisfied are you with the online resources available for self-employed individuals through Bank Global?";
      answer1.innerHTML = "Very satisfied";
      answer2.innerHTML = "Satisfied";
      answer3.innerHTML = "Neutral";
      answer4.innerHTML = "Unsatisfied";
      break;

    case 7:
      question.innerHTML =
        "How satisfied are you with the online resources available for private clients through Bank Global?";
      answer1.innerHTML = "Very satisfied";
      answer2.innerHTML = "Satisfied";
      answer3.innerHTML = "Neutral";
      answer4.innerHTML = "Unsatisfied";
      break;

    case 8:
      if (
        counterOpt1 > counterOpt2 &&
        counterOpt1 > counterOpt3 &&
        counterOpt1 > counterOpt4
      ) {
        question.innerHTML =
          "We are thrilled to hear that you had a fantastic experience with our online banking services. We are committed to providing top-quality service and will continue to work on continuous improvement to ensure that our customers have the best possible experience with us.";
        question.style.color = "green";
      } else if (
        counterOpt2 > counterOpt1 &&
        counterOpt2 > counterOpt3 &&
        counterOpt2 > counterOpt4
      ) {
        question.innerHTML =
          "Thank you for taking the time to share your thoughts about our online banking services. We value all feedback and will use it to continue improving and updating our offerings to better serve our customers.";
        question.style.color = "green";
      } else if (
        counterOpt3 > counterOpt1 &&
        counterOpt3 > counterOpt2 &&
        counterOpt3 > counterOpt4
      ) {
        question.innerHTML =
          "hank you for your feedback on our online banking services. We are glad to hear that you were satisfied with your experience. We strive to provide reliable and efficient service to all of our customers, and we appreciate your feedback as we continue to work on improving and updating our offerings.";
        question.style.color = "green";
      } else {
        question.innerHTML =
          "We apologize for the subpar experience you had with our online banking services. We understand how important it is to have reliable and efficient service, and we will work diligently on continuous improvement to ensure that our customers receive the best possible service in the future.";
        question.style.color = "green";
      }

      break;

    default:
      counterClick = 0;
      counterOpt1 = 0;
      counterOpt2 = 0;
      counterOpt3 = 0;
      counterOpt4 = 0;
      break;
  }
}
// });

// let textOption1 = document.getElementById("text-option-1").innerHTML;
// let textOption2 = document.getElementById("text-option-2").innerHTML;
// let textOption3 = document.getElementById("text-option-3").innerHTML;
// let textOption4 = document.getElementById("text-option-4").innerHTML;
// if ((option_1, (input.checked = true))) {
//     textOption1 = "Very satisfied";
//   }

// function quiz() {
//   let input = element.querySelector(".form-check-input");
//   counterClick++;

//   if (counterClick == 1) {
//     question =
//       "Have you had any issues with the security measures in place for online banking with Bank Global?";
//     answer1 = "No issues at all";
//     answer2 = "A few minor issues";
//     answer3 = "Moderate issues";
//     answer4 = "Major issues";
//   }

//   if (counterClick == 2) {
//     question =
//       "How easy is it for you to find the information you need on the Bank Global website?";
//     answer1 = "Very easy";
//     answer2 = " Somewhat easy";
//     answer3 = "Neutral";
//     answer4 = "Difficult";
//   }

//   if (counterClick == 3) {
//     question =
//       "How helpful have the customer service representatives at Bank Global been when you've had questions or issues?";
//     answer1 = "Extremely helpful";
//     answer2 = "Somewhat helpful";
//     answer3 = "Neutral";
//     answer4 = "Not helpful at all";
//   }

//   if (counterClick == 4) {
//     question =
//       "How satisfied are you with the loan options available through Bank Global?";
//     answer1 = "Very satisfied";
//     answer2 = "Satisfied";
//     answer3 = "Neutral";
//     answer4 = "Unsatisfied";
//   }

//   if (counterClick == 5) {
//     question =
//       "Have you had any issues with the authentication process for accessing your online banking account with Bank Global?";
//     answer1 = "No issues at all";
//     answer2 = "A few minor issues";
//     answer3 = "Moderate issues";
//     answer4 = "Major issues";
//   }

//   if (counterClick == 6) {
//     question =
//       "How satisfied are you with the online resources available for self-employed individuals through Bank Global?";
//     answer1 = "Very satisfied";
//     answer2 = "Satisfied";
//     answer3 = "Neutral";
//     answer4 = "Unsatisfied";
//   }

//   if (counterClick == 7) {
//     question =
//       "How satisfied are you with the online resources available for private clients through Bank Global?";
//     answer1 = "Very satisfied";
//     answer2 = "Satisfied";
//     answer3 = "Neutral";
//     answer4 = "Unsatisfied";
//   }
// }

// your code here
