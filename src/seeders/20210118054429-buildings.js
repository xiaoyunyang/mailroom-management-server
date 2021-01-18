"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("buildings", [
      {
        id: "1646f8f3-ae08-4886-9051-c98236bfd56e",
        name: "Atrium",
        address: "88 Bleecker St, New York, NY 10012",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      },
      {
        id: "06568ec0-8c52-49d3-a54f-185ce4ed6654",
        name: "The Hamilton",
        address: "305 E 40th St, New York, NY 10016",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("buildings", null, {});
  }
};
