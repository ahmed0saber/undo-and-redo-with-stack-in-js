const textInput = document.querySelector(".text-input")
const textarea = document.querySelector(".textarea")
const undoBtn = document.querySelector(".undo-btn")
const doBtn = document.querySelector(".do-btn")
const redoBtn = document.querySelector(".redo-btn")

const stateHandler = new UndoRedoStack()

const displayCurrentState = () => {
    const currentState = stateHandler.getState()
    textInput.value = currentState.subject
    textarea.value = currentState.message
}

doBtn.addEventListener("click", () => {
    if (textInput.value.trim() === "" || textarea.value.trim() === "") {
        alert("nothing to do")
        return
    }

    stateHandler.do({
        subject: textInput.value,
        message: textarea.value,
    })
})

undoBtn.addEventListener("click", () => {
    if (stateHandler.canUndo()) {
        stateHandler.undo()
        displayCurrentState()
        return
    }

    alert("nothing to undo")
})

redoBtn.addEventListener("click", () => {
    if (stateHandler.canRedo()) {
        stateHandler.redo()
        displayCurrentState()
        return
    }

    alert("nothing to redo")
})
