import { MyContentWindow } from '../globalType';
export function getProcedures() {
  const iframe = document.querySelector('.model__frame') as HTMLIFrameElement;
  if (iframe) {
    const windowFrame = iframe.contentWindow as MyContentWindow;
    if (windowFrame) {
      const procedures = windowFrame?.v3d?.puzzles?.procedures;
      if (procedures) {
        return procedures;
      }
    }
  }
  return null;
}
