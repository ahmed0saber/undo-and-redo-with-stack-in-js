class UndoRedoStack {
    constructor() {
        this.undoStack = []
        this.redoStack = []
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
        const textInput = document.querySelector(".text-input")
        const textarea = document.querySelector(".textarea")
        textInput.value = currentState.subject
        textarea.value = currentState.message
    }
}

const stateHandler = new UndoRedoStack()
