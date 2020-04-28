//import each array of objects from dummy data:
const {
  sampleAnimalOrgs,
  sampleEnvironmentOrgs,
  sampleLocalGroups,
  sampleEvents,
} = require('../libs/sampleOrgProfs');

//make them into JSONs:
const animalOrgs = JSON.stringify(sampleAnimalOrgs);
const environmentOrgs = JSON.stringify(sampleEnvironmentOrgs);
const localGroupsOrgs = JSON.stringify(sampleLocalGroups);
const eventsOrgs = JSON.stringify(sampleEvents);

async function getOrgs() {
  const data = await {
    ...animalOrgs,
    ...environmentOrgs,
    ...localGroupsOrgs,
    ...eventsOrgs,
  };
  console.log(data);
  return data;
}

module.exports = { getOrgs };
