export default function autoCorrelate (buffer, sampleRate) {
  let size = buffer.length, rms = 0;
  
  for (let i=0; i<size; i++) {
    const val = buffer[i];
    rms += val * val;
  }

  rms = Math.sqrt(rms / size);
  
  if (rms < 0.001) return -1;

  let r1 = 0, r2 = size - 1, threshold = 0.2;
  
  for (let i=0; i<size/2; i++) {
    if (Math.abs(buffer[i]) < threshold) {
      r1 = i;
      break;
    }
  }
  for (let i=1; i<size/2; i++) {
    if (Math.abs(buffer[size-i]) < threshold) {
      r2 = size - i;
      break;
    }
  }

  buffer = buffer.slice(r1, r2);
  size = buffer.length;

  const c = new Array(size).fill(0);
  
  for (let i=0; i<size; i++) {
    for (let j=0; j<size-i; j++) {
      c[i] = c[i] + buffer[j] * buffer[j + i];
    }
  }

  let d = 0;

  while (c[d] > c[d+1]) {
    d++;
  }
  
  let maxval = -1, maxpos = -1;

  for (let i=d; i<size; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }

  let T0 = maxpos;
  const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
  const a = (x1 + x3 - 2 * x2) / 2, b = (x3 - x1) / 2;
  
  if (a) T0 = T0 - b / (2 * a);
  return sampleRate / T0;
}