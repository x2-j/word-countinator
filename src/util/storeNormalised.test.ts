import storeNormalised from "./storeNormalised"

describe("storeNormalised", () => {
  it("should store the normalised word in the store", () => {
    const store = {}
    storeNormalised("adaptavist", store)
    expect(store).toEqual({ adaptavist: 1 })
  })

  it("should increment the count for the normalised word in the store", () => {
    const store = { adaptavist: 1 }
    storeNormalised("adaptavist", store)
    expect(store).toEqual({ adaptavist: 2 })
  })
})