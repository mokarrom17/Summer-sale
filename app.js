let total = 0;

function handleClickCard(target){
      const selectedCards = document.getElementById('selected-cards');
      const productName = target.childNodes[5].childNodes[1].innerText;
      const li = document.createElement('li');
      li.innerText = productName;
      selectedCards.appendChild(li);
      
      
      const productPrice = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
      const totalPrice = document.getElementById('total-price');
      totalPrice.innerText = productPrice;

      total = parseFloat(total) + parseFloat(totalPrice.innerText);
      totalPrice.innerText = total;
      

      const couponBtn = document.getElementById('coupon-btn');
      // const couponField = document.getElementById('coupon-field');
      
      if(total >= 200 ){
            couponBtn.disabled = false;
      }
      else{
            true;
      }
      const purchaseBtn = document.getElementById('purchase-btn');
      if(total > 0){
           purchaseBtn.removeAttribute('disabled');
      }
      
      
}

                  // total price
const coupon = document.getElementById('coupon-btn').addEventListener('click', function(){
      const couponField = document.getElementById('coupon-field');
      if(couponField.value == ''){
            alert ('Please enter the coupon code!!');
            couponField.value ='';
            
      }
      
      if(couponField.value !== 'SELL200'){
            alert ('It is not a valide coupon code');
            couponField.value ='';
            
      }
      else{
            const totalPrice = document.getElementById('total-price');
      const totalInner = totalPrice.innerText;
      const totalStringToNumber = parseFloat(totalInner);
      const discount = totalStringToNumber * 0.20;
      const discountInt = parseInt(discount);
                  // discount
      const discountFiled = document.getElementById('discount');
      discountFiled.innerText = discountInt;
                  // total
      const total = document.getElementById('total');
      const discountTotal = totalStringToNumber - discountInt;
      total.innerText = discountTotal;

      couponField.value ='';
      }
    
});




