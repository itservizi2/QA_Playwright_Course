export enum NotepadState {
  Empty = "Notepad deschis (gol)",
  Formed = "Document format",
  Saved = "Document salvat",
  SavedAs = "Document salvat (alt nume)",
  Modified = "Document modificat",
  Closed = "Document închis"
}

export class Notepad {
  private state: NotepadState = NotepadState.Empty;

  getState(): NotepadState {
    return this.state;
  }

  introduceText() {
    if (this.state === NotepadState.Empty) {
      this.state = NotepadState.Formed;
    }
  }

  save(newName: boolean = false) {
    if (this.state === NotepadState.Formed || this.state === NotepadState.Modified) {
      this.state = newName ? NotepadState.SavedAs : NotepadState.Saved;
    }
  }

  edit() {
    if (this.state === NotepadState.Saved) {
      this.state = NotepadState.Modified;
    }
  }

  close(saveBefore: boolean = false) {
    if (saveBefore && (this.state === NotepadState.Formed || this.state === NotepadState.Modified)) {
      this.state = NotepadState.Saved;
    }
    this.state = NotepadState.Closed;
  }

  reopen() {
    if (this.state === NotepadState.Closed) {
      this.state = NotepadState.Saved;
    }
  }
}