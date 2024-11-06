function generateResume(event: Event) {
    event.preventDefault(); 
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLSelectElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
}

document.getElementById('resume-form')?.addEventListener('submit', generateResume);
