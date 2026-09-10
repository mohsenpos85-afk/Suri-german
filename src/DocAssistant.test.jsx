import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DocAssistant from "./DocAssistant.jsx";

describe("Document Assistant scanner", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("docassist_onboarded", "1");
  });

  it("keeps camera capture and file import as separate actions", () => {
    render(<DocAssistant lang="en" onBack={vi.fn()} callClaude={vi.fn()} />);

    expect(screen.getByRole("button", { name: /take a photo/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /import file/i })).toBeInTheDocument();
    expect(screen.getByText(/photo, pdf or image of a document/i)).toBeInTheDocument();
  });
});