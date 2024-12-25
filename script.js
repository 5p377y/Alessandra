<script>
    // Function to open the modal and display the clicked image
    function openModal(src, alt) {
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('modalImage');
        var captionText = document.getElementById('caption');
        modal.style.display = "block";
        modalImg.src = src;
        captionText.textContent = alt; // Sets the caption to the alt text of the image
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
</script>
