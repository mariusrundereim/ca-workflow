import { logout } from "../api/auth/logout";
import "jest-localstorage-mock";

describe("logout function", () => {
  it("clears token from browser storage", () => {
    localStorage.setItem("token", "mocked-token");
    logout();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
