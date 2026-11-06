export function rehypeFootnoteLabel() {
  return (tree, file) => {
    const path = String(file.path ?? file.history?.[0] ?? '').replace(/\\/g, '/');
    if (!/\/content\/[^/]+\/vi\//.test(path)) return;
    visit(tree);
  };
}

function visit(node) {
  if (!node.children) return;
  for (const child of node.children) {
    if (child.type === 'element' && child.properties?.id === 'footnote-label') {
      child.children = [{ type: 'text', value: 'Chú thích' }];
    }
    const label = child.type === 'element' ? child.properties?.ariaLabel : undefined;
    if (typeof label === 'string' && label.startsWith('Back to reference')) {
      child.properties.ariaLabel = label.replace('Back to reference', 'Quay lại chỗ tham chiếu');
    }
    visit(child);
  }
}
