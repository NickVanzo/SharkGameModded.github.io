const HelpersText = {
    '#resource-shark': 'Obtains: <br/><span class="fish-yellow">fish</span>',
    '#resource-ray': 'Obtains: <br/><span class="fish-yellow">fish</span><br/><span class="sand-yellow">sand</span>',
    '#resource-crab': 'Obtains: <br/><span class="crab-red">crystals</span>',
    '#resource-scientist': 'Obtains: <br/><span class="science-purple">science</span>',
    '#resource-science': 'Obtained by: <br/><span class="shark-white">science shark</span>',
    '#resource-fish': 'Obtained by: <br/><span class="shark-blue">shark</span><br/><span class="ray-blue">ray</span>',
    '#resource-sand': 'Obtained by: <br/><span class="ray-blue">ray</span>',
    '#resource-crystal': 'Obtained by: <br/><span class="shark-white">crabs</span>'
};
let infoPanelOpened = 0;

$(document).ready(function () {
    // Funzione per creare e mostrare il tooltip
    function showTooltip(event, boxText) {
        // Crea l'elemento della box
        var tooltip = $('<div class="tooltip"></div>').html(boxText);
        // Aggiungi stile alla box
        tooltip.css({
            'position': 'absolute',
            'width': '150px',
            'background-color': '#2e4372',
            'border': '1px solid #fff',
            'padding': '10px',
            'border-radius': '20px',
            'z-index': '9999',
            'top': event.pageY + 10, // Posizione top relativa al mouse
            'left': event.pageX + 10, // Posizione sinistra relativa al mouse
            'cursor': 'pointer' // Imposta il cursore a "pointer"

        });

        // Aggiungi la box al body del documento
        $('body').append(tooltip);

        // Al movimento del mouse, aggiorna la posizione della box
        $(event.currentTarget).on('mousemove', function (event) {
            tooltip.css({
                'top': event.pageY + 10,
                'left': event.pageX + 10
            });
        });


    }

    // Funzione per nascondere il tooltip
    function hideTooltip() {
        $('.tooltip').remove();
    }

    // Loop attraverso gli elementi di HelpersText e associa gli eventi
    for (var selector in HelpersText) {
        if (HelpersText.hasOwnProperty(selector)) {
            (function (selector) {
                $(document).on('mouseenter', selector, function (event) {
                    var boxText = HelpersText[selector];
                    showTooltip(event, boxText);
                });

                $(document).on('mouseleave', selector, hideTooltip);
            })(selector);
        }
    }

    const tableContainer = $('#status');
    if (tableContainer) {
        tableContainer.on('mouseenter', () => {
            infoPanelOpened++;
            console.log(`Info panel was opened: ${infoPanelOpened}`);
        })
    }
});
