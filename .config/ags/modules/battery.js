const { Widget } = ags;
const { Battery } = ags.Service;

Widget.widgets['modules/battery'] = () => Widget({
    valign: 'center',
    type: 'box',
    className: 'bar-batt',
    children: [
        {
            type: 'label',
            valign: 'center',
            connections: [[Battery, label => label.label = `${Battery.percent}`]],
        },
        {
            type: 'progressbar',
            valign: 'center',
            // progressbar is a Gtk.ProgressBar, setValue() just calls set_fraction()
            connections: [[Battery, progress => progress.setValue(Battery.percent / 100)]],
        },
    ],
});