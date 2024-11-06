var _a;
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('Phone').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
}
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', generateResume);
