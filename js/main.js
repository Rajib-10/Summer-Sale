let totalPrice = 0;
function handleClick(target) {
  const itemContainer = document.getElementById("itemContainer");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  const childCount = itemContainer.childElementCount;
  li.innerHTML = `${childCount + 1}. ${itemName}`;
  itemContainer.appendChild(li);
  const itemPrice = target.childNodes[3].childNodes[5].innerText.split(".")[0];
  totalPrice = totalPrice + parseFloat(itemPrice);
  document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

  const makePurchaseButton = document.getElementById("make-purchase");
  if (totalPrice <= 0) {
    makePurchaseButton.setAttribute("disabled", true);
  } else {
    makePurchaseButton.removeAttribute("disabled");
  }

  const applyButton = document.getElementById("applyButton");
  if (totalPrice >= 200.0) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
  }
  return totalPrice;
}

const finalTotal = document.getElementById("finalTotal");
const discount = document.getElementById("discount");

document.getElementById("applyButton").addEventListener("click", function () {
  const couponInput = document.getElementById("couponInput");
  if (couponInput.value == "SELL200") {
    const discountAmount = totalPrice * (20 / 100);
    discount.innerText = discountAmount.toFixed(2);
    finalTotal.innerText = (totalPrice - discountAmount).toFixed(2);
    couponInput.value = "";
  } else {
    finalTotal.innerText = totalPrice.toFixed(2);
    couponInput.value = "";
  }
});

document.getElementById("goHomeButton").addEventListener("click", function () {
  location.href = "index.html";
  finalTotal.innerText = 0;
  discount.innerText = 0;
  document.getElementById("totalPrice").innerText = 0;
  document.getElementById("itemContainer").innerHTML = "";
  discountAmount = 0;
  totalPrice = 0;
});
