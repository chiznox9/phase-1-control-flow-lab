// Function to determine ride cost message based on distance
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    return "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// Function to check the city using a ternary operator
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function to return response based on tip amount using a switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
