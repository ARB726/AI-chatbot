
// // // let prompt=document.querySelector("#prompt")
// // // let submitbtn=document.querySelector("#submit")
// // // let chatContainer=document.querySelector(".chat-container")
// // // let imagebtn=document.querySelector("#image")
// // // let image=document.querySelector("#image img")
// // // let imageinput=document.querySelector("#image input")

// // // const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=Your-Api-Key"

// // // let user={
// // //     message:null,
// // //     file:{
// // //         mime_type:null,
// // //         data: null
// // //     }
// // // }
 
// // // async function generateResponse(aiChatBox) {

// // // let text=aiChatBox.querySelector(".ai-chat-area")
// // //     let RequestOption={
// // //         method:"POST",
// // //         headers:{'Content-Type' : 'application/json'},
// // //         body:JSON.stringify({
// // //             "contents":[
// // //                 {"parts":[{text:user.message},(user.file.data?[{inline_data:user.file}]:[])

// // //                 ]
// // //             }]
// // //         })
// // //     }
// // //     try{
// // //         let response= await fetch(Api_Url,RequestOption)
// // //         let data=await response.json()
// // //        let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
// // //        text.innerHTML=apiResponse    
// // //     }
// // //     catch(error){
// // //         console.log(error);
        
// // //     }
// // //     finally{
// // //         chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})
// // //         image.src=`img.svg`
// // //         image.classList.remove("choose")
// // //         user.file={}
// // //     }
// // // }



// // // function createChatBox(html,classes){
// // //     let div=document.createElement("div")
// // //     div.innerHTML=html
// // //     div.classList.add(classes)
// // //     return div
// // // }


// // // function handlechatResponse(userMessage){
// // //     user.message=userMessage
// // //     let html=`<img src="user.png" alt="" id="userImage" width="8%">
// // // <div class="user-chat-area">
// // // ${user.message}
// // // ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
// // // </div>`
// // // prompt.value=""
// // // let userChatBox=createChatBox(html,"user-chat-box")
// // // chatContainer.appendChild(userChatBox)

// // // chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})

// // // setTimeout(()=>{
// // // let html=`<img src="ai.png" alt="" id="aiImage" width="10%">
// // //     <div class="ai-chat-area">
// // //     <img src="loading.webp" alt="" class="load" width="50px">
// // //     </div>`
// // //     let aiChatBox=createChatBox(html,"ai-chat-box")
// // //     chatContainer.appendChild(aiChatBox)
// // //     generateResponse(aiChatBox)

// // // },600)

// // // }


// // // prompt.addEventListener("keydown",(e)=>{
// // //     if(e.key=="Enter"){
// // //        handlechatResponse(prompt.value)

// // //     }
// // // })

// // // submitbtn.addEventListener("click",()=>{
// // //     handlechatResponse(prompt.value)
// // // })
// // // imageinput.addEventListener("change",()=>{
// // //     const file=imageinput.files[0]
// // //     if(!file) return
// // //     let reader=new FileReader()
// // //     reader.onload=(e)=>{
// // //        let base64string=e.target.result.split(",")[1]
// // //        user.file={
// // //         mime_type:file.type,
// // //         data: base64string
// // //     }
// // //     image.src=`data:${user.file.mime_type};base64,${user.file.data}`
// // //     image.classList.add("choose")
// // //     }
    
// // //     reader.readAsDataURL(file)
// // // })


// // // imagebtn.addEventListener("click",()=>{
// // //     imagebtn.querySelector("input").click()
// // // })

















// // let prompt = document.querySelector("#prompt");
// // let submitbtn = document.querySelector("#submit");
// // let chatContainer = document.querySelector(".chat-container");
// // let imagebtn = document.querySelector("#image");
// // let image = document.querySelector("#image img");
// // let imageinput = document.querySelector("#image input");

// // const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCZxfVeuXFDVaU00dTcjBvXBKhhVv9R6s8";

// // let user = {
// //     message: null,
// //     file: {
// //         mime_type: null,
// //         data: null
// //     }
// // };

