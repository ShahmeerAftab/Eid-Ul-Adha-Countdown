// Eid ul Adha ki date set karein (2024 mein 17 June hai)
// Har second countdown update hoga
// Abhi ka time
// Eid tak kitna time bacha hai?
// Agar Eid aa chuki hai
// Time ko days, hours, minutes, seconds mein calculate karein
// HTML mein show karein

const eidDate = new Date("June 7, 2025").getTime();

const interval=setInterval(() => {
    const currentTime = new Date().getTime();
    const leftTime = eidDate - currentTime;
    console.log(leftTime);

    if (leftTime < 0) {
        clearInterval(interval);
        document.querySelector(".mainCont").innerHTML = "Eid Mubarak";
        return;
    }

    const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent=days
document.querySelector(".hours").textContent=hours
document.querySelector(".minutes").textContent=minutes
document.querySelector(".seconds").textContent=seconds

}, 1000);




