export function getProcedures() {
  const iframe = document.querySelector('#iframe');
  if (iframe) {
    const windowFrame = iframe.contentWindow;
    if (windowFrame) {
      const procedures = windowFrame?.v3d?.puzzles?.procedures;
      if (procedures) {
        return procedures;
      }
    }
  }
  return null;
}
