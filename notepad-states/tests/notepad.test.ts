import { Notepad, NotepadState } from "../src/notepad";

describe("Notepad State Transitions", () => {
  let notepad: Notepad;

  beforeEach(() => {
    notepad = new Notepad();
  });

  test("Introducere text din document gol", () => {
    notepad.introduceText();
    expect(notepad.getState()).toBe(NotepadState.Formed);
  });

  test("Salvare ca New.txt", () => {
    notepad.introduceText();
    notepad.save();
    expect(notepad.getState()).toBe(NotepadState.Saved);
  });

  test("Salvare cu alt nume", () => {
    notepad.introduceText();
    notepad.save(true);
    expect(notepad.getState()).toBe(NotepadState.SavedAs);
  });

  test("Editare după salvare", () => {
    notepad.introduceText();
    notepad.save();
    notepad.edit();
    expect(notepad.getState()).toBe(NotepadState.Modified);
  });

  test("Închidere fără salvare", () => {
    notepad.introduceText();
    notepad.close();
    expect(notepad.getState()).toBe(NotepadState.Closed);
  });

  test("Reopen după închidere", () => {
    notepad.introduceText();
    notepad.save();
    notepad.close();
    notepad.reopen();
    expect(notepad.getState()).toBe(NotepadState.Saved);
  });
});