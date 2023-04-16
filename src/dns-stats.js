function getDNSStats(domains) {
  const dnsStats = {};
  for (const domain of domains) {
    const levels = domain.split('.').reverse();
    let dnsName = '';
    for (const level of levels) {
      dnsName += `.${level}`;
      dnsStats[dnsName] = (dnsStats[dnsName] || 0) + 1;
    }
  }
  return dnsStats;
}

module.exports = {
  getDNSStats
};
