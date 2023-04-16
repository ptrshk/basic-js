const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  const sampleActivityNum = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivityNum) || sampleActivityNum <= 0 || sampleActivityNum > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivityNum) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
