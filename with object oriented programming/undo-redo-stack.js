class UndoRedoStack {
    constructor({
        textInput,
        textarea
    }) {
        this.undoStack = []
        this.redoStack = []
        this.textInput = textInput
        this.textarea = textarea
    }

    getState() {
        return this.undoStack[this.undoStack.length - 1]
    }

    do(state) {
        this.undoStack.push(state)
        this.redoStack = []
    }

    undo() {
        if (this.undoStack.length <= 1) {
            alert("nothing to undo")
            return
        }

        const lastState = this.undoStack.pop()
        this.redoStack.push(lastState)

        this.displayCurrentState()
    }

    redo() {
        if (this.redoStack.length <= 0) {
            alert("nothing to redo")
            return
        }

        const nextState = this.redoStack.pop()
        this.undoStack.push(nextState)

        this.displayCurrentState()
    }

    displayCurrentState() {
        const currentState = this.getState()
        this.textInput.value = currentState.subject
        this.textarea.value = currentState.message
    }
}
