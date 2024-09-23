// donation for nowakhali

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

     document.getElementById('donation-input').value = ''; 
     alert('donation is complete');
    
});

// donation for feni


document.getElementById('donation-btn-2').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input-2').value);
    console.log(donationInput);
       // history page

       const historyItem = document.createElement('div');
       historyItem.className = 'p-4 border-2 rounded-lg '
   
       historyItem.innerHTML = `
         <p class="text-lg font-medium">${donationInput} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
             <p class="">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT+880 (Bangladsesh Standard Time)</p>
       `
       const historyItemList = document.getElementById('history-list');
       historyItemList.insertBefore(historyItem, historyItemList.firstChild);
     const donationAdd = parseFloat(document.getElementById('donation-add-2').innerText);
     const totalDonataion = donationInput + donationAdd;

     document.getElementById('donation-add-2').innerText = totalDonataion;
    
     const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;

     document.getElementById('donation-input-2').value = ''; 
     alert('donation is complete');
    
});


// donation for quota movement


document.getElementById('donation-btn-3').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input-3').value);
    console.log(donationInput);
       // history page

       const historyItem = document.createElement('div');
       historyItem.className = 'p-4 border-2 rounded-lg '
   
       historyItem.innerHTML = `
        <p class="text-lg font-medium">${donationInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
           <p class="">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT+880 (Bangladsesh Standard Time)</p>
       `
       const historyItemList = document.getElementById('history-list');
       historyItemList.insertBefore(historyItem, historyItemList.firstChild);
     const donationAdd = parseFloat(document.getElementById('donation-add-3').innerText);

     const totalDonataion = donationInput + donationAdd;

     document.getElementById('donation-add-3').innerText = totalDonataion;
    
     const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;

     document.getElementById('donation-input-3').value = ''; 
     alert('donation is complete');
    
});

document.getElementById('history-btn').addEventListener('click',function () {
    remvoeFunction('donation-page-btn');
    addBgPrimary('history-btn') ;
    

 
})

// donation page btn

document.getElementById('donation-page-btn').addEventListener('click',function () {
    remvoeFunction('history-btn');
    addBgPrimary('donation-page-btn');
   
});


