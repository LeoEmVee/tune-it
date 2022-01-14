function getNote (freq) {
  const noteNum = 12 * (Math.log(freq / 440) / Math.log(2));
  return Math.round(noteNum) + 69;
}

function getFrequency (note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

function getOutOfPitch (freq, note) {
  return Math.floor((1200 * Math.log(freq / getFrequency(note))) / Math.log(2));

}
function getDetune (detune) {
  return detune > 0 ? detune : -detune;
}

const soundAnalyzer = {
  getNote,
  getOutOfPitch,
  getDetune
};

export default soundAnalyzer;