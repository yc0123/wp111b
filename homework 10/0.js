while (true) {
    let cmd = prompt("js>")
    if (cmd == 'exit') break
    await uval(cmd)
}