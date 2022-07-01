const key = "ProPhet@456";
const domain = "http://localhost:4000";
const CLIENT_URL = "http://localhost:3000/";

const calRatePoint = (rates) => {
  let point = 0;

  const fivePointRes = rates.filter((i) => i.ratePoint === 5);
  const fourPointRes = rates.filter((i) => i.ratePoint === 4);
  const threePointRes = rates.filter((i) => i.ratePoint === 3);
  const twoPointRes = rates.filter((i) => i.ratePoint === 2);
  const onePointRes = rates.filter((i) => i.ratePoint === 1);
  const totalScores =
    fivePointRes.length * 5 +
    fourPointRes.length * 4 +
    threePointRes.length * 3 +
    twoPointRes.length * 2 +
    onePointRes.length * 1;
  const totalRes =
    fivePointRes.length +
    fourPointRes.length +
    threePointRes.length +
    twoPointRes.length +
    onePointRes.length;
  point = Math.ceil(totalScores / totalRes);
  return point;
};

module.exports = {
  key,
  domain,
  CLIENT_URL,
  calRatePoint,
};
