function getMidiNote (refFreq, freq) {
  const noteNum = 12 * (Math.log(freq / refFreq) / Math.log(2));
  const midiNote = Math.round(noteNum) + 69;
  return midiNote;
}

function getFrequency (refFreq, note) {
  return refFreq * Math.pow(2, (note - 69) / 12);
}

function getOutOfPitch (refFreq, freq, note) {
  return Math.floor((1200 * Math.log(freq / getFrequency(refFreq, note))) / Math.log(2));

}
function getDetune (detune) {
  return detune > 0 ? detune : -detune;
}

const soundAnalyzer = {
  getMidiNote,
  getOutOfPitch,
  getDetune
};

export default soundAnalyzer;