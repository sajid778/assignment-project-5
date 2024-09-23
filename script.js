document.getElementById('donation-btn').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input').value);
    console.log(donationInput);


       // history page

       const historyItem = document.createElement('div');
       historyItem.className = 'p-4 border-2 rounded-lg '
   
       historyItem.innerHTML = `
        <p class="text-lg font-medium">${donationInput} Taka is Donate for Flood at Noakhali, Bangladesh</p>
               <p class="">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT+880 (Bangladsesh Standard Time)</p>
       `
       const historyItemList = document.getElementById('history-list');
       historyItemList.insertBefore(historyItem, historyItemList.firstChild);
    

     const donationAdd = parseFloat(document.getElementById('donation-add').innerText);
     const totalDonataion = donationInput + donationAdd;

     document.getElementById('donation-add').innerText = totalDonataion;
    
     const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;
    
});

// history btn

document.getElementById('history-btn').addEventListener('click',function () {
    remvoeFunction('donation-page-btn');
    addBgPrimary('history-btn') ;
    

 
})

document.getElementById('donation-page-btn').addEventListener('click',function () {
    remvoeFunction('history-btn');
    addBgPrimary('donation-page-btn');
   
});


