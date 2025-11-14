  const sunshine = document.getElementById('sunshine');
  const tooltip = document.getElementById('tooltip');

  sunshine.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
  });

  sunshine.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });

  