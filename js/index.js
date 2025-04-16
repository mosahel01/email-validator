const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");
const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value.trim();

    resultCont.innerHTML = `<img width="50" src="img/loading.svg" alt="Loading...">`;

    const apiKey = "426a6597743a4476b23faf4c116c3cbc";
    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;

    try {
        const res = await fetch(url);
        const result = await res.json();

        let str = `<div class="validation-summary" style="font-family: Arial, sans-serif; line-height: 1.6;">`;
        str += `<h3>✅ Email Validation Results</h3>`;
        str += `<p>📧 <strong>Checked:</strong> <span style="color: #1e3a8a;">${email}</span></p>`;

        const emojiMap = {
            "is_valid_format": "📄",
            "is_free_email": "🆓",
            "is_disposable_email": "🗑️",
            "is_role_email": "👥",
            "is_catchall_email": "🎯",
            "is_mx_found": "📬",
            "is_smtp_valid": "📡",
            "quality_score": "⭐"
        };

        for (let key in result) {
            if (result[key] !== "" && result[key] !== null) {
                let value = result[key];
                if (typeof value === "object" && value !== null && "value" in value) {
                    value = value.value;
                }
                const formattedKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
                const emoji = emojiMap[key] || "🔹";
                str += `<div>${emoji} <strong>${formattedKey}:</strong> ${value}</div>`;
            }
        }

        str += `</div>`;
        resultCont.innerHTML = str;

    } catch (error) {
        resultCont.innerHTML = `<div style="color:red;">❌ Error fetching results. Please try again.</div>`;
        console.error(error);
    }
});














// submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     console.log("Clicked!")
//     resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
//     // let key = "YOUR-API-KEY"
//     let key = "426a6597743a4476b23faf4c116c3cbc"
//     let email = document.getElementById("username").value
//     // let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
//     // let url = `https://emailvalidation.abstractapi.com/v1/?api_key=426a6597743a4476b23faf4c116c3cbc&email=mosahel@proton.me`
//     let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`
//     let res = await fetch(url)
//     let result = await res.json()
//     let str = ``
//     for (key of Object.keys(result)) {
//         if (result[key] !== "" && result[key] !== " ") {
//             // str = str + `<div>${key}: ${result[key]}</div>`
//             let value = result[key]
//             if (typeof value === 'object' && value !== null && 'value' in value) {
//                 value = value.value
//             }
//             str += `<div><strong>${key}:</strong> ${value}</div>`
//         }
//     }
//     console.log(str)
//     resultCont.innerHTML = str
// })


// submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     console.log("Clicked!");
//     resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="loading">`;
//
//     let key = "426a6597743a4476b23faf4c116c3cbc";
//     let email = document.getElementById("username").value;
//     let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`;
//
//     try {
//         let res = await fetch(url);
//         let result = await res.json();
//
//         let str = `
//             <div class="validation-summar">
//             <h2>✅ Email Validation Summary</h2>
//             <ul style="text-align: left; line-height: 1.8;">
//                 <li><strong>Email Address:</strong> ${result.email}</li>
//                 <li><strong>Status:</strong> ${result.deliverability === "DELIVERABLE" ? "✅ Deliverable" : "❌ Undeliverable"}</li>
//                 <li><strong>Quality Score:</strong> ${Math.round(result.quality_score * 100)}%</li>
//                 <li><strong>Format:</strong> ${result.is_valid_format.value ? "✅ Valid" : "❌ Invalid"}</li>
//                 <li><strong>Email Provider:</strong> ${result.is_free_email.value ? "Free (e.g., Gmail)" : "Business/Custom"}</li>
//                 <li><strong>Disposable Email:</strong> ${result.is_disposable_email.value ? "✅ Yes" : "❌ No"}</li>
//                 <li><strong>Role-based Email:</strong> ${result.is_role_email.value ? "✅ Yes" : "❌ No"}</li>
//                 <li><strong>Catch-all Domain:</strong> ${result.is_catchall_email.value ? "✅ Yes" : "❌ No"}</li>
//                 <li><strong>MX Records Found:</strong> ${result.is_mx_found.value ? "✅ Yes" : "❌ No"}</li>
//                 <li><strong>SMTP Check:</strong> ${result.is_smtp_valid.value ? "✅ Passed" : "❌ Failed"}</li>
//             </ul>
//             </div>
//         `;
//
//         resultCont.innerHTML = str;
//
//     } catch (err) {
//         console.error("Error fetching validation result:", err);
//         resultCont.innerHTML = `<div style="color: red;">❌ Failed to fetch email validation data.</div>`;
//     }
// });


// const submitBtn = document.getElementById("submitBtn");
// const resultCont = document.getElementById("resultCont");
// const emailForm = document.getElementById("emailForm");
//
// emailForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const email = document.getElementById("username").value.trim();
//
//     resultCont.innerHTML = `<img width="50" src="img/loading.svg" alt="Loading...">`;
//
//     const apiKey = "426a6597743a4476b23faf4c116c3cbc";
//     const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;
//
//     try {
//         const res = await fetch(url);
//         const result = await res.json();
//
//         let str = `<div class="validation-summary">`;
//         for (let key in result) {
//             if (result[key] !== "" && result[key] !== null) {
//                 let value = result[key];
//                 if (typeof value === "object" && value !== null && "value" in value) {
//                     value = value.value;
//                 }
//                 const formattedKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
//                 str += `<div><strong>${formattedKey}:</strong> ${value}</div>`;
//             }
//         }
//         str += `</div>`;
//         resultCont.innerHTML = str;
//
//     } catch (error) {
//         resultCont.innerHTML = `<div style="color:red;">Error fetching results. Please try again.</div>`;
//         console.error(error);
//     }
// });







