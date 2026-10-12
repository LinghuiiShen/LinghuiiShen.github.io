// Selected papers are Linghui's three first-author projects; default to selected.
const selectedPapers = new Set(['proar', 'badworld', 'decontext']);
const filterControls = document.querySelector('.pub-filters');
filterControls.hidden = false;
function applyFilter(selected) {
  document.querySelectorAll('.publication').forEach((paper) => {
    paper.hidden = selected && !selectedPapers.has(paper.id);
  });
  filterControls.querySelectorAll('button').forEach((control) => {
    const active = control.dataset.filter === (selected ? 'selected' : 'all');
    control.setAttribute('aria-pressed', String(active));
  });
}
applyFilter(true);
filterControls.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const selected = button.dataset.filter === 'selected';
  applyFilter(selected);
});
