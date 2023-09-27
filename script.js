document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const updateButton = document.getElementById('updateButton');
    const profileDiv = document.querySelector('.profile');
    const updateFormDiv = document.querySelector('.update-form');
    const newImageInput = document.getElementById('newImage');
    const avatarImage = document.getElementById('avatar');

    editButton.addEventListener('click', function () {
        profileDiv.style.display = 'none';
        updateFormDiv.style.display = 'block';
    });

    newImageInput.addEventListener('change', function () {
        const file = newImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    updateButton.addEventListener('click', function () {
        const newFullName = document.getElementById('newFullName').value;
        const newJobTitle = document.getElementById('newJobTitle').value;
        const newCompanyName = document.getElementById('newCompanyName').value;
        const newPhone = document.getElementById('newPhone').value;
        const newPersonalMail = document.getElementById('newPersonalMail').value;
        const newWorkMail = document.getElementById('newWorkMail').value;
        
        // Cập nhật các thông tin cá nhân
        document.getElementById('fullName').textContent = newFullName;
        document.getElementById('jobTitle').textContent = newJobTitle;
        document.getElementById('companyName').textContent = newCompanyName;
        document.getElementById('phone').textContent = newPhone;
        document.getElementById('personalMail').textContent = newPersonalMail;
        document.getElementById('workMail').textContent = newWorkMail;

        // Cập nhật các liên kết mạng xã hội
        const newFacebookLink = document.getElementById('newFacebookLink').value;
        const newZaloLink = document.getElementById('newZaloLink').value;
        const newGmailLink = document.getElementById('newGmailLink').value;
        
        document.getElementById('facebookIcon').href = newFacebookLink;
        document.getElementById('zaloIcon').href = newZaloLink;
        document.getElementById('gmailIcon').href = newGmailLink;

        profileDiv.style.display = 'block';
        updateFormDiv.style.display = 'none';
    });
});