// // async function generateResponse(aiChatBox) {
// //     let text = aiChatBox.querySelector(".ai-chat-area");
// //     let RequestOption = {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //             prompt: { text: user.message }
// //         })
// //     };

// //     try {
// //         let response = await fetch(Api_Url, RequestOption);

// //         // Check for HTTP errors
// //         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

// //         let data = await response.json();

// //         // Debugging: Log the entire API response for analysis
// //         console.log("API Response:", data);

// //         // Validate response structure
// //         if (!data || !data.candidates || !data.candidates[0] || !data.candidates[0].output) {
// //             throw new Error("Invalid API response structure");
// //         }

// //         // Extract and display AI response
// //         let apiResponse = data.candidates[0].output.trim();
// //         text.innerHTML = apiResponse;
// //     } catch (error) {
// //         console.error("Error in generateResponse:", error);
// //         text.innerHTML = "Something went wrong. Please try again.";
// //     } finally {
// //         chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
// //         image.src = `img.svg`;
// //         image.classList.remove("choose");
// //         user.file = {};
// //     }
// // }



// // function createChatBox( html, classes) {
// //     let div = document.createElement("div");
// //     div.innerHTML = html;
// //     div.classList.add(classes);
// //     return div;
// // }

// // function handlechatResponse(userMessage) {
// //     user.message = userMessage;
// //         // Validate response structure
// //         // if (!data.contents || !dat)
// //     let html = `<img src="user.png" alt="" id="userImage" width="8%">
// // <div class="user-chat-area">
// // ${user.message}
// // ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
// // </div>`;
// //     prompt.value = "";
// //     let userChatBox = createChatBox(html, "user-chat-box");
// //     chatContainer.appendChild(userChatBox);

// //     chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

// //     setTimeout(() => {
// //         let html = `<img src="ai.png" alt="" id="aiImage" width="10%">
// //     <div class="ai-chat-area">
// //     <img src="loading.webp" alt="" class="load" width="50px">
// //     </div>`;
// //         let aiChatBox = createChatBox(html, "ai-chat-box");
// //         chatContainer.appendChild(aiChatBox);
// //         generateResponse(aiChatBox);

// //     }, 600);
// // }

// // prompt.addEventListener("keydown", (e) => {
// //     if (e.key == "Enter") {
// //         handlechatResponse(prompt.value);
// //     }
// // });

// // submitbtn.addEventListener("click", () => {
// //     handlechatResponse(prompt.value);
// // });

// // imageinput.addEventListener("change", () => {
// //     const file = imageinput.files[0];
// //     if (!file) return;
// //     let reader = new FileReader();
// //     reader.onload = (e) => {
// //         let base64string = e.target.result.split(",")[1];
// //         user.file = {
// //             mime_type: file.type,
// //             data: base64string
// //         };
// //         image.src = `data:${user.file.mime_type};base64,${user.file.data}`;
// //         image.classList.add("choose");
// //     };

// //     reader.readAsDataURL(file);
// // });

// // imagebtn.addEventListener("click", () => {
// //     imagebtn.querySelector("input").click();
// // });








// let prompt = document.querySelector("#prompt");
// let submitbtn = document.querySelector("#submit");
// let chatContainer = document.querySelector(".chat-container");
// let imagebtn = document.querySelector("#image");
// let image = document.querySelector("#image img");
// let imageinput = document.querySelector("#image input");

// const Api_Url =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDF98ldQXc9OWA20GaWrmqzDu7rpW_0OAg";

// let user = {
//   message: null,
//   file: {
//     mime_type: null,
//     data: null,
//   },
// };

// async function generateResponse(aiChatBox) {
//     let text = aiChatBox.querySelector(".ai-chat-area");
//     let requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         instances: [
//           {
//             prompt: {
//               text: user.message,
//             },
//           },
//         ],
//       }),
//     };
  
//     try {
//       let response = await fetch(Api_Url, requestOptions);
  
//       if (!response.ok) {
//         const errorBody = await response.text();
//         console.error("Error Response Body:", errorBody);
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       let data = await response.json();
  
