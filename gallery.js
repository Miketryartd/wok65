function menu(){
    var wrapper = document.getElementById('navflex');

    if (wrapper.style.display === 'block'){
        wrapper.style.display = 'none';
    } else {
        wrapper.style.display = 'block';
    }
}

// modal func//
var modal = document.getElementById('Modal');
var modalImage = document.getElementById('modalImage');


function openModal(imageSrc) {
  modal.style.display = 'block';
  modalImage.src = imageSrc;
}


function closeModal() {
  modal.style.display = 'none';
}


modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
//modl func close//