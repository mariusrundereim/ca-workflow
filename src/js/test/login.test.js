import { login } from "../api/auth/login";
import "jest-localstorage-mock";

describe("login function", () => {
  it("fetch and stores token in browser", async () => {
    const email = "pertore55@stud.noroff.no";
    const pw = "pertore-55";

    await login(email, pw);
    expect(localStorage.getItem("token")).toBeTruthy();
  });
});
