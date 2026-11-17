(() => {
  const filters = document.querySelector('#filters');
  const input = document.querySelector('#query');
  const clear = document.querySelector('#clear');
  const status = document.querySelector('#status');
  const empty = document.querySelector('#empty');
  const categories = Array.from(document.querySelectorAll('[data-filter]'));
  const collections = Array.from(document.querySelectorAll('[data-view]'));
  const cards = Array.from(document.querySelectorAll('[data-collection]'));
  let category = '';
  let collection = 'school';

  function words(text) {
    return text.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  }

  cards.forEach(card => {
    card.dataset.search = words(`${card.querySelector('h3').textContent} ${card.dataset.category} ${card.dataset.search}`);
  });

  function render() {
    const terms = words(input.value).split(' ').filter(Boolean);
    const counts = { school: 0, nhs: 0 };
    for (const card of cards) {
      const matches = (!category || card.dataset.category === category)
        && terms.every(term => card.dataset.search.includes(term));
      card.hidden = !matches;
      if (matches) counts[card.dataset.collection] += 1;
    }
    for (const button of collections) {
      const name = button.dataset.view;
      button.setAttribute('aria-pressed', String(name === collection));
      button.querySelector('span').textContent = `(${counts[name]})`;
      document.getElementById(name).hidden = name !== collection;
    }
    for (const button of categories) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    }
    const count = counts[collection];
    const label = collection === 'school' ? 'school guide' : 'NHS reference';
    status.textContent = `${count} ${label}${count === 1 ? '' : 's'}`;
    empty.hidden = count > 0;
    clear.hidden = !input.value;
  }

  input.addEventListener('input', render);
  clear.addEventListener('click', () => {
    input.value = '';
    input.focus();
    render();
  });
  for (const button of categories) {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      render();
    });
  }
  for (const button of collections) {
    button.addEventListener('click', () => {
      collection = button.dataset.view;
      render();
    });
  }
  render();
  filters.hidden = false;
})();
