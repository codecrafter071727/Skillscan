import { renderExtractJD } from './components/ExtractJD.js';
import { renderUploadResume } from './components/UploadResume.js';
import { renderBatchProcess } from './components/BatchProcess.js';

document.getElementById("app").innerHTML = `
  <h1>SkillScan AI Dashboard</h1>
  <button onclick="loadJD()">Extract JD</button>
  <button onclick="loadResume()">Upload Resume</button>
  <button onclick="loadBatch()">Batch Process</button>
  <div id="section"></div>
`;

window.loadJD = () => renderExtractJD();
window.loadResume = () => renderUploadResume();
window.loadBatch = () => renderBatchProcess();
