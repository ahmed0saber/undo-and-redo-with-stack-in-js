const textInput = document.querySelector(".text-input")
const textarea = document.querySelector(".textarea")
const undoBtn = document.querySelector(".undo-btn")
const doBtn = document.querySelector(".do-btn")
const redoBtn = document.querySelector(".redo-btn")

const stateHandler = new UndoRedoStack({
    textInput,
    textarea
})

doBtn.addEventListener("click", () => {
    stateHandler.do({
        subject: textInput.value,
        message: textarea.value,
    })
})

undoBtn.addEventListener("click", () => {
    stateHandler.undo()
})

redoBtn.addEventListener("click", () => {
    stateHandler.redo()
})
