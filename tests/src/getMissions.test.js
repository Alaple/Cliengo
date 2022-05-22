//Incomplete example of testing.

const axios = require("axios");
const sut = require("../../src/getMissions"); // sut => Subject Under Test

jest.mock("axios");

describe('Testing "getMissions"', () => {
  it("Should return empty values", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [{}] }));
    const response = await sut();
    expect(response).toStrictEqual([]);
  });
});
