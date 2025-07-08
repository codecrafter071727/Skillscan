export function renderUploadResume() {
  document.getElementById("section").innerHTML = `
    <h2>Upload Resume for Scoring</h2>
    <input type="file" id="resumeFile"/>
    <textarea id="skills" placeholder="JD Required Skills (comma-separated)"></textarea>
    <textarea id="softSkills" placeholder="Desired Soft Skills (comma-separated)"></textarea>
    <button onclick="uploadResume()">Submit</button>
    <pre id="resumeOutput"></pre>
  `;

  window.uploadResume = async () => {
    const file = document.getElementById("resumeFile").files[0];
    const jdSkills = document.getElementById("skills").value;
    const softSkills = document.getElementById("softSkills").value;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('jd_required_skills', jdSkills);
    formData.append('desired_soft_skills', softSkills);

    const res = await fetch('/upload-resume', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    document.getElementById("resumeOutput").innerText = JSON.stringify(data, null, 2);
  };
}
