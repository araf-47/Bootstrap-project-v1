
function checkEligibility() {
    let age = document.getElementById("ageInput").value; // see the obsidian note for this: #T$Y8
    let resultDiv = document.getElementById("result"); // see the obsidian note for this: 
    console.log(typeof age)
    console.log(age)

    if (age == "") {
        // alert("Please enter your age first!");
        resultDiv.innerHTML = "<p style='color: red;'>Please enter your age first!</p>";
        return;
    }

    if (age >= 18) {
        // alert("You are eligible to vote.");
        resultDiv.innerHTML = "<p style='color: green;'>You are eligible to vote.</p>";
    } else {
        // alert("Go home, you are a Kid.");
        resultDiv.innerHTML = "<p style='color: orange;'>Go home, you are a Kid.</p>";
    }
}