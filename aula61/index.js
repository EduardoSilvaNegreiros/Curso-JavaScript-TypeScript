function recursiva(max) {
    console.log(max);
    if (max >= 17) return;
    max++;
    recursiva(max);
}
recursiva(0);