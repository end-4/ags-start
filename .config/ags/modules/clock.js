const { Widget } = ags;
const { exec, execAsync } = ags.Utils;

Widget.widgets['modules/clock'] = () => Widget({
    type: 'label',
    className: 'clock',
    // trim is for the whitespace at the end of the date output
    // but doing this is actually bad practice
    // because exec() will block the main thread, but in case of runnig date
    // I don't think it matters
    connections: [[5000, label => label.label = exec('date "+%H:%M • %A, %e/%m"')]],
});