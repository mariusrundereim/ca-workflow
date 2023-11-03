import { login } from "../api/auth/login";
import "jest-localstorage-mock";

describe("login function", () => {
  it("fetch and stores token in browser", async () => {
    const email = "eivindalex@noroff.no";
    const pw = "asdf1234";

    await login(email, pw);
    expect(localStorage.getItem("token")).toBeTruthy();
  });
});
