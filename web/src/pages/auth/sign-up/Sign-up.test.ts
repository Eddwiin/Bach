import { render } from "@testing-library/react";
import SignUp from "./Sign-up.tsx";

describe("Sign up Component", () => {
  describe("When the page is loaded", () => {
    beforeEach(() => {
      render(<SignUp />);
    });

    test("should disable sign up button", async () => {});
  });
});
