export function renderBatchProcess() {
  document.getElementById("section").innerHTML = `
    <h2>Batch Resume Processing</h2>
    <input id="folderPath" placeholder="Folder Path (backend should access this)"/>
    <textarea id="jdSkills" placeholder="JD Required Skills (comma-separated)"></textarea>
    <textarea id="softSkills" placeholder="Desired Soft Skills (comma-separated)"></textarea>
    <button onclick="batchProcess()">Process</button>
    <pre id="batchOutput"></pre>
  `;

  window.batchProcess = async () => {
    const folderPath = document.getElementById("folderPath").value;
    const jdSkills = document.getElementById("jdSkills").value;
    const softSkills = document.getElementById("softSkills").value;

    const res = await fetch('/batch-process', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        folder_path: folderPath,
        jd_required_skills: jdSkills,
        desired_soft_skills: softSkills
      })
    });

    const data = await res.json();
    document.getElementById("batchOutput").innerText = JSON.stringify(data, null, 2);
  };
}
