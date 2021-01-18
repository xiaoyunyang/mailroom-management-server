"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("apartment_user", [
      {
        apartment_id: "675fe8b5-71ae-4cb9-9e8f-c7a7ef8f42ec",
        user_id: "934801cd-a8ab-4ea7-9bcb-0eef97ae6cb6",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      },
      {
        apartment_id: "a44423cb-c9df-4fe9-b126-63ce97684ff4",
        user_id: "a98084cb-4718-45e4-96cd-1d2666ecad49",
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05"
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("apartment_user", null, {});
  }
};
