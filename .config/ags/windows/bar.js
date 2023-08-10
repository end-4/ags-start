const { App, Widget } = ags;
const { Hyprland, Notifications, Mpris, Audio, Battery } = ags.Service;
const { exec, CONFIG_DIR } = ags.Utils;


// layout of the bar
const left = {
    type: 'box',
    className: 'bar-sidemodule',
    children: [
        // clientTitle,
        { type: 'modules/music' },
        // { type: 'box', hexpand: "true" },
        // { type: 'modules/activewindow' },
    ],
};

const center = {
    type: 'box',
    className: 'center',
    children: [
        { type: 'modules/workspaces' },
    ],
};

const right = {
    type: 'box',
    className: 'bar-sidemodule',
    halign: 'end',
    children: [
        { type: 'modules/clock' },
        { type: 'modules/battery' },
        { type: 'modules/notification' },
    ],
};

var bar = ags.Window({
    name: 'bar',
    anchor: ['top', 'left', 'right'],
    exclusive: true,
    child: {
        className: 'bar-bg',
        type: 'centerbox',
        children: [
            { type: 'box', className: 'bar-side' },
            {
                type: 'centerbox',
                children: [
                    left,
                    center,
                    right,
                ]
            },
            { type: 'box', className: 'bar-side' },
        ],
    },
})