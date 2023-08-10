const { Widget } = ags;
const { Hyprland } = ags.Service;

Widget.widgets['modules/activewindow'] = () => Widget({
    type: 'label',
    className: 'client-title',
    xalign: 1,
    // label is an instance of Gtk.Label
    connections: [[Hyprland, label => {
        label.label = Hyprland.active.client.title || '';
    }]],
});