const activity = document.getElementById("bored-bot");
const btn = document.getElementById("bored-btn");
const title = document.getElementById("title")
const main = document.getElementById("main")


btn.addEventListener('click', findActivity)

function findActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activity.innerHTML = `<h3>🎉 ${data.activity} 🎉</h3>`
            title.textContent = "🦾 HappyBot🦿"
            main.classList.add("fun")
        })
}
 


    