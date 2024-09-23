// donation for nowakhali

document.getElementById('donation-btn').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input').value);
    const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
     if (isNaN(donationInput) || donationInput <= 0 || donationInput === '' || donationInput > donationMinus ) {
      return alert('Invalid donation amount');
     }
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
    
  
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;

    modalFunction("my_modal_1");

     document.getElementById('donation-input').value = ''; 
     
    
});


// donation for feni


document.getElementById('donation-btn-2').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input-2').value);
    const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
     if (isNaN(donationInput) || donationInput <= 0 || donationInput === '' || donationInput > donationMinus ) {
      return alert('Invalid donation amount');
     }
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
    
   
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;

    //  show modal
    modalFunction("my_modal_1");

     document.getElementById('donation-input-2').value = ''; 
   
    
});


// donation for quota movement


document.getElementById('donation-btn-3').addEventListener('click',function(){
    const donationInput =  parseFloat(document.getElementById('donation-input-3').value);
    const donationMinus = parseFloat(document.getElementById('donation-minus').innerText);
    if (isNaN(donationInput) || donationInput <= 0 || donationInput === '' || donationInput > donationMinus ) {
     return alert('Invalid donation amount');
    }
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
    
    
     const totalDonationMinus = donationMinus - donationInput;
     document.getElementById('donation-minus').innerText = totalDonationMinus;

     modalFunction("my_modal_1");

     document.getElementById('donation-input-3').value = ''; 
    
    // modal open
    // document.getElementById('my_modal_1').showModal();
    // onclick="my_modal_1.showModal()"
});

// history button

document.getElementById('history-btn').addEventListener('click',function () {
    remvoeFunction('donation-page-btn');
    addBgPrimary('history-btn'); 
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
})

// donation page btn

document.getElementById('donation-page-btn').addEventListener('click',function () {
    remvoeFunction('history-btn');
    addBgPrimary('donation-page-btn');

    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('card-container').classList.remove('hidden');
   
});

// blog btn

document.getElementById('blog-btn').addEventListener('click',function(){
    // location.replace('http://127.0.0.1:5500/blog.html');
    window.location.href ='http://127.0.0.1:5500/blog.html';
});


document.getElementById('blog-btn').addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/blogs.html";
  });



