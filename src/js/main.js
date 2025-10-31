const mascots = [
    { year: 1959, country: "ไทย" },
    { year: 1961, country: "เมียนมา" },
    { year: 1963, country: "กัมพูชา" },
    { year: 1965, country: "มาเลเซีย" },
    { year: 1967, country: "ไทย" },
    { year: 1969, country: "เมียนมา" },
    { year: 1971, country: "ไทย" },
    { year: 1973, country: "สิงคโปร์" },
    { year: 1975, country: "ไทย" },
    { year: 1977, country: "มาเลเซีย" },
    { year: 1979, country: "อินโดนีเซีย" },
    { year: 1981, country: "ฟิลิปปินส์" },
    { year: 1983, country: "สิงคโปร์" },
    { year: 1985, country: "ไทย", mascot: "mascot1985.webp", color: "#F3EA55", mascotName: "วิเชียรมาศ (Wichien Maat)" },
    { year: 1987, country: "อินโดนีเซีย" },
    { year: 1989, country: "มาเลเซีย", mascot: "mascot1989.webp", color: "#F3EA55", mascotName: "โยฮัน (Johan)" },
    { year: 1991, country: "ฟิลิปปินส์", mascot: "mascot1991.webp", color: "#F3EA55", mascotName: "คิโกะ ลาบูโย (Kiko Labuyo)" },
    { year: 1993, country: "สิงคโปร์", mascot: "mascot1993.webp", color: "#F3EA55", mascotName: "สิงหา (Singha)" },
    { year: 1995, country: "ไทย", mascot: "mascot1995.webp", color: "#F3EA55", mascotName: "สวัสดี (Sawasdee)" },
    { year: 1997, country: "อินโดนีเซีย", mascot: "mascot1997.webp", color: "#F3EA55", mascotName: "หนุมาน (Hanuman)" },
    { year: 1999, country: "บรูไนฯ", mascot: "mascot1999.webp", color: "#EA482B", mascotName: "อาวัง บูดิมัน (Awang Budiman)" },
    { year: 2001, country: "มาเลเซีย", mascot: "mascot2001.webp", color: "#F3EA55", mascotName: "ซี ตูมัส (Si Tumas)" },
    { year: 2003, country: "เวียดนาม", mascot: "mascot2003.webp", color: "#F3EA55", mascotName: "ตรังวัง (Trau Vang)" },
    { year: 2005, country: "ฟิลิปปินส์", mascot: "mascot2005.png", color: "#F3EA55", mascotName: "กีลาส (Gilas)" },
    { year: 2007, country: "ไทย", mascot: "mascot2007.webp", color: "#F3EA55", mascotName: "แคน (Can)" },
    { year: 2009, country: "ลาว", mascot: "mascot2009.png", color: "#F3EA55", mascotName: "จำปาและจำปี (Champa & Champi)" },
    { year: 2011, country: "อินโดนีเซีย", mascot: "mascot2011.png", color: "#F3EA55", mascotName: "โมโด้และโมดี้ (Modo & Modi)" },
    { year: 2013, country: "เมียนมา", mascot: "mascot2013.png", color: "#F3EA55", mascotName: "อู ชิ่ว ยู และดอว์ โม (Shwe Yoe & Ma Moe)" },
    { year: 2015, country: "สิงคโปร์", mascot: "mascot2015.png", color: "#F3EA55", mascotName: "นีล่า (Nila)" },
    { year: 2017, country: "มาเลเซีย", mascot: "mascot2017.webp", color: "#F3EA55", mascotName: "ริเมา (Rimau)" },
    { year: 2019, country: "ฟิลิปปินส์", mascot: "mascot2019.png", color: "#EB9AFC", mascotName: "ปามี่ (Pami)" },
    { year: 2021, country: "เวียดนาม", mascot: "mascot2021.png", color: "#F3EA55", mascotName: "ซาวลา (Saola)" },
    { year: 2023, country: "กัมพูชา", mascot: "mascot2023.webp", color: "#F3EA55", mascotName: "โบเร่และรอมดุล (Bovey & Rondoul" },
    { year: 2025, country: "ไทย", mascot: "mascot2025.png", color: "#EB9AFC", mascotName: "สาน (The Sans)" },
];

// สร้างกริดมาสคอต
const grid = document.getElementById("mascotGrid");
mascots.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.year = item.year;
    if (item.year === 1963) {
        card.classList.add("card1963");
    }

    card.innerHTML = `
    <div class="year">${item.year}</div>
        ${item.mascot
            ? `<img src="asset/${item.mascot}" alt="Mascot ${item.year}" class="mascot-img">`
            : `<div class="none"></div>`
        }
    <div class="country">ประเทศ${item.country}</div>
     ${item.mascotName
            ? `<div class="tooltip">${item.mascotName}</div>`
            : ""
        }
  `;
    grid.appendChild(card);
});

// ใช้ IntersectionObserver ตรวจ scroll
const steps = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const step = entry.target.dataset.step;
            updateViz(step);
        }
    });
}, { threshold: 0.6 });

steps.forEach((step) => observer.observe(step));

// ส่วนของ scrollytelling ใน section 03
const storySteps = document.querySelectorAll(".story .step");
const vizImage = document.getElementById("vizImage");

const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            vizImage.src = entry.target.dataset.img;
        }
    });
}, { threshold: 0.5 });

storySteps.forEach((s) => storyObserver.observe(s));

// เปลี่ยนสถานะ highlight
function updateViz(step) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((c) => c.classList.remove("highlight"));

    if (step === "intro") {
        mascots.forEach(mascot => {
            if (mascot.color) document.querySelector(`[data-year='${mascot.year}']`).style.backgroundColor = "var(--light-blue-color)";
        });

    } else if (step === "pre-animals") {
        mascots.forEach(mascot => {
            document.querySelector(`[data-year='${mascot.year}']`).style.backgroundColor = mascot.color;
            document.querySelector(`[data-year='${mascot.year}']`).style.opacity = 1;
            // document.querySelector(`[data-year='${mascot.year}']`).style = {
            //     backgroundColor: mascot.color,
            //     opacity: 1
            // }
        });
    } else if (step === "animals") {
        console.log("Highlight Lions");
        highlightYears([1985, 1989, 1991, 1993, 1995, 1997, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017, 2021, 2023]);

    } else if (step === "Lions") {
        console.log("Highlight Lions");
        highlightYears([1993, 2015]);
    } else if (step === "Cats") {
        highlightYears([1985, 1995, 2007]);
    }
    else if (step === "Duo") {
        highlightYears([2009, 2011, 2013, 2023]);
    }
    else if (step === "People") {
        highlightYears([1999]);
    }
    else if (step === "Symbols") {
        highlightYears([2019, 2025]);
    }


    // Helper functions
    function highlightYears(years) {
        mascots.forEach(mascot => {

            document.querySelector(`[data-year='${mascot.year}']`).style.opacity = years.includes(mascot.year) ? "1" : "0.3";
        });

    }

}
