export function rehypeMermaidFigure() {
  return (tree) => visit(tree);
}

function visit(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (isMermaidSvg(child)) return wrap(child);
    visit(child);
    return child;
  });
}

function isMermaidSvg(node) {
  return (
    node.type === 'element' &&
    node.tagName === 'svg' &&
    typeof node.properties?.id === 'string' &&
    node.properties.id.startsWith('mermaid')
  );
}

function wrap(svg) {
  const className = [].concat(svg.properties.className ?? []);
  svg.properties.className = [...className, 'mermaid-svg'];
  const style = String(svg.properties.style ?? '');
  const natural = /max-width:\s*([\d.]+)px/.exec(style);
  if (natural) {
    const min = Math.round(Number(natural[1]) * 0.6);
    svg.properties.style = `${style.replace(/;?\s*$/, '')};min-width:${min}px`;
  }
  return {
    type: 'element',
    tagName: 'figure',
    properties: { className: ['diagram', 'mermaid-diagram'], dataPagefindIgnore: '' },
    children: [
      { type: 'element', tagName: 'div', properties: { className: ['diagram-frame'] }, children: [svg] },
    ],
  };
}
