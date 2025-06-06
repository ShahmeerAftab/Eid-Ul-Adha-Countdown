// .........................Steps to Follow....................
// 1) Set date of Eid ul Adha (june 7, 2025)
// 2) Countdown update in every  second 
// 3) current time
// 4) Find remaining days in eid
// 5) If Eid is over
// 6) Calculate Time in days, hours, minutes and seconds 
// 7) Show in HTML 


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








