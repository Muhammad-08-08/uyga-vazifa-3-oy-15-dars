// Employee Bonus Calculation:
// Write a program that calculates an employee's bonus based on their
// years of service and performance rating:

// Years of Service:

// More than 10 years: Eligible for a bonus.
// Between 5 and 10 years: Eligible for half the bonus.
// Less than 5 years: No bonus.

// Rating of "Excellent": Full bonus.
// Rating of "Good": 75% of the bonus.
// Rating of "Average": 50% of the bonus.
// Calculate and display the final bonus amount, with a ternary operator
// handling each condition. Define a base bonus amount (e.g., $1000) that the
//  conditions will modify.

// ////////////////////////////////////////
// Bank Loan Interest Rate Calculation:
// Write a program to calculate the interest rate for a bank loan based on
// the customer’s credit score and loan amount:

// Credit Score:

// 750 and above: Low-interest rate.
// Between 600 and 749: Medium-interest rate.
// Below 600: High-interest rate.
// Loan Amount (only applies if interest is low or medium):

// For amounts over $10,000, reduce the rate by an additional 0.5%.
// For amounts under $5,000, add an additional 0.5%.
// Use a base interest rate (e.g., 5%) and modify it based on the
// conditions using nested ternary operators. Display the final interest rate
// based on the credit score and loan amount.

// ? 1-misol

// let xodim = parseFloat(prompt("necha yillik ish tajribangiz bor"));
// let oylik = parseFloat(prompt("qancha oylik olasiz"));
// let reyting = prompt("reytingingiz nechchi");

// let sum =
//   xodim > 10
//     ? ` bonus bilan ${oylik * 2} oylik chiqdi`
//     : xodim < 10 && xodim > 5
//     ? ` bonus bilan ${oylik * 1.5} oylik chiqdi`
//     : "afsuski sizga oylik chiqmadi";

// let num =
//   reyting === "Alo"
//     ? ` reytingi hisobiga ${oylik * 2} oylik chiqdi`
//     : reyting === "Yaxshi"
//     ? ` reytingi hisobiga ${oylik * 1.75} oylik chiqdi`
//     : reyting === "O'rtacha"
//     ? ` reytingi hisobiga ${oylik * 1.5} oylik chiqdi`
//     : `Afsuski reyting past`;

//     alert(sum);
//     alert(num);

// ? 1-misol tugadi

// ! 2-misol

// let foiz = 9500;
// let ball = prompt("kredit balingizni kiriting");
// let kredit = prompt("qancha kredit olmoqchisiz");

// let sum =
//   ball >= 750
//     ? `past foiz stavkasi.`
//     : ball <= 749 && ball > 600
//     ? `O'rtacha foiz stavkasi.`
//     : `Yuqori foiz stavkasi.`;
// let num = kredit >= 10000 ? kredit - foiz : kredit + foiz;
// alert(sum);
// alert(num);

// ! 2-misol tugadi