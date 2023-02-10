const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal generated with a param when given a param without a partitionKey", () => {
    expect(deterministicPartitionKey({ a: 5, b: 6 })).toBe(
      "3221ae96836e0e4baae2a22d3b06d089fafb44d307a3aa8e78364e304b6b55cf19c7b43f6fe388fcba6437f3c7879e787bb57707c6f7421141f779a573962fb8"
    );

    expect(deterministicPartitionKey("abc")).toBe(
      "47070e8f45799540c361c6d92c2df5b2a54f25ff2a19bc8d2da1ef70ddcff117137baf4e206e56528e9eca14aea6a3ea24e4dfa942447d4a92dce09078f93128"
    );

    expect(deterministicPartitionKey(123)).toBe(
      "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc"
    );
  });

  it("Returns the literal generated with a partitionKey when given a param with a partitionKey", () => {
    expect(
      deterministicPartitionKey({ a: 5, b: 6, partitionKey: "1234f3" })
    ).toBe("1234f3");
    expect(
      deterministicPartitionKey({
        partitionKey:
          "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc48c48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc48cf735b0e9801e",
      })
    ).toBe(
      "a66e9613245d7c5f7048186322cefba42209f419d22db3b20b56c69d8c17201542dd731a4fb23b1e93b58b59223c9cfa28dd3d3f7e5203550dde4de7ff1eb9a4"
    );
  });
});
