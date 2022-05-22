const { getLaunches, getRockets } = require("./axiosRequests");

module.exports = async () => {
  const launchesResponse = await getLaunches();
  const rocketsResponse = await getRockets();
  let response = [];

  launchesResponse.data.forEach((launch) => {
    const rocket = rocketsResponse.data.find(
      (rocket) => rocket.rocket_id === launch.rocket.rocket_id
    );

    response.push({
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      rocket: {
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        images: rocket.flickr_images,
      },
      payloads: launch.rocket.second_stage.payloads.map((x) => {
        return {
          payload_id: x.payload_id,
          manufacturer: x.manufacturer,
          type: x.payload_type,
        };
      }),
    });
  });

  return response;
};
