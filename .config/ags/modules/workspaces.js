const { Widget } = ags;
const { Hyprland } = ags.Service;

// Widget.widgets['modules/workspaces'] = () => Widget({
//         type: 'eventbox',
//         onScrollUp: () => execAsync('hyprctl dispatch workspace -1 &'),
//         onScrollDown: () => execAsync('hyprctl dispatch workspace -1 &'),
//         child: {
//             type: 'box',
//             className: 'workspaces',
//             // box is an instance of Gtk.Box
//             connections: [[Hyprland, box => {
//                 // remove every children
//                 box.get_children().forEach(ch => ch.destroy());

//                 // add a button for each workspace
//                 const workspaces = 10;
//                 for (let i = 1; i <= workspaces; ++i) {
//                     box.add(ags.Widget({
//                         type: 'button',
//                         onClick: () => execAsync(`hyprctl dispatch workspace ${i}`),
//                         child: {
//                             valign: 'center',
//                             type: 'label',
//                             label: `${i}`,
//                             className: (Hyprland.active.workspace.id == i ? 'bar-ws-active' : 'bar-ws-empty'),
//                         },
//                     }));
//                 }

//                 // make the box render it
//                 box.show_all();
//             }]],
//         }
//     }
// );

Widget.widgets['modules/workspaces'] = ({
    fixed = 10,
    child,
    occupiedArray = [],
    ...props
}) => Widget({
    ...props,
    type: 'box',
    children: Array.from({ length: fixed }, (_, i) => i + 1).map(i => ({
        type: 'button',
        valign: 'center',
        onClick: () => execAsync(`hyprctl dispatch workspace ${i}`).catch(print),
        child: child ? Widget(child) : `${i}`,
        connections: [[Hyprland, btn => {
            const { workspaces, active } = Hyprland;
            const occupied = workspaces.has(i) && workspaces.get(i).windows > 0;
            const occupiedleft = i - 1 >= 1 && workspaces.has(i - 1) && workspaces.get(i - 1).windows > 0;
            const occupiedright = i + 1 <= fixed && workspaces.has(i + 1) && workspaces.get(i + 1).windows > 0;
            btn.toggleClassName('bar-ws', true);
            btn.toggleClassName('bar-ws-active', active.workspace.id === i);
            btn.toggleClassName('bar-ws-occupied', occupied);
            btn.toggleClassName('bar-ws-empty', !occupied);
            btn.toggleClassName('bar-ws-left', occupiedright && !occupiedleft);
            btn.toggleClassName('bar-ws-right', occupiedleft && !occupiedright);
            btn.toggleClassName('bar-ws-alone', !occupiedleft && !occupiedright);
        }]],
    })),
});

Widget.widgets['modules/workspacesPlus'] = ({
    fixed = 10,
    child,
    occupiedArray = [],
    ...props
}) => Widget({
    ...props,
    type: 'box',
    children: Array.from({ length: fixed }, (_, i) => i + 1).map(i => ({
        type: 'button',
        valign: 'center',
        onClick: () => execAsync(`hyprctl dispatch workspace ${i}`).catch(print),
        child: child ? Widget(child) : `${i}`,
        connections: [[Hyprland, btn => {
            const { workspaces, active } = Hyprland;
            const occupied = workspaces.has(i) && workspaces.get(i).windows > 0;
            const occupiedleft = i - 1 >= 1 && workspaces.has(i - 1) && workspaces.get(i - 1).windows > 0;
            const occupiedright = i + 1 <= fixed && workspaces.has(i + 1) && workspaces.get(i + 1).windows > 0;
            btn.toggleClassName('bar-ws', true);
            btn.toggleClassName('bar-ws-active', active.workspace.id === i);
            btn.toggleClassName('bar-ws-occupied', occupied);
            btn.toggleClassName('bar-ws-empty', !occupied);
            btn.toggleClassName('bar-ws-left', occupiedright && !occupiedleft);
            btn.toggleClassName('bar-ws-right', occupiedleft && !occupiedright);
            btn.toggleClassName('bar-ws-alone', !occupiedleft && !occupiedright);
        }]],
    })),
});