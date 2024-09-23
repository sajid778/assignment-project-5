function remvoeFunction(id) {  
    document.getElementById(id).classList.remove('bg-primary');
    document.getElementById(id).classList.add('bg-gray-200');
}

function addBgPrimary(id) {
    document.getElementById(id).classList.add('bg-primary' );
    document.getElementById(id).classList.remove('bg-gray-200' );
}

