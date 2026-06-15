const simulationSelect = document.getElementById('simulationSelect');
const openSimulationBtn = document.getElementById('openSimulationBtn');

if (simulationSelect && openSimulationBtn) {
  openSimulationBtn.addEventListener('click', () => {
    const url = simulationSelect.value;
    if (!url) {
      return;
    }
    window.open(url, '_blank', 'noopener');
  });

  simulationSelect.addEventListener('change', () => {
    const label = simulationSelect.options[simulationSelect.selectedIndex]?.text || 'Simulation';
    openSimulationBtn.textContent = `Open ${label}`;
  });
}
