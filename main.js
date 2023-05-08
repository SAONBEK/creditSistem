
document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  // Hisoblash

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Oylik to'lovni hisoblash

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Foizlarni hisoblash
  
  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Umumiy to'lovni hisoblash

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Natijalarni ko'rsatish
  document.getElementById("monthlyPayment").innerHTML = ""  + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "%"   + totalInterest;

  document.getElementById("totalPayment").innerHTML = ""   + totalPayment;

  e.preventDefault();
}