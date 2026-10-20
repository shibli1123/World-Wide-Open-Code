import { describe, expect, test } from "bun:test"
import { consoleReturnWindow } from "./deep-link"

describe("Console return deep links", () => {
  test("reads the originating World Wide Open Code Desktop window", () => {
    expect(consoleReturnWindow("wwoc://console/authorized?window=window-a")).toBe("window-a")
    expect(consoleReturnWindow("wwoc://console/authorized?window=window%20b")).toBe("window b")
  })

  test("retains the legacy OpenCode callback scheme", () => {
    expect(consoleReturnWindow("opencode://console/authorized?window=window-a")).toBe("window-a")
  })

  test("rejects unrelated and malformed links", () => {
    expect(consoleReturnWindow("wwoc://console/other?window=window-a")).toBeUndefined()
    expect(consoleReturnWindow("wwoc://other/authorized?window=window-a")).toBeUndefined()
    expect(consoleReturnWindow("https://console/authorized?window=window-a")).toBeUndefined()
    expect(consoleReturnWindow("not a url")).toBeUndefined()
    expect(consoleReturnWindow("wwoc://console/authorized")).toBeUndefined()
  })
})
