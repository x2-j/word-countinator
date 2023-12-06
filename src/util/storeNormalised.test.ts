import storeNormalised from "./storeNormalised"

describe("storeNormalised", () => {
  it("should store the normalised word", () => {
    const store = {}
    storeNormalised("adaptavist", store)
    expect(store).toEqual({ adaptavist: 1 })
  })

  it("should increment the count", () => {
    const store = { adaptavist: 1 }
    storeNormalised("adaptavist", store)
    expect(store).toEqual({ adaptavist: 2 })
  })

  it("should store multiple values", () => {
    const store = { adaptavist: 1 }
    storeNormalised("adaptavist", store)
    storeNormalised("test", store)
    storeNormalised("string", store)
    expect(store).toEqual({ adaptavist: 2, test: 1, string: 1 })
  })
})