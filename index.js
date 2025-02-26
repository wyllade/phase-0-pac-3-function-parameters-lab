function introduction(Emman) {
    return `Hi, my name is ${Emman}.`;
}

function introductionWithLanguage(Emman, JavaScript) {
    return `Hi, my name is ${Emman} and I am learning to program in ${JavaScript}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  introduction("John");  // Output: "Hi, my name is John."

    introductionWithLanguage("John", "JavaScript");  // Output: "Hi, my name is John and I am learning to program in JavaScript."