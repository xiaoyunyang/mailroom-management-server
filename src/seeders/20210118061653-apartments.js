"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("apartments", [
      {
        id: "675fe8b5-71ae-4cb9-9e8f-c7a7ef8f42ec",
        apartment_number: "6B",
        building_id: "1646f8f3-ae08-4886-9051-c98236bfd56e",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      },
      {
        id: "a44423cb-c9df-4fe9-b126-63ce97684ff4",
        apartment_number: "14V",
        building_id: "06568ec0-8c52-49d3-a54f-185ce4ed6654",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("apartments", null, {});
  }
};
