const googleWorkspaceUsers = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more user objects as needed
  ];

  function fetchGoogleWorkspaceUsers() {
    const userSelector = document.getElementById('userSelector');

    // Populate the dropdown with Google Workspace users
    googleWorkspaceUsers.forEach(user => {
      const option = document.createElement('option');
      option.value = user.email; // Use the email as the value
      option.textContent = user.name;
      userSelector.appendChild(option);
    });
  }

  function loadTemplates() {
    const templateUpload = document.getElementById('templateUpload');
    const templateList = document.getElementById('templateList');

    const files = templateUpload.files;
    if (files.length > 0) {
      const templateFile = files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const templateContent = e.target.result;
        // For demonstration, display the template content
        templateList.innerHTML = `<p><strong>Loaded Template:</strong></p><pre>${templateContent}</pre>`;
      };

      reader.readAsText(templateFile);
    } else {
      alert('Please choose a template file.');
    }
  }

  function previewSignature() {
    const userSelector = document.getElementById('userSelector');
    const signaturePreview = document.getElementById('signaturePreview');

    const selectedUserEmail = userSelector.value;
    const selectedUser = googleWorkspaceUsers.find(user => user.email === selectedUserEmail);

    if (selectedUser) {
      // For demonstration, display a simple preview
      const previewContent = `<p><strong>Preview for ${selectedUser.name}:</strong></p><p>Email: ${selectedUser.email}</p>`;
      signaturePreview.innerHTML = previewContent;
    } else {
      signaturePreview.innerHTML = '<p>Select a user to preview.</p>';
    }
  }

  function openMenu(menu) {
    // Handle menu navigation logic here
    alert(`Opening ${menu}`);
  }

  // Call the function to populate Google Workspace users
  fetchGoogleWorkspaceUsers();