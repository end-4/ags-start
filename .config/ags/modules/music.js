const { Widget } = ags;
const { Mpris, Audio } = ags.Service;

Widget.widgets['modules/music'] = () => Widget({
    type: 'scrollable',
    hexpand: true,
    child: {
        type: 'label',
        className: 'media',
        connections: [[Mpris, label => {
            const mpris = Mpris.getPlayer('');
            if (mpris)
                label.label = `${mpris.trackTitle} • ${mpris.trackArtists.join(', ')}`;
            else
                label.label = 'No mewwsic';
        }]],
    }
});