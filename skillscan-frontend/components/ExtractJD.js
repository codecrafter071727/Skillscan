export function renderExtractJD() {
  document.getElementById("section").innerHTML = `
    <h2>Extract Required Skills from JD</h2>
    <textarea id="jdText" rows="6" placeholder="Paste Job Description here..."></textarea>
    <button onclick="extractSkills()">Extract</button>
    <pre id="jdResult"></pre>
  `;

  window.extractSkills = async () => {
    const jdText = document.getElementById("jdText").value;
    const res = await fetch('/extract-jd', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ jd_text: jdText })
    });
    const data = await res.json();
    document.getElementById("jdResult").innerText = JSON.stringify(data, null, 2);
  };
}
