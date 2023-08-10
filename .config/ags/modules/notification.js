const { Widget } = ags;
const { Notifications } = ags.Service;

Widget.widgets['modules/notification'] = () => Widget({
    type: 'box',
    className: 'notification',
    children: [
        {
            type: 'icon',
            icon: 'preferences-system-notifications-symbolic',
            // icon is an instance of Gtk.Image
            connections: [[Notifications, icon => icon.visible = Notifications.popups.size > 0]]
        },
        {
            type: 'label',
            connections: [[Notifications, label => {
                // notifications is a map, to get the last elememnt lets make an array
                label.label = Array.from(Notifications.popups)?.pop()?.[1].summary || '';
            }]],
        },
    ],
});