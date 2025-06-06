// Eid ul Adha ki date set karein (2024 mein 17 June hai)
// Har second countdown update hoga
// Abhi ka time
// Eid tak kitna time bacha hai?
// Agar Eid aa chuki hai
// Time ko days, hours, minutes, seconds mein calculate karein
// HTML mein show karein


const eidDate = new Date("june 7, 2025").getTime();
console.log(eidDate);

const updateCountDown = setInterval(() => {
    const currentDate = new Date().getTime();
    const remainingDaysInEid = eidDate - currentDate;
    console.log(remainingDaysInEid);
    if (remainingDaysInEid < 0) {
        clearInterval(updateCountDown);
        document.querySelector(".mainCont").innerHTML =
            `<h1 style="color: gold; font-size: 4rem; text-align: center;
          background-color: green; padding: 20px; border-radius: 10px;">
          Eid Mubarak!
        </h1>`;
        return;
    }

    const days = Math.floor(remainingDaysInEid / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingDaysInEid % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingDaysInEid % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingDaysInEid % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent=days
    document.querySelector(".hours ").textContent=hours
    document.querySelector(".minutes").textContent=minutes
    document.querySelector(".seconds").textContent=seconds

}, 1000);








