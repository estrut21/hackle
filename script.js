function checkPasscode() {
    let guess =
        document.getElementById("passcode").value;
    
    if (guess === "1234") {
        document.body.innerHTML = `
          <header>
            <h1> Access Granted </h1>
            <p> You unlocked the vault and succesfully completed the challenge.
            </p>
            <a href="index.html"> return home
            </a>
        </header>
        `;
} else {
    window.location.href = "failure.html";
}

}