//       if (!data || !data.candidates || !data.candidates[0]) {
//         throw new Error("Invalid API response structure.");
//       }
  
//       let apiResponse = data.candidates[0].output.trim();
//       text.innerHTML = apiResponse;
//     } catch (error) {
//       console.error("Error in generateResponse:", error);
//       text.innerHTML = "Something went wrong. Please try again.";
//     } finally {
//       chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
//       image.src = `img.svg`;
//       image.classList.remove("choose");
//       user.file = {};
//     }
//   }
  

// function createChatBox(html, classes) {
//   let div = document.createElement("div");
//   div.innerHTML = html;
//   div.classList.add(classes);
//   return div;
// }

// function handleChatResponse(userMessage) {
//   user.message = userMessage;

//   let html = `<img src="user.png" alt="" id="userImage" width="8%">
// <div class="user-chat-area">
// ${user.message}
// ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
// </div>`;
//   prompt.value = "";
//   let userChatBox = createChatBox(html, "user-chat-box");
//   chatContainer.appendChild(userChatBox);

//   chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

//   setTimeout(() => {
//     let html = `<img src="ai.png" alt="" id="aiImage" width="10%">
//     <div class="ai-chat-area">
//     <img src="loading.webp" alt="" class="load" width="50px">
//     </div>`;
//     let aiChatBox = createChatBox(html, "ai-chat-box");
//     chatContainer.appendChild(aiChatBox);
//     generateResponse(aiChatBox);
//   }, 600);
// }

// prompt.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && prompt.value.trim()) {
//     handleChatResponse(prompt.value);
//   }
// });

// submitbtn.addEventListener("click", () => {
//   if (prompt.value.trim()) {
//     handleChatResponse(prompt.value);
//   }
// });

// imageinput.addEventListener("change", () => {
//   const file = imageinput.files[0];
//   if (!file) return;
//   let reader = new FileReader();
//   reader.onload = (e) => {
//     let base64string = e.target.result.split(",")[1];
//     user.file = {
//       mime_type: file.type,
//       data: base64string,
//     };
//     image.src = `data:${user.file.mime_type};base64,${user.file.data}`;
//     image.classList.add("choose");
//   };

//   reader.readAsDataURL(file);
// });

// imagebtn.addEventListener("click", () => {
//   imagebtn.querySelector("input").click();
// });


//------------------------------------------------------------------------------------------------
// DOM Elements
// let prompt = document.querySelector("#prompt");
// let submitbtn = document.querySelector("#submit");
// let chatContainer = document.querySelector(".chat-container");

// // API URL
// const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCZxfVeuXFDVaU00dTcjBvXBKhhVv9R6s8";

// // Function to generate AI response
// async function generateResponse(userMessage, aiChatBox) {
//     let text = aiChatBox.querySelector(".ai-chat-area");
//     let requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             contents: [
//                 {
//                     parts: [{ text: userMessage }]
//                 }
//             ]
//         }),
//     };

//     try {
//         let response = await fetch(Api_Url, requestOptions);

//         if (!response.ok) {
//             const errorBody = await response.text();
//             console.error("Error Response Body:", errorBody);
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         let data = await response.json();

//         if (!data || !data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts) {
//             throw new Error("Invalid API response structure.");
//         }

//         let apiResponse = data.candidates[0].content.parts[0].text.trim();
//         text.innerHTML = apiResponse;
//     } catch (error) {
//         console.error("Error in generateResponse:", error);
//         text.innerHTML = "Something went wrong. Please try again.";
//     } finally {
//         chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
//     }
// }

// // Function to create a chat box
// function createChatBox(html, classes) {
//     let div = document.createElement("div");
//     div.innerHTML = html;
//     div.classList.add(classes);
//     return div;
// }

// // Handle User Input and AI Response
// function handleChatResponse(userMessage) {
//     let userChatHtml = `<img src="user.png" alt="" id="userImage" width="8%">
//     <div class="user-chat-area">${userMessage}</div>`;
//     prompt.value = "";
//     let userChatBox = createChatBox(userChatHtml, "user-chat-box");
//     chatContainer.appendChild(userChatBox);

