function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!"
    //console.log();
  }
  else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks."
  }
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}
console.log(scuberGreetingForFeet(2499));

function ternaryCheckCity(city){
  // Write your code here!
  let cityResponse = city === "NYC" ? "Ok, sounds good." : "No go."  
  return cityResponse;  
}
console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      //break;
    case 'not as generous':
      return 'Thank you.';
      //break;
    default:
      return 'Bye.';
      //break;
  }
}
console.log(switchOnCharmFromTip('not as generous'));