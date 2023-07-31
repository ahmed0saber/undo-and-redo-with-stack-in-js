const textInput = document.querySelector(".text-input")
const textarea = document.querySelector(".textarea")
const undoBtn = document.querySelector(".undo-btn")
const doBtn = document.querySelector(".do-btn")
const redoBtn = document.querySelector(".redo-btn")
const undoStack = []
const redoStack = []

const getCurrentState = () => {
    return undoStack[undoStack.length - 1]
}

const doSomething = (state) => {
    if (state.subject.trim() === "" || state.message.trim() === "") {
        alert("nothing to do")
        return
    }

    undoStack.push(state)
    redoStack.length = 0
}

const undoSomething = () => {
    if (undoStack.length <= 1) {
        alert("nothing to undo")
        return
    }

    const lastState = undoStack.pop()
    redoStack.push(lastState)

    displayCurrentState()
}

const redoSomething = () => {
    if (redoStack.length <= 0) {
        alert("nothing to redo")
        return
    }

    const nextState = redoStack.pop()
    undoStack.push(nextState)

    displayCurrentState()
}

const displayCurrentState = () => {
    const currentState = getCurrentState()
    textInput.value = currentState.subject
    textarea.value = currentState.message
}

doBtn.addEventListener("click", () => {
    doSomething({
        subject: textInput.value,
        message: textarea.value,
    })
})

undoBtn.addEventListener("click", () => {
    undoSomething()
})

redoBtn.addEventListener("click", () => {
    redoSomething()
})