//     chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

//     setTimeout(() => {
//         let aiChatHtml = `<img src="ai.png" alt="" id="aiImage" width="10%">
//         <div class="ai-chat-area">
//             <img src="loading.webp" alt="" class="load" width="50px">
//         </div>`;
//         let aiChatBox = createChatBox(aiChatHtml, "ai-chat-box");
//         chatContainer.appendChild(aiChatBox);
//         generateResponse(userMessage, aiChatBox);
//     }, 600);
// }

// // Event Listeners
// prompt.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" && prompt.value.trim()) {
//         handleChatResponse(prompt.value);
//     }
// });

// submitbtn.addEventListener("click", () => {
//     if (prompt.value.trim()) {
//         handleChatResponse(prompt.value);
//     }
// });



// DOM Elements
let prompt = document.querySelector("#prompt");
let submitbtn = document.querySelector("#submit");
let imagebtn = document.querySelector("#image-btn");
let imageInput = document.querySelector("#image-input");
let chatContainer = document.querySelector(".chat-container");

// API URL
const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCZxfVeuXFDVaU00dTcjBvXBKhhVv9R6s8";

// User object to store message and file data
let user = {
    message: null,
    file: {
        mime_type: null,
        data: null,
    },
};

// Function to generate AI response
async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector(".ai-chat-area");
    let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: user.message },
                        ...(user.file.data ? [{ inline_data: user.file }] : []),
                    ],
                },
            ],
        }),
    };

    try {
        let response = await fetch(Api_Url, requestOptions);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("Error Response Body:", errorBody);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        if (!data || !data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts) {
            throw new Error("Invalid API response structure.");
        }

        let apiResponse = data.candidates[0].content.parts[0].text.trim();
        text.innerHTML = apiResponse;
    } catch (error) {
        console.error("Error in generateResponse:", error);
        text.innerHTML = "Something went wrong. Please try again.";
    } finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
        user.file = {}; // Reset file after response
    }
}

// Function to create a chat box
function createChatBox(html, classes) {
    let div = document.createElement("div");
    div.innerHTML = html;
    div.classList.add(classes);
    return div;
}

// Handle User Input and AI Response
function handleChatResponse(userMessage) {
    user.message = userMessage;

    let userChatHtml = `<img src="user.png" alt="" id="userImage" width="8%">
    <div class="user-chat-area">
        ${user.message}
        ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="uploaded-image">` : ""}
    </div>`;
    prompt.value = "";

    let userChatBox = createChatBox(userChatHtml, "user-chat-box");
    chatContainer.appendChild(userChatBox);

    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
        let aiChatHtml = `<img src="ai.png" alt="" id="aiImage" width="10%">
        <div class="ai-chat-area">
            <img src="loading.webp" alt="Loading" class="load" width="50px">
        </div>`;
        let aiChatBox = createChatBox(aiChatHtml, "ai-chat-box");
        chatContainer.appendChild(aiChatBox);

        generateResponse(aiChatBox);
    }, 600);
}

// Handle Image Upload
// imagebtn.addEventListener("click", () => {
//     imageInput.click();
// });

// imageInput.addEventListener("change", () => {
//     const file = imageInput.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//         user.file = {
//             mime_type: file.type,
//             data: e.target.result.split(",")[1],
//         };

//         // Add a preview to the chat area
//         let previewHtml = `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="uploaded-image">`;
//         let previewBox = createChatBox(previewHtml, "user-chat-box");
//         chatContainer.appendChild(previewBox);
//         chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
//     };
//     reader.readAsDataURL(file);
// });

// Event Listeners for Text Input
prompt.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && prompt.value.trim()) {
        handleChatResponse(prompt.value);
    }
});

submitbtn.addEventListener("click", () => {
    if (prompt.value.trim()) {
        handleChatResponse(prompt.value);
    }
});







