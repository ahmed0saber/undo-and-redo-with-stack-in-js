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
        const lastState = this.undoStack.pop()
        this.redoStack.push(lastState)
    }

    redo() {
        const nextState = this.redoStack.pop()
        this.undoStack.push(nextState)
    }

    canUndo() {
        return this.undoStack.length > 1
    }

    canRedo() {
        return this.redoStack.length > 0
    }
}
