utils.set('.square', {
    '--radius': '4px',
    '--x': '0rem',
    '--pseudo-el-after-scale': '1', // applied to the pseudo element "::after"
    borderRadius: 'var(--radius)',
    translateX: 'var(--x)',
  });
  
  // Animate the values of the CSS variables
  animate('.square', {
    '--radius': '20px',
    '--x': '16.5rem',
    '--pseudo-el-after-scale': '1.55' // Animates the ":after" pseudo element of the element
  });