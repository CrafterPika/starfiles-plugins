// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.3b1',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    if (window.location.href == "https://starfiles.co/settings" || window.location.href == "https://starfiles.ml/settings") {
        var htmltext = `<button class="btn btn-small" id="pluginSettings">Plugin Settings</button>
        <br>
        <div id="pluginManagerSettings">
            <p>Test To proof it worked</p>
        </div>`;
        var x = document.getElementsByClassName('pagecard object'); 
        x[0].innerHTML = htmltext + x[0].innerHTML;

        document.getElementById("pluginSettings").addEventListener("click", function(){
            var x = document.getElementById("pluginManagerSettings");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        });
    } else {
        // Nothing
    }
}
// Run Plugin
init_plugin(meta);
