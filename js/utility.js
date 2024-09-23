function remvoeFunction(id) {  
    document.getElementById(id).classList.remove('bg-primary');
    document.getElementById(id).classList.add('bg-gray-200');
}

function addBgPrimary(id) {
    document.getElementById(id).classList.add('bg-primary' );
    document.getElementById(id).classList.remove('bg-gray-200' );
}


function modalFunction(id) {
    document.getElementById(id).showModal();
    document.getElementById('confirm-btn').addEventListener('click',function(){
        document.getElementById('my_modal_1').close();
    })
}
// function donateInput(id) {
//     const donationInput =  parseFloat(document.getElementById(id).value);

// }


