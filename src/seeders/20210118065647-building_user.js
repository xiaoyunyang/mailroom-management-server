"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("building_user", [
      {
        building_id: "1646f8f3-ae08-4886-9051-c98236bfd56e",
        user_id: "823714db-7f42-4618-b69f-2b168a9181a4",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      },
      {
        building_id: "06568ec0-8c52-49d3-a54f-185ce4ed6654",
        user_id: "823714db-7f42-4618-b69f-2b168a9181a4",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("building_user", null, {});
  }
};
