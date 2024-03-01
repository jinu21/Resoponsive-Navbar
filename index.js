const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


//     // Function to generate QR code
// // generateQR.js

// function generateQRCode(amount=300) {
//     const upiId = '9146524287@paytm';
//     const upiString = `upi://pay?pa=${upiId}&mc=your-merchant-code&tid=your-transaction-id&tr=your-transaction-reference-id&tn=Payment%20for%20Goods&cu=INR&url=https://your-website-url&mc=${300}`;

//     const qrcode = new QRCode(document.getElementById('qrcode'), {
//         text: upiString,
//         width: 128,
//         height: 128
//     });

//     document.getElementById('amount').innerText = `Amount: ${amount}`;
// }

